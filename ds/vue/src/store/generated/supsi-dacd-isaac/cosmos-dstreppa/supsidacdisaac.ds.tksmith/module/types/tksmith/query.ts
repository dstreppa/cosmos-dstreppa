/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Minting } from "../tksmith/minting";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Burning } from "../tksmith/burning";

export const protobufPackage = "supsidacdisaac.ds.tksmith";

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

const baseQueryGetMintingRequest: object = { index: "" };

export const QueryGetMintingRequest = {
  encode(
    message: QueryGetMintingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMintingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMintingRequest } as QueryGetMintingRequest;
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

  fromJSON(object: any): QueryGetMintingRequest {
    const message = { ...baseQueryGetMintingRequest } as QueryGetMintingRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetMintingRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMintingRequest>
  ): QueryGetMintingRequest {
    const message = { ...baseQueryGetMintingRequest } as QueryGetMintingRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetMintingResponse: object = {};

export const QueryGetMintingResponse = {
  encode(
    message: QueryGetMintingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.minting !== undefined) {
      Minting.encode(message.minting, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMintingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMintingResponse,
    } as QueryGetMintingResponse;
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

  fromJSON(object: any): QueryGetMintingResponse {
    const message = {
      ...baseQueryGetMintingResponse,
    } as QueryGetMintingResponse;
    if (object.minting !== undefined && object.minting !== null) {
      message.minting = Minting.fromJSON(object.minting);
    } else {
      message.minting = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMintingResponse): unknown {
    const obj: any = {};
    message.minting !== undefined &&
      (obj.minting = message.minting
        ? Minting.toJSON(message.minting)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMintingResponse>
  ): QueryGetMintingResponse {
    const message = {
      ...baseQueryGetMintingResponse,
    } as QueryGetMintingResponse;
    if (object.minting !== undefined && object.minting !== null) {
      message.minting = Minting.fromPartial(object.minting);
    } else {
      message.minting = undefined;
    }
    return message;
  },
};

const baseQueryAllMintingRequest: object = {};

export const QueryAllMintingRequest = {
  encode(
    message: QueryAllMintingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMintingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMintingRequest } as QueryAllMintingRequest;
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

  fromJSON(object: any): QueryAllMintingRequest {
    const message = { ...baseQueryAllMintingRequest } as QueryAllMintingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMintingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMintingRequest>
  ): QueryAllMintingRequest {
    const message = { ...baseQueryAllMintingRequest } as QueryAllMintingRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMintingResponse: object = {};

export const QueryAllMintingResponse = {
  encode(
    message: QueryAllMintingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.minting) {
      Minting.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMintingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMintingResponse,
    } as QueryAllMintingResponse;
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

  fromJSON(object: any): QueryAllMintingResponse {
    const message = {
      ...baseQueryAllMintingResponse,
    } as QueryAllMintingResponse;
    message.minting = [];
    if (object.minting !== undefined && object.minting !== null) {
      for (const e of object.minting) {
        message.minting.push(Minting.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMintingResponse): unknown {
    const obj: any = {};
    if (message.minting) {
      obj.minting = message.minting.map((e) =>
        e ? Minting.toJSON(e) : undefined
      );
    } else {
      obj.minting = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMintingResponse>
  ): QueryAllMintingResponse {
    const message = {
      ...baseQueryAllMintingResponse,
    } as QueryAllMintingResponse;
    message.minting = [];
    if (object.minting !== undefined && object.minting !== null) {
      for (const e of object.minting) {
        message.minting.push(Minting.fromPartial(e));
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

const baseQueryGetBurningRequest: object = { index: "" };

export const QueryGetBurningRequest = {
  encode(
    message: QueryGetBurningRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBurningRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBurningRequest } as QueryGetBurningRequest;
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

  fromJSON(object: any): QueryGetBurningRequest {
    const message = { ...baseQueryGetBurningRequest } as QueryGetBurningRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetBurningRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBurningRequest>
  ): QueryGetBurningRequest {
    const message = { ...baseQueryGetBurningRequest } as QueryGetBurningRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetBurningResponse: object = {};

export const QueryGetBurningResponse = {
  encode(
    message: QueryGetBurningResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.burning !== undefined) {
      Burning.encode(message.burning, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBurningResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBurningResponse,
    } as QueryGetBurningResponse;
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

  fromJSON(object: any): QueryGetBurningResponse {
    const message = {
      ...baseQueryGetBurningResponse,
    } as QueryGetBurningResponse;
    if (object.burning !== undefined && object.burning !== null) {
      message.burning = Burning.fromJSON(object.burning);
    } else {
      message.burning = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBurningResponse): unknown {
    const obj: any = {};
    message.burning !== undefined &&
      (obj.burning = message.burning
        ? Burning.toJSON(message.burning)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBurningResponse>
  ): QueryGetBurningResponse {
    const message = {
      ...baseQueryGetBurningResponse,
    } as QueryGetBurningResponse;
    if (object.burning !== undefined && object.burning !== null) {
      message.burning = Burning.fromPartial(object.burning);
    } else {
      message.burning = undefined;
    }
    return message;
  },
};

const baseQueryAllBurningRequest: object = {};

export const QueryAllBurningRequest = {
  encode(
    message: QueryAllBurningRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBurningRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBurningRequest } as QueryAllBurningRequest;
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

  fromJSON(object: any): QueryAllBurningRequest {
    const message = { ...baseQueryAllBurningRequest } as QueryAllBurningRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBurningRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBurningRequest>
  ): QueryAllBurningRequest {
    const message = { ...baseQueryAllBurningRequest } as QueryAllBurningRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBurningResponse: object = {};

export const QueryAllBurningResponse = {
  encode(
    message: QueryAllBurningResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.burning) {
      Burning.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBurningResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBurningResponse,
    } as QueryAllBurningResponse;
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

  fromJSON(object: any): QueryAllBurningResponse {
    const message = {
      ...baseQueryAllBurningResponse,
    } as QueryAllBurningResponse;
    message.burning = [];
    if (object.burning !== undefined && object.burning !== null) {
      for (const e of object.burning) {
        message.burning.push(Burning.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBurningResponse): unknown {
    const obj: any = {};
    if (message.burning) {
      obj.burning = message.burning.map((e) =>
        e ? Burning.toJSON(e) : undefined
      );
    } else {
      obj.burning = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBurningResponse>
  ): QueryAllBurningResponse {
    const message = {
      ...baseQueryAllBurningResponse,
    } as QueryAllBurningResponse;
    message.burning = [];
    if (object.burning !== undefined && object.burning !== null) {
      for (const e of object.burning) {
        message.burning.push(Burning.fromPartial(e));
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
  /** Queries a minting by index. */
  Minting(request: QueryGetMintingRequest): Promise<QueryGetMintingResponse>;
  /** Queries a list of minting items. */
  MintingAll(request: QueryAllMintingRequest): Promise<QueryAllMintingResponse>;
  /** Queries a burning by index. */
  Burning(request: QueryGetBurningRequest): Promise<QueryGetBurningResponse>;
  /** Queries a list of burning items. */
  BurningAll(request: QueryAllBurningRequest): Promise<QueryAllBurningResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Minting(request: QueryGetMintingRequest): Promise<QueryGetMintingResponse> {
    const data = QueryGetMintingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Query",
      "Minting",
      data
    );
    return promise.then((data) =>
      QueryGetMintingResponse.decode(new Reader(data))
    );
  }

  MintingAll(
    request: QueryAllMintingRequest
  ): Promise<QueryAllMintingResponse> {
    const data = QueryAllMintingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Query",
      "MintingAll",
      data
    );
    return promise.then((data) =>
      QueryAllMintingResponse.decode(new Reader(data))
    );
  }

  Burning(request: QueryGetBurningRequest): Promise<QueryGetBurningResponse> {
    const data = QueryGetBurningRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Query",
      "Burning",
      data
    );
    return promise.then((data) =>
      QueryGetBurningResponse.decode(new Reader(data))
    );
  }

  BurningAll(
    request: QueryAllBurningRequest
  ): Promise<QueryAllBurningResponse> {
    const data = QueryAllBurningRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Query",
      "BurningAll",
      data
    );
    return promise.then((data) =>
      QueryAllBurningResponse.decode(new Reader(data))
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
