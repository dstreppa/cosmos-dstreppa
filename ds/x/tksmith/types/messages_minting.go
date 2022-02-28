package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateMinting{}

func NewMsgCreateMinting(
	creator string,
	index string,
	timestamp int32,
	amount int32,

) *MsgCreateMinting {
	return &MsgCreateMinting{
		Creator:   creator,
		Index:     index,
		Timestamp: timestamp,
		Amount:    amount,
	}
}

func (msg *MsgCreateMinting) Route() string {
	return RouterKey
}

func (msg *MsgCreateMinting) Type() string {
	return "CreateMinting"
}

func (msg *MsgCreateMinting) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateMinting) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMinting) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMinting{}

func NewMsgUpdateMinting(
	creator string,
	index string,
	timestamp int32,
	amount int32,

) *MsgUpdateMinting {
	return &MsgUpdateMinting{
		Creator:   creator,
		Index:     index,
		Timestamp: timestamp,
		Amount:    amount,
	}
}

func (msg *MsgUpdateMinting) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMinting) Type() string {
	return "UpdateMinting"
}

func (msg *MsgUpdateMinting) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateMinting) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMinting) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMinting{}

func NewMsgDeleteMinting(
	creator string,
	index string,

) *MsgDeleteMinting {
	return &MsgDeleteMinting{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteMinting) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMinting) Type() string {
	return "DeleteMinting"
}

func (msg *MsgDeleteMinting) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteMinting) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMinting) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
