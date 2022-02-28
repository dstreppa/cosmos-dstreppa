// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteMinting } from "./types/tksmith/tx";
import { MsgUpdateMinting } from "./types/tksmith/tx";
import { MsgCreateMinting } from "./types/tksmith/tx";
import { MsgCreateBurning } from "./types/tksmith/tx";
import { MsgDeleteBurning } from "./types/tksmith/tx";
import { MsgUpdateBurning } from "./types/tksmith/tx";
const types = [
    ["/supsidacdisaac.ds.tksmith.MsgDeleteMinting", MsgDeleteMinting],
    ["/supsidacdisaac.ds.tksmith.MsgUpdateMinting", MsgUpdateMinting],
    ["/supsidacdisaac.ds.tksmith.MsgCreateMinting", MsgCreateMinting],
    ["/supsidacdisaac.ds.tksmith.MsgCreateBurning", MsgCreateBurning],
    ["/supsidacdisaac.ds.tksmith.MsgDeleteBurning", MsgDeleteBurning],
    ["/supsidacdisaac.ds.tksmith.MsgUpdateBurning", MsgUpdateBurning],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteMinting: (data) => ({ typeUrl: "/supsidacdisaac.ds.tksmith.MsgDeleteMinting", value: data }),
        msgUpdateMinting: (data) => ({ typeUrl: "/supsidacdisaac.ds.tksmith.MsgUpdateMinting", value: data }),
        msgCreateMinting: (data) => ({ typeUrl: "/supsidacdisaac.ds.tksmith.MsgCreateMinting", value: data }),
        msgCreateBurning: (data) => ({ typeUrl: "/supsidacdisaac.ds.tksmith.MsgCreateBurning", value: data }),
        msgDeleteBurning: (data) => ({ typeUrl: "/supsidacdisaac.ds.tksmith.MsgDeleteBurning", value: data }),
        msgUpdateBurning: (data) => ({ typeUrl: "/supsidacdisaac.ds.tksmith.MsgUpdateBurning", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
