/* eslint-disable */
import { Minting } from "../tksmith/minting";
import { Burning } from "../tksmith/burning";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "supsidacdisaac.ds.tksmith";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.mintingList) {
            Minting.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.burningList) {
            Burning.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.mintingList = [];
        message.burningList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintingList.push(Minting.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.burningList.push(Burning.decode(reader, reader.uint32()));
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
        message.mintingList = [];
        message.burningList = [];
        if (object.mintingList !== undefined && object.mintingList !== null) {
            for (const e of object.mintingList) {
                message.mintingList.push(Minting.fromJSON(e));
            }
        }
        if (object.burningList !== undefined && object.burningList !== null) {
            for (const e of object.burningList) {
                message.burningList.push(Burning.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.mintingList) {
            obj.mintingList = message.mintingList.map((e) => e ? Minting.toJSON(e) : undefined);
        }
        else {
            obj.mintingList = [];
        }
        if (message.burningList) {
            obj.burningList = message.burningList.map((e) => e ? Burning.toJSON(e) : undefined);
        }
        else {
            obj.burningList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.mintingList = [];
        message.burningList = [];
        if (object.mintingList !== undefined && object.mintingList !== null) {
            for (const e of object.mintingList) {
                message.mintingList.push(Minting.fromPartial(e));
            }
        }
        if (object.burningList !== undefined && object.burningList !== null) {
            for (const e of object.burningList) {
                message.burningList.push(Burning.fromPartial(e));
            }
        }
        return message;
    },
};
