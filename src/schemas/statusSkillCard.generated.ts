import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type StatusSkillCardTypeField = 'skill_card';
export type StatusSkillCardSkillCardTypeField = 'status';
export interface StatusSkillCardSkillCardTitleField {
  readonly code?: string;
  readonly message: string;
}
export type StatusSkillCardStatusCodeField =
  | 'invoked'
  | 'processing'
  | 'success'
  | 'transient_failure'
  | 'permanent_failure';
export interface StatusSkillCardStatusField {
  readonly code: StatusSkillCardStatusCodeField;
  readonly message?: string;
}
export type StatusSkillCardSkillTypeField = 'service';
export class StatusSkillCardSkillField {
  readonly type: StatusSkillCardSkillTypeField =
    'service' as StatusSkillCardSkillTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<StatusSkillCardSkillField, 'type'> &
      Partial<Pick<StatusSkillCardSkillField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface StatusSkillCardSkillFieldInput {
  readonly type?: StatusSkillCardSkillTypeField;
  readonly id: string;
}
export type StatusSkillCardInvocationTypeField = 'skill_invocation';
export class StatusSkillCardInvocationField {
  readonly type: StatusSkillCardInvocationTypeField =
    'skill_invocation' as StatusSkillCardInvocationTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<StatusSkillCardInvocationField, 'type'> &
      Partial<Pick<StatusSkillCardInvocationField, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface StatusSkillCardInvocationFieldInput {
  readonly type?: StatusSkillCardInvocationTypeField;
  readonly id: string;
}
export class StatusSkillCard {
  readonly createdAt?: DateTime;
  readonly type: StatusSkillCardTypeField =
    'skill_card' as StatusSkillCardTypeField;
  readonly skillCardType: StatusSkillCardSkillCardTypeField =
    'status' as StatusSkillCardSkillCardTypeField;
  readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
  readonly status!: StatusSkillCardStatusField;
  readonly skill!: StatusSkillCardSkillField;
  readonly invocation!: StatusSkillCardInvocationField;
  constructor(
    fields: Omit<StatusSkillCard, 'type' | 'skillCardType'> &
      Partial<Pick<StatusSkillCard, 'type' | 'skillCardType'>>
  ) {
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.skillCardType) {
      this.skillCardType = fields.skillCardType;
    }
    if (fields.skillCardTitle) {
      this.skillCardTitle = fields.skillCardTitle;
    }
    if (fields.status) {
      this.status = fields.status;
    }
    if (fields.skill) {
      this.skill = fields.skill;
    }
    if (fields.invocation) {
      this.invocation = fields.invocation;
    }
  }
}
export interface StatusSkillCardInput {
  readonly createdAt?: DateTime;
  readonly type?: StatusSkillCardTypeField;
  readonly skillCardType?: StatusSkillCardSkillCardTypeField;
  readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
  readonly status: StatusSkillCardStatusField;
  readonly skill: StatusSkillCardSkillField;
  readonly invocation: StatusSkillCardInvocationField;
}
export function serializeStatusSkillCardTypeField(
  val: StatusSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardTypeField(
  val: SerializedData
): StatusSkillCardTypeField {
  if (val == 'skill_card') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize StatusSkillCardTypeField",
  });
}
export function serializeStatusSkillCardSkillCardTypeField(
  val: StatusSkillCardSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardSkillCardTypeField(
  val: SerializedData
): StatusSkillCardSkillCardTypeField {
  if (val == 'status') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize StatusSkillCardSkillCardTypeField",
  });
}
export function serializeStatusSkillCardSkillCardTitleField(
  val: StatusSkillCardSkillCardTitleField
): SerializedData {
  return {
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['message']: val.message,
  };
}
export function deserializeStatusSkillCardSkillCardTitleField(
  val: SerializedData
): StatusSkillCardSkillCardTitleField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StatusSkillCardSkillCardTitleField"',
    });
  }
  if (!(val.code == void 0) && !sdIsString(val.code)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "code" of type "StatusSkillCardSkillCardTitleField"',
    });
  }
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  if (val.message == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "message" of type "StatusSkillCardSkillCardTitleField" to be defined',
    });
  }
  if (!sdIsString(val.message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "message" of type "StatusSkillCardSkillCardTitleField"',
    });
  }
  const message: string = val.message;
  return {
    code: code,
    message: message,
  } satisfies StatusSkillCardSkillCardTitleField;
}
export function serializeStatusSkillCardStatusCodeField(
  val: StatusSkillCardStatusCodeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardStatusCodeField(
  val: SerializedData
): StatusSkillCardStatusCodeField {
  if (val == 'invoked') {
    return val;
  }
  if (val == 'processing') {
    return val;
  }
  if (val == 'success') {
    return val;
  }
  if (val == 'transient_failure') {
    return val;
  }
  if (val == 'permanent_failure') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize StatusSkillCardStatusCodeField",
  });
}
export function serializeStatusSkillCardStatusField(
  val: StatusSkillCardStatusField
): SerializedData {
  return {
    ['code']: serializeStatusSkillCardStatusCodeField(val.code),
    ['message']: val.message == void 0 ? void 0 : val.message,
  };
}
export function deserializeStatusSkillCardStatusField(
  val: SerializedData
): StatusSkillCardStatusField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StatusSkillCardStatusField"',
    });
  }
  if (val.code == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "code" of type "StatusSkillCardStatusField" to be defined',
    });
  }
  const code: StatusSkillCardStatusCodeField =
    deserializeStatusSkillCardStatusCodeField(val.code);
  if (!(val.message == void 0) && !sdIsString(val.message)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "message" of type "StatusSkillCardStatusField"',
    });
  }
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  return { code: code, message: message } satisfies StatusSkillCardStatusField;
}
export function serializeStatusSkillCardSkillTypeField(
  val: StatusSkillCardSkillTypeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardSkillTypeField(
  val: SerializedData
): StatusSkillCardSkillTypeField {
  if (val == 'service') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize StatusSkillCardSkillTypeField",
  });
}
export function serializeStatusSkillCardSkillField(
  val: StatusSkillCardSkillField
): SerializedData {
  return {
    ['type']: serializeStatusSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeStatusSkillCardSkillField(
  val: SerializedData
): StatusSkillCardSkillField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StatusSkillCardSkillField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "StatusSkillCardSkillField" to be defined',
    });
  }
  const type: StatusSkillCardSkillTypeField =
    deserializeStatusSkillCardSkillTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "StatusSkillCardSkillField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "StatusSkillCardSkillField"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies StatusSkillCardSkillField;
}
export function serializeStatusSkillCardSkillFieldInput(
  val: StatusSkillCardSkillFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeStatusSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeStatusSkillCardSkillFieldInput(
  val: SerializedData
): StatusSkillCardSkillFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StatusSkillCardSkillFieldInput"',
    });
  }
  const type: undefined | StatusSkillCardSkillTypeField =
    val.type == void 0
      ? void 0
      : deserializeStatusSkillCardSkillTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "StatusSkillCardSkillFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "StatusSkillCardSkillFieldInput"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies StatusSkillCardSkillFieldInput;
}
export function serializeStatusSkillCardInvocationTypeField(
  val: StatusSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardInvocationTypeField(
  val: SerializedData
): StatusSkillCardInvocationTypeField {
  if (val == 'skill_invocation') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize StatusSkillCardInvocationTypeField",
  });
}
export function serializeStatusSkillCardInvocationField(
  val: StatusSkillCardInvocationField
): SerializedData {
  return {
    ['type']: serializeStatusSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeStatusSkillCardInvocationField(
  val: SerializedData
): StatusSkillCardInvocationField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StatusSkillCardInvocationField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "StatusSkillCardInvocationField" to be defined',
    });
  }
  const type: StatusSkillCardInvocationTypeField =
    deserializeStatusSkillCardInvocationTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "StatusSkillCardInvocationField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "StatusSkillCardInvocationField"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies StatusSkillCardInvocationField;
}
export function serializeStatusSkillCardInvocationFieldInput(
  val: StatusSkillCardInvocationFieldInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeStatusSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeStatusSkillCardInvocationFieldInput(
  val: SerializedData
): StatusSkillCardInvocationFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StatusSkillCardInvocationFieldInput"',
    });
  }
  const type: undefined | StatusSkillCardInvocationTypeField =
    val.type == void 0
      ? void 0
      : deserializeStatusSkillCardInvocationTypeField(val.type);
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "StatusSkillCardInvocationFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "StatusSkillCardInvocationFieldInput"',
    });
  }
  const id: string = val.id;
  return { type: type, id: id } satisfies StatusSkillCardInvocationFieldInput;
}
export function serializeStatusSkillCard(val: StatusSkillCard): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']: serializeStatusSkillCardTypeField(val.type),
    ['skill_card_type']: serializeStatusSkillCardSkillCardTypeField(
      val.skillCardType
    ),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeStatusSkillCardSkillCardTitleField(val.skillCardTitle),
    ['status']: serializeStatusSkillCardStatusField(val.status),
    ['skill']: serializeStatusSkillCardSkillField(val.skill),
    ['invocation']: serializeStatusSkillCardInvocationField(val.invocation),
  };
}
export function deserializeStatusSkillCard(
  val: SerializedData
): StatusSkillCard {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "StatusSkillCard"' });
  }
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "StatusSkillCard"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "StatusSkillCard" to be defined',
    });
  }
  const type: StatusSkillCardTypeField = deserializeStatusSkillCardTypeField(
    val.type
  );
  if (val.skill_card_type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "skill_card_type" of type "StatusSkillCard" to be defined',
    });
  }
  const skillCardType: StatusSkillCardSkillCardTypeField =
    deserializeStatusSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | StatusSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeStatusSkillCardSkillCardTitleField(val.skill_card_title);
  if (val.status == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "status" of type "StatusSkillCard" to be defined',
    });
  }
  const status: StatusSkillCardStatusField =
    deserializeStatusSkillCardStatusField(val.status);
  if (val.skill == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "skill" of type "StatusSkillCard" to be defined',
    });
  }
  const skill: StatusSkillCardSkillField = deserializeStatusSkillCardSkillField(
    val.skill
  );
  if (val.invocation == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "invocation" of type "StatusSkillCard" to be defined',
    });
  }
  const invocation: StatusSkillCardInvocationField =
    deserializeStatusSkillCardInvocationField(val.invocation);
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    status: status,
    skill: skill,
    invocation: invocation,
  } satisfies StatusSkillCard;
}
export function serializeStatusSkillCardInput(
  val: StatusSkillCardInput
): SerializedData {
  return {
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['type']:
      val.type == void 0 ? void 0 : serializeStatusSkillCardTypeField(val.type),
    ['skillCardType']:
      val.skillCardType == void 0
        ? void 0
        : serializeStatusSkillCardSkillCardTypeField(val.skillCardType),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeStatusSkillCardSkillCardTitleField(val.skillCardTitle),
    ['status']: serializeStatusSkillCardStatusField(val.status),
    ['skill']: serializeStatusSkillCardSkillField(val.skill),
    ['invocation']: serializeStatusSkillCardInvocationField(val.invocation),
  };
}
export function deserializeStatusSkillCardInput(
  val: SerializedData
): StatusSkillCardInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "StatusSkillCardInput"',
    });
  }
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "created_at" of type "StatusSkillCardInput"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const type: undefined | StatusSkillCardTypeField =
    val.type == void 0 ? void 0 : deserializeStatusSkillCardTypeField(val.type);
  const skillCardType: undefined | StatusSkillCardSkillCardTypeField =
    val.skillCardType == void 0
      ? void 0
      : deserializeStatusSkillCardSkillCardTypeField(val.skillCardType);
  const skillCardTitle: undefined | StatusSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeStatusSkillCardSkillCardTitleField(val.skill_card_title);
  if (val.status == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "status" of type "StatusSkillCardInput" to be defined',
    });
  }
  const status: StatusSkillCardStatusField =
    deserializeStatusSkillCardStatusField(val.status);
  if (val.skill == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "skill" of type "StatusSkillCardInput" to be defined',
    });
  }
  const skill: StatusSkillCardSkillField = deserializeStatusSkillCardSkillField(
    val.skill
  );
  if (val.invocation == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "invocation" of type "StatusSkillCardInput" to be defined',
    });
  }
  const invocation: StatusSkillCardInvocationField =
    deserializeStatusSkillCardInvocationField(val.invocation);
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    status: status,
    skill: skill,
    invocation: invocation,
  } satisfies StatusSkillCardInput;
}
