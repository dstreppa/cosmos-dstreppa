package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNSignal(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Signal {
	items := make([]types.Signal, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetSignal(ctx, items[i])
	}
	return items
}

func TestSignalGet(t *testing.T) {
	keeper, ctx := keepertest.DsKeeper(t)
	items := createNSignal(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSignal(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestSignalRemove(t *testing.T) {
	keeper, ctx := keepertest.DsKeeper(t)
	items := createNSignal(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSignal(ctx,
			item.Index,
		)
		_, found := keeper.GetSignal(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestSignalGetAll(t *testing.T) {
	keeper, ctx := keepertest.DsKeeper(t)
	items := createNSignal(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllSignal(ctx))
}
