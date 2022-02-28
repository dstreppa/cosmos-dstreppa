package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) MintingAll(c context.Context, req *types.QueryAllMintingRequest) (*types.QueryAllMintingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var mintings []types.Minting
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	mintingStore := prefix.NewStore(store, types.KeyPrefix(types.MintingKeyPrefix))

	pageRes, err := query.Paginate(mintingStore, req.Pagination, func(key []byte, value []byte) error {
		var minting types.Minting
		if err := k.cdc.Unmarshal(value, &minting); err != nil {
			return err
		}

		mintings = append(mintings, minting)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMintingResponse{Minting: mintings, Pagination: pageRes}, nil
}

func (k Keeper) Minting(c context.Context, req *types.QueryGetMintingRequest) (*types.QueryGetMintingResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMinting(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetMintingResponse{Minting: val}, nil
}
