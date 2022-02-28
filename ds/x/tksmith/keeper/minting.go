package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/tksmith/types"
)

// SetMinting set a specific minting in the store from its index
func (k Keeper) SetMinting(ctx sdk.Context, minting types.Minting) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintingKeyPrefix))
	b := k.cdc.MustMarshal(&minting)
	store.Set(types.MintingKey(
		minting.Index,
	), b)
}

// GetMinting returns a minting from its index
func (k Keeper) GetMinting(
	ctx sdk.Context,
	index string,

) (val types.Minting, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintingKeyPrefix))

	b := store.Get(types.MintingKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMinting removes a minting from the store
func (k Keeper) RemoveMinting(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintingKeyPrefix))
	store.Delete(types.MintingKey(
		index,
	))
}

// GetAllMinting returns all minting
func (k Keeper) GetAllMinting(ctx sdk.Context) (list []types.Minting) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintingKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Minting
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
