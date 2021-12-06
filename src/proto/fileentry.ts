/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "hanshq.filespace.filespace";

export interface Fileentry {
  id: Long;
  did: string;
  rootdid: string;
  parentdid: string;
  votes: Long;
  entrytype: number;
  creator: string;
}

const baseFileentry: object = {
  id: Long.UZERO,
  did: "",
  rootdid: "",
  parentdid: "",
  votes: Long.UZERO,
  entrytype: 0,
  creator: "",
};

export const Fileentry = {
  encode(
    message: Fileentry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.rootdid !== "") {
      writer.uint32(26).string(message.rootdid);
    }
    if (message.parentdid !== "") {
      writer.uint32(34).string(message.parentdid);
    }
    if (!message.votes.isZero()) {
      writer.uint32(40).uint64(message.votes);
    }
    if (message.entrytype !== 0) {
      writer.uint32(48).uint32(message.entrytype);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fileentry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileentry } as Fileentry;
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
          message.rootdid = reader.string();
          break;
        case 4:
          message.parentdid = reader.string();
          break;
        case 5:
          message.votes = reader.uint64() as Long;
          break;
        case 6:
          message.entrytype = reader.uint32();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fileentry {
    const message = { ...baseFileentry } as Fileentry;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    message.did =
      object.did !== undefined && object.did !== null ? String(object.did) : "";
    message.rootdid =
      object.rootdid !== undefined && object.rootdid !== null
        ? String(object.rootdid)
        : "";
    message.parentdid =
      object.parentdid !== undefined && object.parentdid !== null
        ? String(object.parentdid)
        : "";
    message.votes =
      object.votes !== undefined && object.votes !== null
        ? Long.fromString(object.votes)
        : Long.UZERO;
    message.entrytype =
      object.entrytype !== undefined && object.entrytype !== null
        ? Number(object.entrytype)
        : 0;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    return message;
  },

  toJSON(message: Fileentry): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.did !== undefined && (obj.did = message.did);
    message.rootdid !== undefined && (obj.rootdid = message.rootdid);
    message.parentdid !== undefined && (obj.parentdid = message.parentdid);
    message.votes !== undefined &&
      (obj.votes = (message.votes || Long.UZERO).toString());
    message.entrytype !== undefined && (obj.entrytype = message.entrytype);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Fileentry>): Fileentry {
    const message = { ...baseFileentry } as Fileentry;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.did = object.did ?? "";
    message.rootdid = object.rootdid ?? "";
    message.parentdid = object.parentdid ?? "";
    message.votes =
      object.votes !== undefined && object.votes !== null
        ? Long.fromValue(object.votes)
        : Long.UZERO;
    message.entrytype = object.entrytype ?? 0;
    message.creator = object.creator ?? "";
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
