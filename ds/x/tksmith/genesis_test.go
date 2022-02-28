package tksmith_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		MintingList: []types.Minting{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		BurningList: []types.Burning{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TksmithKeeper(t)
	tksmith.InitGenesis(ctx, *k, genesisState)
	got := tksmith.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.MintingList, len(genesisState.MintingList))
	require.Subset(t, genesisState.MintingList, got.MintingList)
	require.Len(t, got.BurningList, len(genesisState.BurningList))
	require.Subset(t, genesisState.BurningList, got.BurningList)
	// this line is used by starport scaffolding # genesis/test/assert
}
