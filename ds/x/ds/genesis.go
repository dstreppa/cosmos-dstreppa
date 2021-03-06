package ds

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the signal
	for _, elem := range genState.SignalList {
		k.SetSignal(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.SignalList = k.GetAllSignal(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
