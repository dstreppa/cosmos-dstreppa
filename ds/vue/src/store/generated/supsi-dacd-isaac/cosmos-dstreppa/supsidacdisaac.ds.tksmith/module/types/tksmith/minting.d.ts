import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.ds.tksmith";
export interface Minting {
    index: string;
    timestamp: number;
    amount: number;
    creator: string;
}
export declare const Minting: {
    encode(message: Minting, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Minting;
    fromJSON(object: any): Minting;
    toJSON(message: Minting): unknown;
    fromPartial(object: DeepPartial<Minting>): Minting;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
