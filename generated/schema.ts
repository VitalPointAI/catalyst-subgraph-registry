// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("signerId", Value.fromString(""));
    this.set("log", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get signerId(): string {
    let value = this.get("signerId");
    return value!.toString();
  }

  set signerId(value: string) {
    this.set("signerId", Value.fromString(value));
  }

  get log(): Array<string> {
    let value = this.get("log");
    return value!.toStringArray();
  }

  set log(value: Array<string>) {
    this.set("log", Value.fromStringArray(value));
  }
}

export class Log extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("standard", Value.fromString(""));
    this.set("version", Value.fromString(""));
    this.set("event", Value.fromString(""));
    this.set("verified", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Log entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Log entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Log", id.toString(), this);
    }
  }

  static load(id: string): Log | null {
    return changetype<Log | null>(store.get("Log", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get standard(): string {
    let value = this.get("standard");
    return value!.toString();
  }

  set standard(value: string) {
    this.set("standard", Value.fromString(value));
  }

  get version(): string {
    let value = this.get("version");
    return value!.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value!.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }

  get adminId(): string | null {
    let value = this.get("adminId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set adminId(value: string | null) {
    if (!value) {
      this.unset("adminId");
    } else {
      this.set("adminId", Value.fromString(<string>value));
    }
  }

  get adminSet(): BigInt | null {
    let value = this.get("adminSet");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set adminSet(value: BigInt | null) {
    if (!value) {
      this.unset("adminSet");
    } else {
      this.set("adminSet", Value.fromBigInt(<BigInt>value));
    }
  }

  get accountId(): string | null {
    let value = this.get("accountId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set accountId(value: string | null) {
    if (!value) {
      this.unset("accountId");
    } else {
      this.set("accountId", Value.fromString(<string>value));
    }
  }

  get transferredFrom(): string | null {
    let value = this.get("transferredFrom");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transferredFrom(value: string | null) {
    if (!value) {
      this.unset("transferredFrom");
    } else {
      this.set("transferredFrom", Value.fromString(<string>value));
    }
  }

  get transferred(): BigInt | null {
    let value = this.get("transferred");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set transferred(value: BigInt | null) {
    if (!value) {
      this.unset("transferred");
    } else {
      this.set("transferred", Value.fromBigInt(<BigInt>value));
    }
  }

  get transferredTo(): string | null {
    let value = this.get("transferredTo");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transferredTo(value: string | null) {
    if (!value) {
      this.unset("transferredTo");
    } else {
      this.set("transferredTo", Value.fromString(<string>value));
    }
  }

  get did(): string | null {
    let value = this.get("did");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set did(value: string | null) {
    if (!value) {
      this.unset("did");
    } else {
      this.set("did", Value.fromString(<string>value));
    }
  }

  get registered(): BigInt | null {
    let value = this.get("registered");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set registered(value: BigInt | null) {
    if (!value) {
      this.unset("registered");
    } else {
      this.set("registered", Value.fromBigInt(<BigInt>value));
    }
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(<string>value));
    }
  }

  get verified(): boolean {
    let value = this.get("verified");
    return value!.toBoolean();
  }

  set verified(value: boolean) {
    this.set("verified", Value.fromBoolean(value));
  }

  get time(): BigInt | null {
    let value = this.get("time");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set time(value: BigInt | null) {
    if (!value) {
      this.unset("time");
    } else {
      this.set("time", Value.fromBigInt(<BigInt>value));
    }
  }

  get changedBy(): string | null {
    let value = this.get("changedBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set changedBy(value: string | null) {
    if (!value) {
      this.unset("changedBy");
    } else {
      this.set("changedBy", Value.fromString(<string>value));
    }
  }

  get editor(): string | null {
    let value = this.get("editor");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set editor(value: string | null) {
    if (!value) {
      this.unset("editor");
    } else {
      this.set("editor", Value.fromString(<string>value));
    }
  }

  get removedBy(): string | null {
    let value = this.get("removedBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set removedBy(value: string | null) {
    if (!value) {
      this.unset("removedBy");
    } else {
      this.set("removedBy", Value.fromString(<string>value));
    }
  }

  get addedBy(): string | null {
    let value = this.get("addedBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set addedBy(value: string | null) {
    if (!value) {
      this.unset("addedBy");
    } else {
      this.set("addedBy", Value.fromString(<string>value));
    }
  }

  get whitelistedBy(): string | null {
    let value = this.get("whitelistedBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set whitelistedBy(value: string | null) {
    if (!value) {
      this.unset("whitelistedBy");
    } else {
      this.set("whitelistedBy", Value.fromString(<string>value));
    }
  }

  get deletedBy(): string | null {
    let value = this.get("deletedBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set deletedBy(value: string | null) {
    if (!value) {
      this.unset("deletedBy");
    } else {
      this.set("deletedBy", Value.fromString(<string>value));
    }
  }

  get alias(): string | null {
    let value = this.get("alias");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set alias(value: string | null) {
    if (!value) {
      this.unset("alias");
    } else {
      this.set("alias", Value.fromString(<string>value));
    }
  }

  get storedBy(): string | null {
    let value = this.get("storedBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set storedBy(value: string | null) {
    if (!value) {
      this.unset("storedBy");
    } else {
      this.set("storedBy", Value.fromString(<string>value));
    }
  }

  get definition(): string | null {
    let value = this.get("definition");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set definition(value: string | null) {
    if (!value) {
      this.unset("definition");
    } else {
      this.set("definition", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }
}
