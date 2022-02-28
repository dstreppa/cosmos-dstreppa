/* eslint-disable */
import { Signal } from "../ds/signal";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "supsidacdisaac.ds.ds";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.signalList) {
            Signal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.signalList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signalList.push(Signal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.signalList = [];
        if (object.signalList !== undefined && object.signalList !== null) {
            for (const e of object.signalList) {
                message.signalList.push(Signal.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.signalList) {
            obj.signalList = message.signalList.map((e) => e ? Signal.toJSON(e) : undefined);
        }
        else {
            obj.signalList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.signalList = [];
        if (object.signalList !== undefined && object.signalList !== null) {
            for (const e of object.signalList) {
                message.signalList.push(Signal.fromPartial(e));
            }
        }
        return message;
    },
};
