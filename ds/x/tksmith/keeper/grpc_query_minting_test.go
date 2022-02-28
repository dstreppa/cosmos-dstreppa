package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestMintingQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMinting(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetMintingRequest
		response *types.QueryGetMintingResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetMintingRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetMintingResponse{Minting: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetMintingRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetMintingResponse{Minting: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetMintingRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Minting(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Equal(t, tc.response, response)
			}
		})
	}
}

func TestMintingQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNMinting(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllMintingRequest {
		return &types.QueryAllMintingRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MintingAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Minting), step)
			require.Subset(t, msgs, resp.Minting)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.MintingAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Minting), step)
			require.Subset(t, msgs, resp.Minting)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.MintingAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.MintingAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
