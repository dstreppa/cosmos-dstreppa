package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNMinting(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Minting {
	items := make([]types.Minting, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetMinting(ctx, items[i])
	}
	return items
}

func TestMintingGet(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	items := createNMinting(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMinting(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestMintingRemove(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	items := createNMinting(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMinting(ctx,
			item.Index,
		)
		_, found := keeper.GetMinting(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestMintingGetAll(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	items := createNMinting(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllMinting(ctx))
}
