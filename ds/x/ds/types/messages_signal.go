package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSignal{}

func NewMsgCreateSignal(
	creator string,
	index string,
	idx string,
	value int32,

) *MsgCreateSignal {
	return &MsgCreateSignal{
		Creator: creator,
		Index:   index,
		Idx:     idx,
		Value:   value,
	}
}

func (msg *MsgCreateSignal) Route() string {
	return RouterKey
}

func (msg *MsgCreateSignal) Type() string {
	return "CreateSignal"
}

func (msg *MsgCreateSignal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSignal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSignal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSignal{}

func NewMsgUpdateSignal(
	creator string,
	index string,
	idx string,
	value int32,

) *MsgUpdateSignal {
	return &MsgUpdateSignal{
		Creator: creator,
		Index:   index,
		Idx:     idx,
		Value:   value,
	}
}

func (msg *MsgUpdateSignal) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSignal) Type() string {
	return "UpdateSignal"
}

func (msg *MsgUpdateSignal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSignal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSignal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSignal{}

func NewMsgDeleteSignal(
	creator string,
	index string,

) *MsgDeleteSignal {
	return &MsgDeleteSignal{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteSignal) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSignal) Type() string {
	return "DeleteSignal"
}

func (msg *MsgDeleteSignal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSignal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSignal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
