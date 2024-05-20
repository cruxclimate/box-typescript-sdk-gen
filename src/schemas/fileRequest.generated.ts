import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FolderMini } from './folderMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type FileRequestTypeField = 'file_request';
export type FileRequestStatusField = 'active' | 'inactive';
export class FileRequest {
  readonly id!: string;
  readonly type: FileRequestTypeField = 'file_request' as FileRequestTypeField;
  readonly title?: string;
  readonly description?: string;
  readonly status?: FileRequestStatusField;
  readonly isEmailRequired?: boolean;
  readonly isDescriptionRequired?: boolean;
  readonly expiresAt?: DateTime;
  readonly folder!: FolderMini;
  readonly url?: string;
  readonly etag?: string;
  readonly createdBy?: UserMini;
  readonly createdAt!: DateTime;
  readonly updatedBy?: UserMini;
  readonly updatedAt!: DateTime;
  constructor(
    fields: Omit<FileRequest, 'type'> & Partial<Pick<FileRequest, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.title) {
      this.title = fields.title;
    }
    if (fields.description) {
      this.description = fields.description;
    }
    if (fields.status) {
      this.status = fields.status;
    }
    if (fields.isEmailRequired) {
      this.isEmailRequired = fields.isEmailRequired;
    }
    if (fields.isDescriptionRequired) {
      this.isDescriptionRequired = fields.isDescriptionRequired;
    }
    if (fields.expiresAt) {
      this.expiresAt = fields.expiresAt;
    }
    if (fields.folder) {
      this.folder = fields.folder;
    }
    if (fields.url) {
      this.url = fields.url;
    }
    if (fields.etag) {
      this.etag = fields.etag;
    }
    if (fields.createdBy) {
      this.createdBy = fields.createdBy;
    }
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.updatedBy) {
      this.updatedBy = fields.updatedBy;
    }
    if (fields.updatedAt) {
      this.updatedAt = fields.updatedAt;
    }
  }
}
export interface FileRequestInput {
  readonly id: string;
  readonly type?: FileRequestTypeField;
  readonly title?: string;
  readonly description?: string;
  readonly status?: FileRequestStatusField;
  readonly isEmailRequired?: boolean;
  readonly isDescriptionRequired?: boolean;
  readonly expiresAt?: DateTime;
  readonly folder: FolderMini;
  readonly url?: string;
  readonly etag?: string;
  readonly createdBy?: UserMini;
  readonly createdAt: DateTime;
  readonly updatedBy?: UserMini;
  readonly updatedAt: DateTime;
}
export function serializeFileRequestTypeField(
  val: FileRequestTypeField
): SerializedData {
  return val;
}
export function deserializeFileRequestTypeField(
  val: SerializedData
): FileRequestTypeField {
  if (val == 'file_request') {
    return val;
  }
  throw new BoxSdkError({ message: "Can't deserialize FileRequestTypeField" });
}
export function serializeFileRequestStatusField(
  val: FileRequestStatusField
): SerializedData {
  return val;
}
export function deserializeFileRequestStatusField(
  val: SerializedData
): FileRequestStatusField {
  if (val == 'active') {
    return val;
  }
  if (val == 'inactive') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize FileRequestStatusField",
  });
}
export function serializeFileRequest(val: FileRequest): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeFileRequestTypeField(val.type),
    ['title']: val.title == void 0 ? void 0 : val.title,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeFileRequestStatusField(val.status),
    ['is_email_required']:
      val.isEmailRequired == void 0 ? void 0 : val.isEmailRequired,
    ['is_description_required']:
      val.isDescriptionRequired == void 0 ? void 0 : val.isDescriptionRequired,
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
    ['folder']: serializeFolderMini(val.folder),
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']: serializeDateTime(val.createdAt),
    ['updated_by']:
      val.updatedBy == void 0 ? void 0 : serializeUserMini(val.updatedBy),
    ['updated_at']: serializeDateTime(val.updatedAt),
  };
}
export function deserializeFileRequest(val: SerializedData): FileRequest {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "FileRequest"' });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "FileRequest" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "FileRequest"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "FileRequest" to be defined',
    });
  }
  const type: FileRequestTypeField = deserializeFileRequestTypeField(val.type);
  if (!(val.title == void 0) && !sdIsString(val.title)) {
    throw new BoxSdkError({
      message: 'Expecting string for "title" of type "FileRequest"',
    });
  }
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message: 'Expecting string for "description" of type "FileRequest"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestStatusField(val.status);
  if (
    !(val.is_email_required == void 0) &&
    !sdIsBoolean(val.is_email_required)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_email_required" of type "FileRequest"',
    });
  }
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  if (
    !(val.is_description_required == void 0) &&
    !sdIsBoolean(val.is_description_required)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_description_required" of type "FileRequest"',
    });
  }
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "expires_at" of type "FileRequest"',
    });
  }
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  if (val.folder == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "folder" of type "FileRequest" to be defined',
    });
  }
  const folder: FolderMini = deserializeFolderMini(val.folder);
  if (!(val.url == void 0) && !sdIsString(val.url)) {
    throw new BoxSdkError({
      message: 'Expecting string for "url" of type "FileRequest"',
    });
  }
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  if (!(val.etag == void 0) && !sdIsString(val.etag)) {
    throw new BoxSdkError({
      message: 'Expecting string for "etag" of type "FileRequest"',
    });
  }
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  if (val.created_at == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "created_at" of type "FileRequest" to be defined',
    });
  }
  if (!sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "FileRequest"',
    });
  }
  const createdAt: DateTime = deserializeDateTime(val.created_at);
  const updatedBy: undefined | UserMini =
    val.updated_by == void 0 ? void 0 : deserializeUserMini(val.updated_by);
  if (val.updated_at == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "updated_at" of type "FileRequest" to be defined',
    });
  }
  if (!sdIsString(val.updated_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "updated_at" of type "FileRequest"',
    });
  }
  const updatedAt: DateTime = deserializeDateTime(val.updated_at);
  return {
    id: id,
    type: type,
    title: title,
    description: description,
    status: status,
    isEmailRequired: isEmailRequired,
    isDescriptionRequired: isDescriptionRequired,
    expiresAt: expiresAt,
    folder: folder,
    url: url,
    etag: etag,
    createdBy: createdBy,
    createdAt: createdAt,
    updatedBy: updatedBy,
    updatedAt: updatedAt,
  } satisfies FileRequest;
}
export function serializeFileRequestInput(
  val: FileRequestInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeFileRequestTypeField(val.type),
    ['title']: val.title == void 0 ? void 0 : val.title,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeFileRequestStatusField(val.status),
    ['is_email_required']:
      val.isEmailRequired == void 0 ? void 0 : val.isEmailRequired,
    ['is_description_required']:
      val.isDescriptionRequired == void 0 ? void 0 : val.isDescriptionRequired,
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
    ['folder']: serializeFolderMini(val.folder),
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']: serializeDateTime(val.createdAt),
    ['updated_by']:
      val.updatedBy == void 0 ? void 0 : serializeUserMini(val.updatedBy),
    ['updated_at']: serializeDateTime(val.updatedAt),
  };
}
export function deserializeFileRequestInput(
  val: SerializedData
): FileRequestInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileRequestInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "FileRequestInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "FileRequestInput"',
    });
  }
  const id: string = val.id;
  const type: undefined | FileRequestTypeField =
    val.type == void 0 ? void 0 : deserializeFileRequestTypeField(val.type);
  if (!(val.title == void 0) && !sdIsString(val.title)) {
    throw new BoxSdkError({
      message: 'Expecting string for "title" of type "FileRequestInput"',
    });
  }
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  if (!(val.description == void 0) && !sdIsString(val.description)) {
    throw new BoxSdkError({
      message: 'Expecting string for "description" of type "FileRequestInput"',
    });
  }
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestStatusField(val.status);
  if (
    !(val.is_email_required == void 0) &&
    !sdIsBoolean(val.is_email_required)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_email_required" of type "FileRequestInput"',
    });
  }
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  if (
    !(val.is_description_required == void 0) &&
    !sdIsBoolean(val.is_description_required)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_description_required" of type "FileRequestInput"',
    });
  }
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "expires_at" of type "FileRequestInput"',
    });
  }
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  if (val.folder == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "folder" of type "FileRequestInput" to be defined',
    });
  }
  const folder: FolderMini = deserializeFolderMini(val.folder);
  if (!(val.url == void 0) && !sdIsString(val.url)) {
    throw new BoxSdkError({
      message: 'Expecting string for "url" of type "FileRequestInput"',
    });
  }
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  if (!(val.etag == void 0) && !sdIsString(val.etag)) {
    throw new BoxSdkError({
      message: 'Expecting string for "etag" of type "FileRequestInput"',
    });
  }
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  if (val.created_at == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "created_at" of type "FileRequestInput" to be defined',
    });
  }
  if (!sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "FileRequestInput"',
    });
  }
  const createdAt: DateTime = deserializeDateTime(val.created_at);
  const updatedBy: undefined | UserMini =
    val.updated_by == void 0 ? void 0 : deserializeUserMini(val.updated_by);
  if (val.updated_at == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "updated_at" of type "FileRequestInput" to be defined',
    });
  }
  if (!sdIsString(val.updated_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "updated_at" of type "FileRequestInput"',
    });
  }
  const updatedAt: DateTime = deserializeDateTime(val.updated_at);
  return {
    id: id,
    type: type,
    title: title,
    description: description,
    status: status,
    isEmailRequired: isEmailRequired,
    isDescriptionRequired: isDescriptionRequired,
    expiresAt: expiresAt,
    folder: folder,
    url: url,
    etag: etag,
    createdBy: createdBy,
    createdAt: createdAt,
    updatedBy: updatedBy,
    updatedAt: updatedAt,
  } satisfies FileRequestInput;
}
