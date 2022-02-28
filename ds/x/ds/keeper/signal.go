package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/types"
)

// SetSignal set a specific signal in the store from its index
func (k Keeper) SetSignal(ctx sdk.Context, signal types.Signal) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SignalKeyPrefix))
	b := k.cdc.MustMarshal(&signal)
	store.Set(types.SignalKey(
		signal.Index,
	), b)
}

// GetSignal returns a signal from its index
func (k Keeper) GetSignal(
	ctx sdk.Context,
	index string,

) (val types.Signal, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SignalKeyPrefix))

	b := store.Get(types.SignalKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSignal removes a signal from the store
func (k Keeper) RemoveSignal(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SignalKeyPrefix))
	store.Delete(types.SignalKey(
		index,
	))
}

// GetAllSignal returns all signal
func (k Keeper) GetAllSignal(ctx sdk.Context) (list []types.Signal) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SignalKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Signal
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
