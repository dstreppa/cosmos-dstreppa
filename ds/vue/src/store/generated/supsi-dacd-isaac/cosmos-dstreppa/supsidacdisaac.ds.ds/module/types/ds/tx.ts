/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.ds.ds";

export interface MsgCreateSignal {
  creator: string;
  index: string;
  idx: string;
  value: number;
}

export interface MsgCreateSignalResponse {}

export interface MsgUpdateSignal {
  creator: string;
  index: string;
  idx: string;
  value: number;
}

export interface MsgUpdateSignalResponse {}

export interface MsgDeleteSignal {
  creator: string;
  index: string;
}

export interface MsgDeleteSignalResponse {}

const baseMsgCreateSignal: object = {
  creator: "",
  index: "",
  idx: "",
  value: 0,
};

export const MsgCreateSignal = {
  encode(message: MsgCreateSignal, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.idx !== "") {
      writer.uint32(26).string(message.idx);
    }
    if (message.value !== 0) {
      writer.uint32(32).int32(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSignal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSignal } as MsgCreateSignal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.idx = reader.string();
          break;
        case 4:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSignal {
    const message = { ...baseMsgCreateSignal } as MsgCreateSignal;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.idx !== undefined && object.idx !== null) {
      message.idx = String(object.idx);
    } else {
      message.idx = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSignal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.idx !== undefined && (obj.idx = message.idx);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSignal>): MsgCreateSignal {
    const message = { ...baseMsgCreateSignal } as MsgCreateSignal;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.idx !== undefined && object.idx !== null) {
      message.idx = object.idx;
    } else {
      message.idx = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseMsgCreateSignalResponse: object = {};

export const MsgCreateSignalResponse = {
  encode(_: MsgCreateSignalResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSignalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSignalResponse,
    } as MsgCreateSignalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateSignalResponse {
    const message = {
      ...baseMsgCreateSignalResponse,
    } as MsgCreateSignalResponse;
    return message;
  },

  toJSON(_: MsgCreateSignalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateSignalResponse>
  ): MsgCreateSignalResponse {
    const message = {
      ...baseMsgCreateSignalResponse,
    } as MsgCreateSignalResponse;
    return message;
  },
};

const baseMsgUpdateSignal: object = {
  creator: "",
  index: "",
  idx: "",
  value: 0,
};

export const MsgUpdateSignal = {
  encode(message: MsgUpdateSignal, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.idx !== "") {
      writer.uint32(26).string(message.idx);
    }
    if (message.value !== 0) {
      writer.uint32(32).int32(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSignal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateSignal } as MsgUpdateSignal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.idx = reader.string();
          break;
        case 4:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSignal {
    const message = { ...baseMsgUpdateSignal } as MsgUpdateSignal;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.idx !== undefined && object.idx !== null) {
      message.idx = String(object.idx);
    } else {
      message.idx = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    } else {
      message.value = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateSignal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.idx !== undefined && (obj.idx = message.idx);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateSignal>): MsgUpdateSignal {
    const message = { ...baseMsgUpdateSignal } as MsgUpdateSignal;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.idx !== undefined && object.idx !== null) {
      message.idx = object.idx;
    } else {
      message.idx = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = 0;
    }
    return message;
  },
};

const baseMsgUpdateSignalResponse: object = {};

export const MsgUpdateSignalResponse = {
  encode(_: MsgUpdateSignalResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSignalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSignalResponse,
    } as MsgUpdateSignalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateSignalResponse {
    const message = {
      ...baseMsgUpdateSignalResponse,
    } as MsgUpdateSignalResponse;
    return message;
  },

  toJSON(_: MsgUpdateSignalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSignalResponse>
  ): MsgUpdateSignalResponse {
    const message = {
      ...baseMsgUpdateSignalResponse,
    } as MsgUpdateSignalResponse;
    return message;
  },
};

const baseMsgDeleteSignal: object = { creator: "", index: "" };

export const MsgDeleteSignal = {
  encode(message: MsgDeleteSignal, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSignal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteSignal } as MsgDeleteSignal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSignal {
    const message = { ...baseMsgDeleteSignal } as MsgDeleteSignal;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteSignal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSignal>): MsgDeleteSignal {
    const message = { ...baseMsgDeleteSignal } as MsgDeleteSignal;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteSignalResponse: object = {};

export const MsgDeleteSignalResponse = {
  encode(_: MsgDeleteSignalResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSignalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSignalResponse,
    } as MsgDeleteSignalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteSignalResponse {
    const message = {
      ...baseMsgDeleteSignalResponse,
    } as MsgDeleteSignalResponse;
    return message;
  },

  toJSON(_: MsgDeleteSignalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSignalResponse>
  ): MsgDeleteSignalResponse {
    const message = {
      ...baseMsgDeleteSignalResponse,
    } as MsgDeleteSignalResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateSignal(request: MsgCreateSignal): Promise<MsgCreateSignalResponse>;
  UpdateSignal(request: MsgUpdateSignal): Promise<MsgUpdateSignalResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteSignal(request: MsgDeleteSignal): Promise<MsgDeleteSignalResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateSignal(request: MsgCreateSignal): Promise<MsgCreateSignalResponse> {
    const data = MsgCreateSignal.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.ds.Msg",
      "CreateSignal",
      data
    );
    return promise.then((data) =>
      MsgCreateSignalResponse.decode(new Reader(data))
    );
  }

  UpdateSignal(request: MsgUpdateSignal): Promise<MsgUpdateSignalResponse> {
    const data = MsgUpdateSignal.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.ds.Msg",
      "UpdateSignal",
      data
    );
    return promise.then((data) =>
      MsgUpdateSignalResponse.decode(new Reader(data))
    );
  }

  DeleteSignal(request: MsgDeleteSignal): Promise<MsgDeleteSignalResponse> {
    const data = MsgDeleteSignal.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.ds.Msg",
      "DeleteSignal",
      data
    );
    return promise.then((data) =>
      MsgDeleteSignalResponse.decode(new Reader(data))
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
