import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteMinting } from "./types/tksmith/tx";
import { MsgUpdateMinting } from "./types/tksmith/tx";
import { MsgCreateMinting } from "./types/tksmith/tx";
import { MsgCreateBurning } from "./types/tksmith/tx";
import { MsgDeleteBurning } from "./types/tksmith/tx";
import { MsgUpdateBurning } from "./types/tksmith/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteMinting: (data: MsgDeleteMinting) => EncodeObject;
    msgUpdateMinting: (data: MsgUpdateMinting) => EncodeObject;
    msgCreateMinting: (data: MsgCreateMinting) => EncodeObject;
    msgCreateBurning: (data: MsgCreateBurning) => EncodeObject;
    msgDeleteBurning: (data: MsgDeleteBurning) => EncodeObject;
    msgUpdateBurning: (data: MsgUpdateBurning) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
