import { Reader, Writer } from "protobufjs/minimal";
import { Minting } from "../tksmith/minting";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Burning } from "../tksmith/burning";
export declare const protobufPackage = "supsidacdisaac.ds.tksmith";
export interface QueryGetMintingRequest {
    index: string;
}
export interface QueryGetMintingResponse {
    minting: Minting | undefined;
}
export interface QueryAllMintingRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMintingResponse {
    minting: Minting[];
    pagination: PageResponse | undefined;
}
export interface QueryGetBurningRequest {
    index: string;
}
export interface QueryGetBurningResponse {
    burning: Burning | undefined;
}
export interface QueryAllBurningRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBurningResponse {
    burning: Burning[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetMintingRequest: {
    encode(message: QueryGetMintingRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMintingRequest;
    fromJSON(object: any): QueryGetMintingRequest;
    toJSON(message: QueryGetMintingRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMintingRequest>): QueryGetMintingRequest;
};
export declare const QueryGetMintingResponse: {
    encode(message: QueryGetMintingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMintingResponse;
    fromJSON(object: any): QueryGetMintingResponse;
    toJSON(message: QueryGetMintingResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMintingResponse>): QueryGetMintingResponse;
};
export declare const QueryAllMintingRequest: {
    encode(message: QueryAllMintingRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMintingRequest;
    fromJSON(object: any): QueryAllMintingRequest;
    toJSON(message: QueryAllMintingRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMintingRequest>): QueryAllMintingRequest;
};
export declare const QueryAllMintingResponse: {
    encode(message: QueryAllMintingResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMintingResponse;
    fromJSON(object: any): QueryAllMintingResponse;
    toJSON(message: QueryAllMintingResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMintingResponse>): QueryAllMintingResponse;
};
export declare const QueryGetBurningRequest: {
    encode(message: QueryGetBurningRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBurningRequest;
    fromJSON(object: any): QueryGetBurningRequest;
    toJSON(message: QueryGetBurningRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBurningRequest>): QueryGetBurningRequest;
};
export declare const QueryGetBurningResponse: {
    encode(message: QueryGetBurningResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBurningResponse;
    fromJSON(object: any): QueryGetBurningResponse;
    toJSON(message: QueryGetBurningResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBurningResponse>): QueryGetBurningResponse;
};
export declare const QueryAllBurningRequest: {
    encode(message: QueryAllBurningRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBurningRequest;
    fromJSON(object: any): QueryAllBurningRequest;
    toJSON(message: QueryAllBurningRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBurningRequest>): QueryAllBurningRequest;
};
export declare const QueryAllBurningResponse: {
    encode(message: QueryAllBurningResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBurningResponse;
    fromJSON(object: any): QueryAllBurningResponse;
    toJSON(message: QueryAllBurningResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBurningResponse>): QueryAllBurningResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a minting by index. */
    Minting(request: QueryGetMintingRequest): Promise<QueryGetMintingResponse>;
    /** Queries a list of minting items. */
    MintingAll(request: QueryAllMintingRequest): Promise<QueryAllMintingResponse>;
    /** Queries a burning by index. */
    Burning(request: QueryGetBurningRequest): Promise<QueryGetBurningResponse>;
    /** Queries a list of burning items. */
    BurningAll(request: QueryAllBurningRequest): Promise<QueryAllBurningResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Minting(request: QueryGetMintingRequest): Promise<QueryGetMintingResponse>;
    MintingAll(request: QueryAllMintingRequest): Promise<QueryAllMintingResponse>;
    Burning(request: QueryGetBurningRequest): Promise<QueryGetBurningResponse>;
    BurningAll(request: QueryAllBurningRequest): Promise<QueryAllBurningResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
