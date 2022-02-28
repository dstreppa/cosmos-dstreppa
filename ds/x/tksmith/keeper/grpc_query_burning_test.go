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

func TestBurningQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNBurning(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetBurningRequest
		response *types.QueryGetBurningResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetBurningRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetBurningResponse{Burning: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetBurningRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetBurningResponse{Burning: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetBurningRequest{
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
			response, err := keeper.Burning(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Equal(t, tc.response, response)
			}
		})
	}
}

func TestBurningQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNBurning(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllBurningRequest {
		return &types.QueryAllBurningRequest{
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
			resp, err := keeper.BurningAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Burning), step)
			require.Subset(t, msgs, resp.Burning)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.BurningAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Burning), step)
			require.Subset(t, msgs, resp.Burning)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.BurningAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.BurningAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
