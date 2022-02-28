import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.ds.ds";
export interface Signal {
    index: string;
    idx: string;
    value: number;
    creator: string;
}
export declare const Signal: {
    encode(message: Signal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Signal;
    fromJSON(object: any): Signal;
    toJSON(message: Signal): unknown;
    fromPartial(object: DeepPartial<Signal>): Signal;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
