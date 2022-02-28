package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SignalAll(c context.Context, req *types.QueryAllSignalRequest) (*types.QueryAllSignalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var signals []types.Signal
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	signalStore := prefix.NewStore(store, types.KeyPrefix(types.SignalKeyPrefix))

	pageRes, err := query.Paginate(signalStore, req.Pagination, func(key []byte, value []byte) error {
		var signal types.Signal
		if err := k.cdc.Unmarshal(value, &signal); err != nil {
			return err
		}

		signals = append(signals, signal)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSignalResponse{Signal: signals, Pagination: pageRes}, nil
}

func (k Keeper) Signal(c context.Context, req *types.QueryGetSignalRequest) (*types.QueryGetSignalResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSignal(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSignalResponse{Signal: val}, nil
}
