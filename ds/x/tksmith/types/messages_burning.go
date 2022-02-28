package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateBurning{}

func NewMsgCreateBurning(
	creator string,
	index string,
	timestamp int32,
	amount int32,

) *MsgCreateBurning {
	return &MsgCreateBurning{
		Creator:   creator,
		Index:     index,
		Timestamp: timestamp,
		Amount:    amount,
	}
}

func (msg *MsgCreateBurning) Route() string {
	return RouterKey
}

func (msg *MsgCreateBurning) Type() string {
	return "CreateBurning"
}

func (msg *MsgCreateBurning) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBurning) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBurning) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBurning{}

func NewMsgUpdateBurning(
	creator string,
	index string,
	timestamp int32,
	amount int32,

) *MsgUpdateBurning {
	return &MsgUpdateBurning{
		Creator:   creator,
		Index:     index,
		Timestamp: timestamp,
		Amount:    amount,
	}
}

func (msg *MsgUpdateBurning) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBurning) Type() string {
	return "UpdateBurning"
}

func (msg *MsgUpdateBurning) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBurning) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBurning) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBurning{}

func NewMsgDeleteBurning(
	creator string,
	index string,

) *MsgDeleteBurning {
	return &MsgDeleteBurning{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteBurning) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBurning) Type() string {
	return "DeleteBurning"
}

func (msg *MsgDeleteBurning) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBurning) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBurning) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
