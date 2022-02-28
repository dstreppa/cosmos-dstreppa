/* eslint-disable */
import { Minting } from "../tksmith/minting";
import { Burning } from "../tksmith/burning";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.ds.tksmith";

/** GenesisState defines the tksmith module's genesis state. */
export interface GenesisState {
  mintingList: Minting[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  burningList: Burning[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.mintingList) {
      Minting.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.burningList) {
      Burning.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
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

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
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

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.mintingList) {
      obj.mintingList = message.mintingList.map((e) =>
        e ? Minting.toJSON(e) : undefined
      );
    } else {
      obj.mintingList = [];
    }
    if (message.burningList) {
      obj.burningList = message.burningList.map((e) =>
        e ? Burning.toJSON(e) : undefined
      );
    } else {
      obj.burningList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
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
