/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Minting } from "../tksmith/minting";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Burning } from "../tksmith/burning";
export const protobufPackage = "supsidacdisaac.ds.tksmith";
const baseQueryGetMintingRequest = { index: "" };
export const QueryGetMintingRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMintingRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMintingRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMintingRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetMintingResponse = {};
export const QueryGetMintingResponse = {
    encode(message, writer = Writer.create()) {
        if (message.minting !== undefined) {
            Minting.encode(message.minting, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMintingResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minting = Minting.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetMintingResponse,
        };
        if (object.minting !== undefined && object.minting !== null) {
            message.minting = Minting.fromJSON(object.minting);
        }
        else {
            message.minting = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.minting !== undefined &&
            (obj.minting = message.minting
                ? Minting.toJSON(message.minting)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMintingResponse,
        };
        if (object.minting !== undefined && object.minting !== null) {
            message.minting = Minting.fromPartial(object.minting);
        }
        else {
            message.minting = undefined;
        }
        return message;
    },
};
const baseQueryAllMintingRequest = {};
export const QueryAllMintingRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMintingRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllMintingRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMintingRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllMintingResponse = {};
export const QueryAllMintingResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.minting) {
            Minting.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMintingResponse,
        };
        message.minting = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minting.push(Minting.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllMintingResponse,
        };
        message.minting = [];
        if (object.minting !== undefined && object.minting !== null) {
            for (const e of object.minting) {
                message.minting.push(Minting.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.minting) {
            obj.minting = message.minting.map((e) => e ? Minting.toJSON(e) : undefined);
        }
        else {
            obj.minting = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMintingResponse,
        };
        message.minting = [];
        if (object.minting !== undefined && object.minting !== null) {
            for (const e of object.minting) {
                message.minting.push(Minting.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetBurningRequest = { index: "" };
export const QueryGetBurningRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBurningRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetBurningRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetBurningRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetBurningResponse = {};
export const QueryGetBurningResponse = {
    encode(message, writer = Writer.create()) {
        if (message.burning !== undefined) {
            Burning.encode(message.burning, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetBurningResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.burning = Burning.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetBurningResponse,
        };
        if (object.burning !== undefined && object.burning !== null) {
            message.burning = Burning.fromJSON(object.burning);
        }
        else {
            message.burning = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.burning !== undefined &&
            (obj.burning = message.burning
                ? Burning.toJSON(message.burning)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetBurningResponse,
        };
        if (object.burning !== undefined && object.burning !== null) {
            message.burning = Burning.fromPartial(object.burning);
        }
        else {
            message.burning = undefined;
        }
        return message;
    },
};
const baseQueryAllBurningRequest = {};
export const QueryAllBurningRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllBurningRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllBurningRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllBurningRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllBurningResponse = {};
export const QueryAllBurningResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.burning) {
            Burning.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllBurningResponse,
        };
        message.burning = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.burning.push(Burning.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllBurningResponse,
        };
        message.burning = [];
        if (object.burning !== undefined && object.burning !== null) {
            for (const e of object.burning) {
                message.burning.push(Burning.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.burning) {
            obj.burning = message.burning.map((e) => e ? Burning.toJSON(e) : undefined);
        }
        else {
            obj.burning = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllBurningResponse,
        };
        message.burning = [];
        if (object.burning !== undefined && object.burning !== null) {
            for (const e of object.burning) {
                message.burning.push(Burning.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Minting(request) {
        const data = QueryGetMintingRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.ds.tksmith.Query", "Minting", data);
        return promise.then((data) => QueryGetMintingResponse.decode(new Reader(data)));
    }
    MintingAll(request) {
        const data = QueryAllMintingRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.ds.tksmith.Query", "MintingAll", data);
        return promise.then((data) => QueryAllMintingResponse.decode(new Reader(data)));
    }
    Burning(request) {
        const data = QueryGetBurningRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.ds.tksmith.Query", "Burning", data);
        return promise.then((data) => QueryGetBurningResponse.decode(new Reader(data)));
    }
    BurningAll(request) {
        const data = QueryAllBurningRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.ds.tksmith.Query", "BurningAll", data);
        return promise.then((data) => QueryAllBurningResponse.decode(new Reader(data)));
    }
}
