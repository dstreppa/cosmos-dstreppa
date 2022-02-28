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

func createNBurning(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Burning {
	items := make([]types.Burning, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetBurning(ctx, items[i])
	}
	return items
}

func TestBurningGet(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	items := createNBurning(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBurning(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestBurningRemove(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	items := createNBurning(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBurning(ctx,
			item.Index,
		)
		_, found := keeper.GetBurning(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestBurningGetAll(t *testing.T) {
	keeper, ctx := keepertest.TksmithKeeper(t)
	items := createNBurning(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllBurning(ctx))
}
