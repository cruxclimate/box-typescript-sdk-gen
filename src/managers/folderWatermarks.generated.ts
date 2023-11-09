import { serializeWatermark } from '../schemas.generated.js';
import { deserializeWatermark } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Watermark } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class GetFolderWatermarkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderWatermarkHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFolderWatermarkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField =
  'default';
export interface UpdateFolderWatermarkRequestBodyArgWatermarkField {
  readonly imprint: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFolderWatermarkRequestBodyArg {
  readonly watermark: UpdateFolderWatermarkRequestBodyArgWatermarkField;
}
export class UpdateFolderWatermarkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderWatermarkHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateFolderWatermarkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFolderWatermarkHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFolderWatermarkHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteFolderWatermarkHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FolderWatermarksManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      FolderWatermarksManager,
      'getFolderWatermark' | 'updateFolderWatermark' | 'deleteFolderWatermark'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFolderWatermark(
    folderId: string,
    headers: GetFolderWatermarkHeadersArg = new GetFolderWatermarkHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '/watermark'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWatermark(response.data);
  }
  async updateFolderWatermark(
    folderId: string,
    requestBody: UpdateFolderWatermarkRequestBodyArg,
    headers: UpdateFolderWatermarkHeadersArg = new UpdateFolderWatermarkHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '/watermark'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateFolderWatermarkRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWatermark(response.data);
  }
  async deleteFolderWatermark(
    folderId: string,
    headers: DeleteFolderWatermarkHeadersArg = new DeleteFolderWatermarkHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '/watermark'
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(
  val: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(
  val: any
): UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField"';
  }
  if (val == 'default') {
    return 'default';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFolderWatermarkRequestBodyArgWatermarkField(
  val: UpdateFolderWatermarkRequestBodyArgWatermarkField
): SerializedData {
  return {
    ['imprint']:
      serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(
        val.imprint
      ),
  };
}
export function deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(
  val: any
): UpdateFolderWatermarkRequestBodyArgWatermarkField {
  const imprint: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField =
    deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(
      val.imprint
    );
  return {
    imprint: imprint,
  } satisfies UpdateFolderWatermarkRequestBodyArgWatermarkField;
}
export function serializeUpdateFolderWatermarkRequestBodyArg(
  val: UpdateFolderWatermarkRequestBodyArg
): SerializedData {
  return {
    ['watermark']: serializeUpdateFolderWatermarkRequestBodyArgWatermarkField(
      val.watermark
    ),
  };
}
export function deserializeUpdateFolderWatermarkRequestBodyArg(
  val: any
): UpdateFolderWatermarkRequestBodyArg {
  const watermark: UpdateFolderWatermarkRequestBodyArgWatermarkField =
    deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val.watermark);
  return { watermark: watermark } satisfies UpdateFolderWatermarkRequestBodyArg;
}
