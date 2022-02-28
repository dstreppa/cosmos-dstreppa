import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.ds.tksmith";
export interface MsgCreateMinting {
    creator: string;
    index: string;
    timestamp: number;
    amount: number;
}
export interface MsgCreateMintingResponse {
}
export interface MsgUpdateMinting {
    creator: string;
    index: string;
    timestamp: number;
    amount: number;
}
export interface MsgUpdateMintingResponse {
}
export interface MsgDeleteMinting {
    creator: string;
    index: string;
}
export interface MsgDeleteMintingResponse {
}
export interface MsgCreateBurning {
    creator: string;
    index: string;
    timestamp: number;
    amount: number;
}
export interface MsgCreateBurningResponse {
}
export interface MsgUpdateBurning {
    creator: string;
    index: string;
    timestamp: number;
    amount: number;
}
export interface MsgUpdateBurningResponse {
}
export interface MsgDeleteBurning {
    creator: string;
    index: string;
}
export interface MsgDeleteBurningResponse {
}
export declare const MsgCreateMinting: {
    encode(message: MsgCreateMinting, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMinting;
    fromJSON(object: any): MsgCreateMinting;
    toJSON(message: MsgCreateMinting): unknown;
    fromPartial(object: DeepPartial<MsgCreateMinting>): MsgCreateMinting;
};
export declare const MsgCreateMintingResponse: {
    encode(_: MsgCreateMintingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMintingResponse;
    fromJSON(_: any): MsgCreateMintingResponse;
    toJSON(_: MsgCreateMintingResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateMintingResponse>): MsgCreateMintingResponse;
};
export declare const MsgUpdateMinting: {
    encode(message: MsgUpdateMinting, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMinting;
    fromJSON(object: any): MsgUpdateMinting;
    toJSON(message: MsgUpdateMinting): unknown;
    fromPartial(object: DeepPartial<MsgUpdateMinting>): MsgUpdateMinting;
};
export declare const MsgUpdateMintingResponse: {
    encode(_: MsgUpdateMintingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMintingResponse;
    fromJSON(_: any): MsgUpdateMintingResponse;
    toJSON(_: MsgUpdateMintingResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateMintingResponse>): MsgUpdateMintingResponse;
};
export declare const MsgDeleteMinting: {
    encode(message: MsgDeleteMinting, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMinting;
    fromJSON(object: any): MsgDeleteMinting;
    toJSON(message: MsgDeleteMinting): unknown;
    fromPartial(object: DeepPartial<MsgDeleteMinting>): MsgDeleteMinting;
};
export declare const MsgDeleteMintingResponse: {
    encode(_: MsgDeleteMintingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMintingResponse;
    fromJSON(_: any): MsgDeleteMintingResponse;
    toJSON(_: MsgDeleteMintingResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteMintingResponse>): MsgDeleteMintingResponse;
};
export declare const MsgCreateBurning: {
    encode(message: MsgCreateBurning, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBurning;
    fromJSON(object: any): MsgCreateBurning;
    toJSON(message: MsgCreateBurning): unknown;
    fromPartial(object: DeepPartial<MsgCreateBurning>): MsgCreateBurning;
};
export declare const MsgCreateBurningResponse: {
    encode(_: MsgCreateBurningResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBurningResponse;
    fromJSON(_: any): MsgCreateBurningResponse;
    toJSON(_: MsgCreateBurningResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateBurningResponse>): MsgCreateBurningResponse;
};
export declare const MsgUpdateBurning: {
    encode(message: MsgUpdateBurning, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBurning;
    fromJSON(object: any): MsgUpdateBurning;
    toJSON(message: MsgUpdateBurning): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBurning>): MsgUpdateBurning;
};
export declare const MsgUpdateBurningResponse: {
    encode(_: MsgUpdateBurningResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBurningResponse;
    fromJSON(_: any): MsgUpdateBurningResponse;
    toJSON(_: MsgUpdateBurningResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBurningResponse>): MsgUpdateBurningResponse;
};
export declare const MsgDeleteBurning: {
    encode(message: MsgDeleteBurning, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBurning;
    fromJSON(object: any): MsgDeleteBurning;
    toJSON(message: MsgDeleteBurning): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBurning>): MsgDeleteBurning;
};
export declare const MsgDeleteBurningResponse: {
    encode(_: MsgDeleteBurningResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBurningResponse;
    fromJSON(_: any): MsgDeleteBurningResponse;
    toJSON(_: MsgDeleteBurningResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBurningResponse>): MsgDeleteBurningResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateMinting(request: MsgCreateMinting): Promise<MsgCreateMintingResponse>;
    UpdateMinting(request: MsgUpdateMinting): Promise<MsgUpdateMintingResponse>;
    DeleteMinting(request: MsgDeleteMinting): Promise<MsgDeleteMintingResponse>;
    CreateBurning(request: MsgCreateBurning): Promise<MsgCreateBurningResponse>;
    UpdateBurning(request: MsgUpdateBurning): Promise<MsgUpdateBurningResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteBurning(request: MsgDeleteBurning): Promise<MsgDeleteBurningResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateMinting(request: MsgCreateMinting): Promise<MsgCreateMintingResponse>;
    UpdateMinting(request: MsgUpdateMinting): Promise<MsgUpdateMintingResponse>;
    DeleteMinting(request: MsgDeleteMinting): Promise<MsgDeleteMintingResponse>;
    CreateBurning(request: MsgCreateBurning): Promise<MsgCreateBurningResponse>;
    UpdateBurning(request: MsgUpdateBurning): Promise<MsgUpdateBurningResponse>;
    DeleteBurning(request: MsgDeleteBurning): Promise<MsgDeleteBurningResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
