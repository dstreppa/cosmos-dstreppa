import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.ds.ds";
export interface MsgCreateSignal {
    creator: string;
    index: string;
    idx: string;
    value: number;
}
export interface MsgCreateSignalResponse {
}
export interface MsgUpdateSignal {
    creator: string;
    index: string;
    idx: string;
    value: number;
}
export interface MsgUpdateSignalResponse {
}
export interface MsgDeleteSignal {
    creator: string;
    index: string;
}
export interface MsgDeleteSignalResponse {
}
export declare const MsgCreateSignal: {
    encode(message: MsgCreateSignal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSignal;
    fromJSON(object: any): MsgCreateSignal;
    toJSON(message: MsgCreateSignal): unknown;
    fromPartial(object: DeepPartial<MsgCreateSignal>): MsgCreateSignal;
};
export declare const MsgCreateSignalResponse: {
    encode(_: MsgCreateSignalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSignalResponse;
    fromJSON(_: any): MsgCreateSignalResponse;
    toJSON(_: MsgCreateSignalResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateSignalResponse>): MsgCreateSignalResponse;
};
export declare const MsgUpdateSignal: {
    encode(message: MsgUpdateSignal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSignal;
    fromJSON(object: any): MsgUpdateSignal;
    toJSON(message: MsgUpdateSignal): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSignal>): MsgUpdateSignal;
};
export declare const MsgUpdateSignalResponse: {
    encode(_: MsgUpdateSignalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSignalResponse;
    fromJSON(_: any): MsgUpdateSignalResponse;
    toJSON(_: MsgUpdateSignalResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSignalResponse>): MsgUpdateSignalResponse;
};
export declare const MsgDeleteSignal: {
    encode(message: MsgDeleteSignal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSignal;
    fromJSON(object: any): MsgDeleteSignal;
    toJSON(message: MsgDeleteSignal): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSignal>): MsgDeleteSignal;
};
export declare const MsgDeleteSignalResponse: {
    encode(_: MsgDeleteSignalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSignalResponse;
    fromJSON(_: any): MsgDeleteSignalResponse;
    toJSON(_: MsgDeleteSignalResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSignalResponse>): MsgDeleteSignalResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateSignal(request: MsgCreateSignal): Promise<MsgCreateSignalResponse>;
    UpdateSignal(request: MsgUpdateSignal): Promise<MsgUpdateSignalResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteSignal(request: MsgDeleteSignal): Promise<MsgDeleteSignalResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateSignal(request: MsgCreateSignal): Promise<MsgCreateSignalResponse>;
    UpdateSignal(request: MsgUpdateSignal): Promise<MsgUpdateSignalResponse>;
    DeleteSignal(request: MsgDeleteSignal): Promise<MsgDeleteSignalResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
