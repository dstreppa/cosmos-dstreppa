package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/testutil/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/keeper"
	"github.com/supsi-dacd-isaac/cosmos-dstreppa/ds/x/ds/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.DsKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
