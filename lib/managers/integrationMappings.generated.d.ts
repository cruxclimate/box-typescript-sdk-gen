import { IntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { IntegrationMapping } from '../schemas/integrationMapping.generated.js';
import { IntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { IntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { IntegrationMappingSlackOptions } from '../schemas/integrationMappingSlackOptions.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateSlackIntegrationMappingOptionals {
    readonly headers: CreateSlackIntegrationMappingHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateSlackIntegrationMappingOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateSlackIntegrationMappingOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateSlackIntegrationMappingOptionalsInput {
    readonly headers?: CreateSlackIntegrationMappingHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateSlackIntegrationMappingByIdOptionals {
    readonly requestBody: UpdateSlackIntegrationMappingByIdRequestBody;
    readonly headers: UpdateSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateSlackIntegrationMappingByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateSlackIntegrationMappingByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateSlackIntegrationMappingByIdOptionalsInput {
    readonly requestBody?: UpdateSlackIntegrationMappingByIdRequestBody;
    readonly headers?: UpdateSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteSlackIntegrationMappingByIdOptionals {
    readonly headers: DeleteSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteSlackIntegrationMappingByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteSlackIntegrationMappingByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteSlackIntegrationMappingByIdOptionalsInput {
    readonly headers?: DeleteSlackIntegrationMappingByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetSlackIntegrationMappingQueryParamsPartnerItemTypeField = 'channel';
export type GetSlackIntegrationMappingQueryParamsBoxItemTypeField = 'folder';
export interface GetSlackIntegrationMappingQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * Mapped item type, for which the mapping should be returned */
    readonly partnerItemType?: GetSlackIntegrationMappingQueryParamsPartnerItemTypeField;
    /**
     * ID of the mapped item, for which the mapping should be returned */
    readonly partnerItemId?: string;
    /**
     * Box item ID, for which the mappings should be returned */
    readonly boxItemId?: string;
    /**
     * Box item type, for which the mappings should be returned */
    readonly boxItemType?: GetSlackIntegrationMappingQueryParamsBoxItemTypeField;
    /**
     * Whether the mapping has been manually created */
    readonly isManuallyCreated?: boolean;
}
export declare class GetSlackIntegrationMappingHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSlackIntegrationMappingHeaders, 'extraHeaders'> & Partial<Pick<GetSlackIntegrationMappingHeaders, 'extraHeaders'>>);
}
export interface GetSlackIntegrationMappingHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateSlackIntegrationMappingHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateSlackIntegrationMappingHeaders, 'extraHeaders'> & Partial<Pick<CreateSlackIntegrationMappingHeaders, 'extraHeaders'>>);
}
export interface CreateSlackIntegrationMappingHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateSlackIntegrationMappingByIdRequestBody {
    readonly boxItem?: IntegrationMappingBoxItemSlack;
    readonly options?: IntegrationMappingSlackOptions;
    readonly rawData?: SerializedData;
}
export declare class UpdateSlackIntegrationMappingByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateSlackIntegrationMappingByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteSlackIntegrationMappingByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteSlackIntegrationMappingByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class IntegrationMappingsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<IntegrationMappingsManager, 'networkSession' | 'getSlackIntegrationMapping' | 'createSlackIntegrationMapping' | 'updateSlackIntegrationMappingById' | 'deleteSlackIntegrationMappingById'> & Partial<Pick<IntegrationMappingsManager, 'networkSession'>>);
    /**
     * Lists [Slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack) in a users' enterprise.
     *
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {GetSlackIntegrationMappingQueryParams} queryParams Query parameters of getSlackIntegrationMapping method
     * @param {GetSlackIntegrationMappingHeadersInput} headersInput Headers of getSlackIntegrationMapping method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<IntegrationMappings>}
     */
    getSlackIntegrationMapping(queryParams?: GetSlackIntegrationMappingQueryParams, headersInput?: GetSlackIntegrationMappingHeadersInput, cancellationToken?: CancellationToken): Promise<IntegrationMappings>;
    /**
     * Creates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
     * by mapping a Slack channel to a Box item.
     *
     * You need Admin or Co-Admin role to
     * use this endpoint.
     * @param {IntegrationMappingSlackCreateRequest} requestBody Request body of createSlackIntegrationMapping method
     * @param {CreateSlackIntegrationMappingOptionalsInput} optionalsInput
     * @returns {Promise<IntegrationMapping>}
     */
    createSlackIntegrationMapping(requestBody: IntegrationMappingSlackCreateRequest, optionalsInput?: CreateSlackIntegrationMappingOptionalsInput): Promise<IntegrationMapping>;
    /**
       * Updates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
       * Supports updating the Box folder ID and options.
       *
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping
      Example: "11235432"
       * @param {UpdateSlackIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<IntegrationMapping>}
       */
    updateSlackIntegrationMappingById(integrationMappingId: string, optionalsInput?: UpdateSlackIntegrationMappingByIdOptionalsInput): Promise<IntegrationMapping>;
    /**
       * Deletes a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
       *
       *
       * You need Admin or Co-Admin role to
       * use this endpoint.
       * @param {string} integrationMappingId An ID of an integration mapping
      Example: "11235432"
       * @param {DeleteSlackIntegrationMappingByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteSlackIntegrationMappingById(integrationMappingId: string, optionalsInput?: DeleteSlackIntegrationMappingByIdOptionalsInput): Promise<undefined>;
}
export interface IntegrationMappingsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val: GetSlackIntegrationMappingQueryParamsPartnerItemTypeField): SerializedData;
export declare function deserializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(val: SerializedData): GetSlackIntegrationMappingQueryParamsPartnerItemTypeField;
export declare function serializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val: GetSlackIntegrationMappingQueryParamsBoxItemTypeField): SerializedData;
export declare function deserializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(val: SerializedData): GetSlackIntegrationMappingQueryParamsBoxItemTypeField;
export declare function serializeUpdateSlackIntegrationMappingByIdRequestBody(val: UpdateSlackIntegrationMappingByIdRequestBody): SerializedData;
export declare function deserializeUpdateSlackIntegrationMappingByIdRequestBody(val: SerializedData): UpdateSlackIntegrationMappingByIdRequestBody;
