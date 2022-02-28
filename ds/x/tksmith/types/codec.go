package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateMinting{}, "tksmith/CreateMinting", nil)
	cdc.RegisterConcrete(&MsgUpdateMinting{}, "tksmith/UpdateMinting", nil)
	cdc.RegisterConcrete(&MsgDeleteMinting{}, "tksmith/DeleteMinting", nil)
	cdc.RegisterConcrete(&MsgCreateBurning{}, "tksmith/CreateBurning", nil)
	cdc.RegisterConcrete(&MsgUpdateBurning{}, "tksmith/UpdateBurning", nil)
	cdc.RegisterConcrete(&MsgDeleteBurning{}, "tksmith/DeleteBurning", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMinting{},
		&MsgUpdateMinting{},
		&MsgDeleteMinting{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBurning{},
		&MsgUpdateBurning{},
		&MsgDeleteBurning{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
