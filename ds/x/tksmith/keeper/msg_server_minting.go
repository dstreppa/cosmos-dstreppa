package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/types"
)

func (k msgServer) CreateMinting(goCtx context.Context, msg *types.MsgCreateMinting) (*types.MsgCreateMintingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetMinting(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var minting = types.Minting{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Timestamp: msg.Timestamp,
		Amount:    msg.Amount,
	}

	addr, _ := sdk.AccAddressFromBech32(msg.GetCreator())
	fmt.Println("ADDRESS: ", addr.String())
	fmt.Println("MODULE NAME: ", types.ModuleName)
	strC := fmt.Sprintf("%ddst", msg.Amount)
	c, _ := sdk.ParseCoinsNormalized(strC)
	fmt.Println("TOKENS TO MINT: ", c.String())

	// *** I try to mint tokens
	// Mint tokens for the module
	err_mint := k.bk.MintCoins(ctx, types.ModuleName, c)
	fmt.Println(err_mint)
	// Send just minted tokens to the account
	err_send := k.bk.SendCoinsFromModuleToAccount(ctx, types.ModuleName, addr, c)
	fmt.Println(err_send)

	k.SetMinting(
		ctx,
		minting,
	)
	return &types.MsgCreateMintingResponse{}, nil
}

func (k msgServer) UpdateMinting(goCtx context.Context, msg *types.MsgUpdateMinting) (*types.MsgUpdateMintingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMinting(
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

	var minting = types.Minting{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Timestamp: msg.Timestamp,
		Amount:    msg.Amount,
	}

	k.SetMinting(ctx, minting)

	return &types.MsgUpdateMintingResponse{}, nil
}

func (k msgServer) DeleteMinting(goCtx context.Context, msg *types.MsgDeleteMinting) (*types.MsgDeleteMintingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMinting(
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

	k.RemoveMinting(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteMintingResponse{}, nil
}
