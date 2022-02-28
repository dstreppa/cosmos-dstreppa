package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/types"
)

// SetBurning set a specific burning in the store from its index
func (k Keeper) SetBurning(ctx sdk.Context, burning types.Burning) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BurningKeyPrefix))
	b := k.cdc.MustMarshal(&burning)
	store.Set(types.BurningKey(
		burning.Index,
	), b)
}

// GetBurning returns a burning from its index
func (k Keeper) GetBurning(
	ctx sdk.Context,
	index string,

) (val types.Burning, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BurningKeyPrefix))

	b := store.Get(types.BurningKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBurning removes a burning from the store
func (k Keeper) RemoveBurning(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BurningKeyPrefix))
	store.Delete(types.BurningKey(
		index,
	))
}

// GetAllBurning returns all burning
func (k Keeper) GetAllBurning(ctx sdk.Context) (list []types.Burning) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BurningKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Burning
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
