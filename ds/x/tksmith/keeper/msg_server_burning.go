package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/types"
)

func (k msgServer) CreateBurning(goCtx context.Context, msg *types.MsgCreateBurning) (*types.MsgCreateBurningResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBurning(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var burning = types.Burning{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Timestamp: msg.Timestamp,
		Amount:    msg.Amount,
	}

	k.SetBurning(
		ctx,
		burning,
	)
	return &types.MsgCreateBurningResponse{}, nil
}

func (k msgServer) UpdateBurning(goCtx context.Context, msg *types.MsgUpdateBurning) (*types.MsgUpdateBurningResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBurning(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var burning = types.Burning{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Timestamp: msg.Timestamp,
		Amount:    msg.Amount,
	}

	k.SetBurning(ctx, burning)

	return &types.MsgUpdateBurningResponse{}, nil
}

func (k msgServer) DeleteBurning(goCtx context.Context, msg *types.MsgDeleteBurning) (*types.MsgDeleteBurningResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBurning(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBurning(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteBurningResponse{}, nil
}
