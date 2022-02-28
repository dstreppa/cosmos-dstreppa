import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.ds.tksmith";
export interface Burning {
    index: string;
    timestamp: number;
    amount: number;
    creator: string;
}
export declare const Burning: {
    encode(message: Burning, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Burning;
    fromJSON(object: any): Burning;
    toJSON(message: Burning): unknown;
    fromPartial(object: DeepPartial<Burning>): Burning;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
