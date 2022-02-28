/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Signal } from "../ds/signal";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "supsidacdisaac.ds.ds";

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

const baseQueryGetSignalRequest: object = { index: "" };

export const QueryGetSignalRequest = {
  encode(
    message: QueryGetSignalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSignalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSignalRequest } as QueryGetSignalRequest;
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

  fromJSON(object: any): QueryGetSignalRequest {
    const message = { ...baseQueryGetSignalRequest } as QueryGetSignalRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetSignalRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSignalRequest>
  ): QueryGetSignalRequest {
    const message = { ...baseQueryGetSignalRequest } as QueryGetSignalRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetSignalResponse: object = {};

export const QueryGetSignalResponse = {
  encode(
    message: QueryGetSignalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.signal !== undefined) {
      Signal.encode(message.signal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSignalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSignalResponse } as QueryGetSignalResponse;
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

  fromJSON(object: any): QueryGetSignalResponse {
    const message = { ...baseQueryGetSignalResponse } as QueryGetSignalResponse;
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = Signal.fromJSON(object.signal);
    } else {
      message.signal = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSignalResponse): unknown {
    const obj: any = {};
    message.signal !== undefined &&
      (obj.signal = message.signal ? Signal.toJSON(message.signal) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSignalResponse>
  ): QueryGetSignalResponse {
    const message = { ...baseQueryGetSignalResponse } as QueryGetSignalResponse;
    if (object.signal !== undefined && object.signal !== null) {
      message.signal = Signal.fromPartial(object.signal);
    } else {
      message.signal = undefined;
    }
    return message;
  },
};

const baseQueryAllSignalRequest: object = {};

export const QueryAllSignalRequest = {
  encode(
    message: QueryAllSignalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSignalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSignalRequest } as QueryAllSignalRequest;
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

  fromJSON(object: any): QueryAllSignalRequest {
    const message = { ...baseQueryAllSignalRequest } as QueryAllSignalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSignalRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSignalRequest>
  ): QueryAllSignalRequest {
    const message = { ...baseQueryAllSignalRequest } as QueryAllSignalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSignalResponse: object = {};

export const QueryAllSignalResponse = {
  encode(
    message: QueryAllSignalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.signal) {
      Signal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSignalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSignalResponse } as QueryAllSignalResponse;
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

  fromJSON(object: any): QueryAllSignalResponse {
    const message = { ...baseQueryAllSignalResponse } as QueryAllSignalResponse;
    message.signal = [];
    if (object.signal !== undefined && object.signal !== null) {
      for (const e of object.signal) {
        message.signal.push(Signal.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSignalResponse): unknown {
    const obj: any = {};
    if (message.signal) {
      obj.signal = message.signal.map((e) =>
        e ? Signal.toJSON(e) : undefined
      );
    } else {
      obj.signal = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSignalResponse>
  ): QueryAllSignalResponse {
    const message = { ...baseQueryAllSignalResponse } as QueryAllSignalResponse;
    message.signal = [];
    if (object.signal !== undefined && object.signal !== null) {
      for (const e of object.signal) {
        message.signal.push(Signal.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a signal by index. */
  Signal(request: QueryGetSignalRequest): Promise<QueryGetSignalResponse>;
  /** Queries a list of signal items. */
  SignalAll(request: QueryAllSignalRequest): Promise<QueryAllSignalResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Signal(request: QueryGetSignalRequest): Promise<QueryGetSignalResponse> {
    const data = QueryGetSignalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.ds.Query",
      "Signal",
      data
    );
    return promise.then((data) =>
      QueryGetSignalResponse.decode(new Reader(data))
    );
  }

  SignalAll(request: QueryAllSignalRequest): Promise<QueryAllSignalResponse> {
    const data = QueryAllSignalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.ds.Query",
      "SignalAll",
      data
    );
    return promise.then((data) =>
      QueryAllSignalResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
