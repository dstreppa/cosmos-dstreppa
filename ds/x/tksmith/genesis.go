package tksmith

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the minting
	for _, elem := range genState.MintingList {
		k.SetMinting(ctx, elem)
	}
	// Set all the burning
	for _, elem := range genState.BurningList {
		k.SetBurning(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.MintingList = k.GetAllMinting(ctx)
	genesis.BurningList = k.GetAllBurning(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
