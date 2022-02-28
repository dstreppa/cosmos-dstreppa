import { Reader, Writer } from "protobufjs/minimal";
import { Signal } from "../ds/signal";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "supsidacdisaac.ds.ds";
export interface QueryGetSignalRequest {
    index: string;
}
export interface QueryGetSignalResponse {
    signal: Signal | undefined;
}
export interface QueryAllSignalRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSignalResponse {
    signal: Signal[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetSignalRequest: {
    encode(message: QueryGetSignalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSignalRequest;
    fromJSON(object: any): QueryGetSignalRequest;
    toJSON(message: QueryGetSignalRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSignalRequest>): QueryGetSignalRequest;
};
export declare const QueryGetSignalResponse: {
    encode(message: QueryGetSignalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSignalResponse;
    fromJSON(object: any): QueryGetSignalResponse;
    toJSON(message: QueryGetSignalResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSignalResponse>): QueryGetSignalResponse;
};
export declare const QueryAllSignalRequest: {
    encode(message: QueryAllSignalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSignalRequest;
    fromJSON(object: any): QueryAllSignalRequest;
    toJSON(message: QueryAllSignalRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSignalRequest>): QueryAllSignalRequest;
};
export declare const QueryAllSignalResponse: {
    encode(message: QueryAllSignalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSignalResponse;
    fromJSON(object: any): QueryAllSignalResponse;
    toJSON(message: QueryAllSignalResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSignalResponse>): QueryAllSignalResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a signal by index. */
    Signal(request: QueryGetSignalRequest): Promise<QueryGetSignalResponse>;
    /** Queries a list of signal items. */
    SignalAll(request: QueryAllSignalRequest): Promise<QueryAllSignalResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Signal(request: QueryGetSignalRequest): Promise<QueryGetSignalResponse>;
    SignalAll(request: QueryAllSignalRequest): Promise<QueryAllSignalResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
