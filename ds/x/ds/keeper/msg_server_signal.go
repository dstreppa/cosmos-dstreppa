package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/types"
)

func (k msgServer) CreateSignal(goCtx context.Context, msg *types.MsgCreateSignal) (*types.MsgCreateSignalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetSignal(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var signal = types.Signal{
		Creator: msg.Creator,
		Index:   msg.Index,
		Idx:     msg.Idx,
		Value:   msg.Value,
	}

	k.SetSignal(
		ctx,
		signal,
	)
	return &types.MsgCreateSignalResponse{}, nil
}

func (k msgServer) UpdateSignal(goCtx context.Context, msg *types.MsgUpdateSignal) (*types.MsgUpdateSignalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSignal(
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

	var signal = types.Signal{
		Creator: msg.Creator,
		Index:   msg.Index,
		Idx:     msg.Idx,
		Value:   msg.Value,
	}

	k.SetSignal(ctx, signal)

	return &types.MsgUpdateSignalResponse{}, nil
}

func (k msgServer) DeleteSignal(goCtx context.Context, msg *types.MsgDeleteSignal) (*types.MsgDeleteSignalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSignal(
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

	k.RemoveSignal(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteSignalResponse{}, nil
}
