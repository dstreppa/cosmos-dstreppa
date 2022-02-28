/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Signal } from "../ds/signal";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "supsidacdisaac.ds.ds";
const baseQueryGetSignalRequest = { index: "" };
export const QueryGetSignalRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSignalRequest };
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
        const message = { ...baseQueryGetSignalRequest };
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
        const message = { ...baseQueryGetSignalRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetSignalResponse = {};
export const QueryGetSignalResponse = {
    encode(message, writer = Writer.create()) {
        if (message.signal !== undefined) {
            Signal.encode(message.signal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSignalResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signal = Signal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSignalResponse };
        if (object.signal !== undefined && object.signal !== null) {
            message.signal = Signal.fromJSON(object.signal);
        }
        else {
            message.signal = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.signal !== undefined &&
            (obj.signal = message.signal ? Signal.toJSON(message.signal) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSignalResponse };
        if (object.signal !== undefined && object.signal !== null) {
            message.signal = Signal.fromPartial(object.signal);
        }
        else {
            message.signal = undefined;
        }
        return message;
    },
};
const baseQueryAllSignalRequest = {};
export const QueryAllSignalRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSignalRequest };
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
        const message = { ...baseQueryAllSignalRequest };
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
        const message = { ...baseQueryAllSignalRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllSignalResponse = {};
export const QueryAllSignalResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.signal) {
            Signal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSignalResponse };
        message.signal = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signal.push(Signal.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllSignalResponse };
        message.signal = [];
        if (object.signal !== undefined && object.signal !== null) {
            for (const e of object.signal) {
                message.signal.push(Signal.fromJSON(e));
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
        if (message.signal) {
            obj.signal = message.signal.map((e) => e ? Signal.toJSON(e) : undefined);
        }
        else {
            obj.signal = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSignalResponse };
        message.signal = [];
        if (object.signal !== undefined && object.signal !== null) {
            for (const e of object.signal) {
                message.signal.push(Signal.fromPartial(e));
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
    Signal(request) {
        const data = QueryGetSignalRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.ds.ds.Query", "Signal", data);
        return promise.then((data) => QueryGetSignalResponse.decode(new Reader(data)));
    }
    SignalAll(request) {
        const data = QueryAllSignalRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.ds.ds.Query", "SignalAll", data);
        return promise.then((data) => QueryAllSignalResponse.decode(new Reader(data)));
    }
}
