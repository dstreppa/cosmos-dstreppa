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

func (k Keeper) BurningAll(c context.Context, req *types.QueryAllBurningRequest) (*types.QueryAllBurningResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var burnings []types.Burning
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	burningStore := prefix.NewStore(store, types.KeyPrefix(types.BurningKeyPrefix))

	pageRes, err := query.Paginate(burningStore, req.Pagination, func(key []byte, value []byte) error {
		var burning types.Burning
		if err := k.cdc.Unmarshal(value, &burning); err != nil {
			return err
		}

		burnings = append(burnings, burning)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBurningResponse{Burning: burnings, Pagination: pageRes}, nil
}

func (k Keeper) Burning(c context.Context, req *types.QueryGetBurningRequest) (*types.QueryGetBurningResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBurning(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetBurningResponse{Burning: val}, nil
}
