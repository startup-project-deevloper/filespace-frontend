/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "hanshq.filespace.filespace";

export interface Vote {
  id: Long;
  did: string;
  amount: Long;
  blockheight: Long;
  creator: string;
  fileentryid: Long;
}

const baseVote: object = {
  id: Long.UZERO,
  did: "",
  amount: Long.UZERO,
  blockheight: Long.UZERO,
  creator: "",
  fileentryid: Long.UZERO,
};

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    if (!message.blockheight.isZero()) {
      writer.uint32(32).uint64(message.blockheight);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (!message.fileentryid.isZero()) {
      writer.uint32(48).uint64(message.fileentryid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          message.amount = reader.uint64() as Long;
          break;
        case 4:
          message.blockheight = reader.uint64() as Long;
          break;
        case 5:
          message.creator = reader.string();
          break;
        case 6:
          message.fileentryid = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.did =
      object.did !== undefined && object.did !== null ? String(object.did) : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Long.fromString(object.amount)
        : Long.UZERO;
    message.blockheight =
      object.blockheight !== undefined && object.blockheight !== null
        ? Long.fromString(object.blockheight)
        : Long.UZERO;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.fileentryid =
      object.fileentryid !== undefined && object.fileentryid !== null
        ? Long.fromString(object.fileentryid)
        : Long.UZERO;
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.did !== undefined && (obj.did = message.did);
    message.amount !== undefined &&
      (obj.amount = (message.amount || Long.UZERO).toString());
    message.blockheight !== undefined &&
      (obj.blockheight = (message.blockheight || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.fileentryid !== undefined &&
      (obj.fileentryid = (message.fileentryid || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.did = object.did ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Long.fromValue(object.amount)
        : Long.UZERO;
    message.blockheight =
      object.blockheight !== undefined && object.blockheight !== null
        ? Long.fromValue(object.blockheight)
        : Long.UZERO;
    message.creator = object.creator ?? "";
    message.fileentryid =
      object.fileentryid !== undefined && object.fileentryid !== null
        ? Long.fromValue(object.fileentryid)
        : Long.UZERO;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
