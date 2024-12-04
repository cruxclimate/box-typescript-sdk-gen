import { SerializedData } from '../serialization/json.js';
import { GeneratedCodeError } from '../internal/errors.js';
export declare class BoxSdkError extends GeneratedCodeError {
    readonly timestamp?: string;
    readonly error?: Error;
    constructor(fields: Pick<BoxSdkError, 'message' | 'timestamp' | 'error'>);
}
export interface RequestInfo {
    readonly method: string;
    readonly url: string;
    readonly queryParams: {
        readonly [key: string]: string;
    };
    readonly headers: {
        readonly [key: string]: string;
    };
    readonly body?: any;
}
export interface ResponseInfo {
    readonly statusCode: number;
    readonly headers: {
        readonly [key: string]: string;
    };
    readonly body?: SerializedData;
    readonly rawBody?: string;
    readonly code?: string;
    readonly contextInfo?: {
        readonly [key: string]: any;
    };
    readonly requestId?: string;
    readonly helpUrl?: string;
}
export declare class BoxApiError extends BoxSdkError {
    readonly requestInfo: RequestInfo;
    readonly responseInfo: ResponseInfo;
    constructor(fields: Pick<BoxApiError, 'message' | 'timestamp' | 'error' | 'requestInfo' | 'responseInfo'>);
}
