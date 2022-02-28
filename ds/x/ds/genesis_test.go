package ds_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		SignalList: []types.Signal{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DsKeeper(t)
	ds.InitGenesis(ctx, *k, genesisState)
	got := ds.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.SignalList, len(genesisState.SignalList))
	require.Subset(t, genesisState.SignalList, got.SignalList)
	// this line is used by starport scaffolding # genesis/test/assert
}
