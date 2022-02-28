/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.ds.tksmith";

export interface MsgCreateMinting {
  creator: string;
  index: string;
  timestamp: number;
  amount: number;
}

export interface MsgCreateMintingResponse {}

export interface MsgUpdateMinting {
  creator: string;
  index: string;
  timestamp: number;
  amount: number;
}

export interface MsgUpdateMintingResponse {}

export interface MsgDeleteMinting {
  creator: string;
  index: string;
}

export interface MsgDeleteMintingResponse {}

export interface MsgCreateBurning {
  creator: string;
  index: string;
  timestamp: number;
  amount: number;
}

export interface MsgCreateBurningResponse {}

export interface MsgUpdateBurning {
  creator: string;
  index: string;
  timestamp: number;
  amount: number;
}

export interface MsgUpdateBurningResponse {}

export interface MsgDeleteBurning {
  creator: string;
  index: string;
}

export interface MsgDeleteBurningResponse {}

const baseMsgCreateMinting: object = {
  creator: "",
  index: "",
  timestamp: 0,
  amount: 0,
};

export const MsgCreateMinting = {
  encode(message: MsgCreateMinting, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int32(message.timestamp);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMinting {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMinting } as MsgCreateMinting;
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
          message.timestamp = reader.int32();
          break;
        case 4:
          message.amount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMinting {
    const message = { ...baseMsgCreateMinting } as MsgCreateMinting;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateMinting): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMinting>): MsgCreateMinting {
    const message = { ...baseMsgCreateMinting } as MsgCreateMinting;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseMsgCreateMintingResponse: object = {};

export const MsgCreateMintingResponse = {
  encode(
    _: MsgCreateMintingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMintingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMintingResponse,
    } as MsgCreateMintingResponse;
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

  fromJSON(_: any): MsgCreateMintingResponse {
    const message = {
      ...baseMsgCreateMintingResponse,
    } as MsgCreateMintingResponse;
    return message;
  },

  toJSON(_: MsgCreateMintingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateMintingResponse>
  ): MsgCreateMintingResponse {
    const message = {
      ...baseMsgCreateMintingResponse,
    } as MsgCreateMintingResponse;
    return message;
  },
};

const baseMsgUpdateMinting: object = {
  creator: "",
  index: "",
  timestamp: 0,
  amount: 0,
};

export const MsgUpdateMinting = {
  encode(message: MsgUpdateMinting, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int32(message.timestamp);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMinting {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMinting } as MsgUpdateMinting;
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
          message.timestamp = reader.int32();
          break;
        case 4:
          message.amount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMinting {
    const message = { ...baseMsgUpdateMinting } as MsgUpdateMinting;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateMinting): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMinting>): MsgUpdateMinting {
    const message = { ...baseMsgUpdateMinting } as MsgUpdateMinting;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseMsgUpdateMintingResponse: object = {};

export const MsgUpdateMintingResponse = {
  encode(
    _: MsgUpdateMintingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMintingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMintingResponse,
    } as MsgUpdateMintingResponse;
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

  fromJSON(_: any): MsgUpdateMintingResponse {
    const message = {
      ...baseMsgUpdateMintingResponse,
    } as MsgUpdateMintingResponse;
    return message;
  },

  toJSON(_: MsgUpdateMintingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMintingResponse>
  ): MsgUpdateMintingResponse {
    const message = {
      ...baseMsgUpdateMintingResponse,
    } as MsgUpdateMintingResponse;
    return message;
  },
};

const baseMsgDeleteMinting: object = { creator: "", index: "" };

export const MsgDeleteMinting = {
  encode(message: MsgDeleteMinting, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMinting {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMinting } as MsgDeleteMinting;
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

  fromJSON(object: any): MsgDeleteMinting {
    const message = { ...baseMsgDeleteMinting } as MsgDeleteMinting;
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

  toJSON(message: MsgDeleteMinting): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMinting>): MsgDeleteMinting {
    const message = { ...baseMsgDeleteMinting } as MsgDeleteMinting;
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

const baseMsgDeleteMintingResponse: object = {};

export const MsgDeleteMintingResponse = {
  encode(
    _: MsgDeleteMintingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMintingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMintingResponse,
    } as MsgDeleteMintingResponse;
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

  fromJSON(_: any): MsgDeleteMintingResponse {
    const message = {
      ...baseMsgDeleteMintingResponse,
    } as MsgDeleteMintingResponse;
    return message;
  },

  toJSON(_: MsgDeleteMintingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMintingResponse>
  ): MsgDeleteMintingResponse {
    const message = {
      ...baseMsgDeleteMintingResponse,
    } as MsgDeleteMintingResponse;
    return message;
  },
};

const baseMsgCreateBurning: object = {
  creator: "",
  index: "",
  timestamp: 0,
  amount: 0,
};

export const MsgCreateBurning = {
  encode(message: MsgCreateBurning, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int32(message.timestamp);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBurning {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBurning } as MsgCreateBurning;
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
          message.timestamp = reader.int32();
          break;
        case 4:
          message.amount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBurning {
    const message = { ...baseMsgCreateBurning } as MsgCreateBurning;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateBurning): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBurning>): MsgCreateBurning {
    const message = { ...baseMsgCreateBurning } as MsgCreateBurning;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseMsgCreateBurningResponse: object = {};

export const MsgCreateBurningResponse = {
  encode(
    _: MsgCreateBurningResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateBurningResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBurningResponse,
    } as MsgCreateBurningResponse;
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

  fromJSON(_: any): MsgCreateBurningResponse {
    const message = {
      ...baseMsgCreateBurningResponse,
    } as MsgCreateBurningResponse;
    return message;
  },

  toJSON(_: MsgCreateBurningResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateBurningResponse>
  ): MsgCreateBurningResponse {
    const message = {
      ...baseMsgCreateBurningResponse,
    } as MsgCreateBurningResponse;
    return message;
  },
};

const baseMsgUpdateBurning: object = {
  creator: "",
  index: "",
  timestamp: 0,
  amount: 0,
};

export const MsgUpdateBurning = {
  encode(message: MsgUpdateBurning, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int32(message.timestamp);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBurning {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBurning } as MsgUpdateBurning;
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
          message.timestamp = reader.int32();
          break;
        case 4:
          message.amount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBurning {
    const message = { ...baseMsgUpdateBurning } as MsgUpdateBurning;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateBurning): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBurning>): MsgUpdateBurning {
    const message = { ...baseMsgUpdateBurning } as MsgUpdateBurning;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseMsgUpdateBurningResponse: object = {};

export const MsgUpdateBurningResponse = {
  encode(
    _: MsgUpdateBurningResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateBurningResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBurningResponse,
    } as MsgUpdateBurningResponse;
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

  fromJSON(_: any): MsgUpdateBurningResponse {
    const message = {
      ...baseMsgUpdateBurningResponse,
    } as MsgUpdateBurningResponse;
    return message;
  },

  toJSON(_: MsgUpdateBurningResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateBurningResponse>
  ): MsgUpdateBurningResponse {
    const message = {
      ...baseMsgUpdateBurningResponse,
    } as MsgUpdateBurningResponse;
    return message;
  },
};

const baseMsgDeleteBurning: object = { creator: "", index: "" };

export const MsgDeleteBurning = {
  encode(message: MsgDeleteBurning, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBurning {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBurning } as MsgDeleteBurning;
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

  fromJSON(object: any): MsgDeleteBurning {
    const message = { ...baseMsgDeleteBurning } as MsgDeleteBurning;
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

  toJSON(message: MsgDeleteBurning): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBurning>): MsgDeleteBurning {
    const message = { ...baseMsgDeleteBurning } as MsgDeleteBurning;
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

const baseMsgDeleteBurningResponse: object = {};

export const MsgDeleteBurningResponse = {
  encode(
    _: MsgDeleteBurningResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteBurningResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBurningResponse,
    } as MsgDeleteBurningResponse;
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

  fromJSON(_: any): MsgDeleteBurningResponse {
    const message = {
      ...baseMsgDeleteBurningResponse,
    } as MsgDeleteBurningResponse;
    return message;
  },

  toJSON(_: MsgDeleteBurningResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBurningResponse>
  ): MsgDeleteBurningResponse {
    const message = {
      ...baseMsgDeleteBurningResponse,
    } as MsgDeleteBurningResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateMinting(request: MsgCreateMinting): Promise<MsgCreateMintingResponse>;
  UpdateMinting(request: MsgUpdateMinting): Promise<MsgUpdateMintingResponse>;
  DeleteMinting(request: MsgDeleteMinting): Promise<MsgDeleteMintingResponse>;
  CreateBurning(request: MsgCreateBurning): Promise<MsgCreateBurningResponse>;
  UpdateBurning(request: MsgUpdateBurning): Promise<MsgUpdateBurningResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteBurning(request: MsgDeleteBurning): Promise<MsgDeleteBurningResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateMinting(request: MsgCreateMinting): Promise<MsgCreateMintingResponse> {
    const data = MsgCreateMinting.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Msg",
      "CreateMinting",
      data
    );
    return promise.then((data) =>
      MsgCreateMintingResponse.decode(new Reader(data))
    );
  }

  UpdateMinting(request: MsgUpdateMinting): Promise<MsgUpdateMintingResponse> {
    const data = MsgUpdateMinting.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Msg",
      "UpdateMinting",
      data
    );
    return promise.then((data) =>
      MsgUpdateMintingResponse.decode(new Reader(data))
    );
  }

  DeleteMinting(request: MsgDeleteMinting): Promise<MsgDeleteMintingResponse> {
    const data = MsgDeleteMinting.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Msg",
      "DeleteMinting",
      data
    );
    return promise.then((data) =>
      MsgDeleteMintingResponse.decode(new Reader(data))
    );
  }

  CreateBurning(request: MsgCreateBurning): Promise<MsgCreateBurningResponse> {
    const data = MsgCreateBurning.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Msg",
      "CreateBurning",
      data
    );
    return promise.then((data) =>
      MsgCreateBurningResponse.decode(new Reader(data))
    );
  }

  UpdateBurning(request: MsgUpdateBurning): Promise<MsgUpdateBurningResponse> {
    const data = MsgUpdateBurning.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Msg",
      "UpdateBurning",
      data
    );
    return promise.then((data) =>
      MsgUpdateBurningResponse.decode(new Reader(data))
    );
  }

  DeleteBurning(request: MsgDeleteBurning): Promise<MsgDeleteBurningResponse> {
    const data = MsgDeleteBurning.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.ds.tksmith.Msg",
      "DeleteBurning",
      data
    );
    return promise.then((data) =>
      MsgDeleteBurningResponse.decode(new Reader(data))
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
