/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "hanshq.filespace.filespace";

export interface MsgPublishfileentry {
  creator: string;
  did: string;
  rootdid: string;
  parentdid: string;
  votes: number;
  entrytype: number;
}

export interface MsgPublishfileentryResponse {
  id: Long;
}

export interface MsgCreateVote {
  creator: string;
  did: string;
  amount: Long;
  fileentryid: Long;
}

export interface MsgCreateVoteResponse {
  id: Long;
}

const baseMsgPublishfileentry: object = {
  creator: "",
  did: "",
  rootdid: "",
  parentdid: "",
  votes: 0,
  entrytype: 0,
};

export const MsgPublishfileentry = {
  encode(
    message: MsgPublishfileentry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    if (message.votes !== 0) {
      writer.uint32(40).uint32(message.votes);
    }
    if (message.entrytype !== 0) {
      writer.uint32(48).uint32(message.entrytype);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPublishfileentry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPublishfileentry } as MsgPublishfileentry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
          message.votes = reader.uint32();
          break;
        case 6:
          message.entrytype = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPublishfileentry {
    const message = { ...baseMsgPublishfileentry } as MsgPublishfileentry;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
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
        ? Number(object.votes)
        : 0;
    message.entrytype =
      object.entrytype !== undefined && object.entrytype !== null
        ? Number(object.entrytype)
        : 0;
    return message;
  },

  toJSON(message: MsgPublishfileentry): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.rootdid !== undefined && (obj.rootdid = message.rootdid);
    message.parentdid !== undefined && (obj.parentdid = message.parentdid);
    message.votes !== undefined && (obj.votes = message.votes);
    message.entrytype !== undefined && (obj.entrytype = message.entrytype);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPublishfileentry>): MsgPublishfileentry {
    const message = { ...baseMsgPublishfileentry } as MsgPublishfileentry;
    message.creator = object.creator ?? "";
    message.did = object.did ?? "";
    message.rootdid = object.rootdid ?? "";
    message.parentdid = object.parentdid ?? "";
    message.votes = object.votes ?? 0;
    message.entrytype = object.entrytype ?? 0;
    return message;
  },
};

const baseMsgPublishfileentryResponse: object = { id: Long.UZERO };

export const MsgPublishfileentryResponse = {
  encode(
    message: MsgPublishfileentryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgPublishfileentryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPublishfileentryResponse,
    } as MsgPublishfileentryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPublishfileentryResponse {
    const message = {
      ...baseMsgPublishfileentryResponse,
    } as MsgPublishfileentryResponse;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgPublishfileentryResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgPublishfileentryResponse>
  ): MsgPublishfileentryResponse {
    const message = {
      ...baseMsgPublishfileentryResponse,
    } as MsgPublishfileentryResponse;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

const baseMsgCreateVote: object = {
  creator: "",
  did: "",
  amount: Long.UZERO,
  fileentryid: Long.UZERO,
};

export const MsgCreateVote = {
  encode(
    message: MsgCreateVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    if (!message.fileentryid.isZero()) {
      writer.uint32(32).uint64(message.fileentryid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          message.amount = reader.uint64() as Long;
          break;
        case 4:
          message.fileentryid = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.creator =
      object.creator !== undefined && object.creator !== null
        ? String(object.creator)
        : "";
    message.did =
      object.did !== undefined && object.did !== null ? String(object.did) : "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Long.fromString(object.amount)
        : Long.UZERO;
    message.fileentryid =
      object.fileentryid !== undefined && object.fileentryid !== null
        ? Long.fromString(object.fileentryid)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgCreateVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.amount !== undefined &&
      (obj.amount = (message.amount || Long.UZERO).toString());
    message.fileentryid !== undefined &&
      (obj.fileentryid = (message.fileentryid || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateVote>): MsgCreateVote {
    const message = { ...baseMsgCreateVote } as MsgCreateVote;
    message.creator = object.creator ?? "";
    message.did = object.did ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Long.fromValue(object.amount)
        : Long.UZERO;
    message.fileentryid =
      object.fileentryid !== undefined && object.fileentryid !== null
        ? Long.fromValue(object.fileentryid)
        : Long.UZERO;
    return message;
  },
};

const baseMsgCreateVoteResponse: object = { id: Long.UZERO };

export const MsgCreateVoteResponse = {
  encode(
    message: MsgCreateVoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromString(object.id)
        : Long.UZERO;
    return message;
  },

  toJSON(message: MsgCreateVoteResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateVoteResponse>
  ): MsgCreateVoteResponse {
    const message = { ...baseMsgCreateVoteResponse } as MsgCreateVoteResponse;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Publishfileentry(
    request: MsgPublishfileentry
  ): Promise<MsgPublishfileentryResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Publishfileentry = this.Publishfileentry.bind(this);
    this.CreateVote = this.CreateVote.bind(this);
  }
  Publishfileentry(
    request: MsgPublishfileentry
  ): Promise<MsgPublishfileentryResponse> {
    const data = MsgPublishfileentry.encode(request).finish();
    const promise = this.rpc.request(
      "hanshq.filespace.filespace.Msg",
      "Publishfileentry",
      data
    );
    return promise.then((data) =>
      MsgPublishfileentryResponse.decode(new _m0.Reader(data))
    );
  }

  CreateVote(request: MsgCreateVote): Promise<MsgCreateVoteResponse> {
    const data = MsgCreateVote.encode(request).finish();
    const promise = this.rpc.request(
      "hanshq.filespace.filespace.Msg",
      "CreateVote",
      data
    );
    return promise.then((data) =>
      MsgCreateVoteResponse.decode(new _m0.Reader(data))
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
