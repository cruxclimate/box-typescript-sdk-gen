import { UploadSession } from "../schemas.generated.js";
import { deserializeUploadSession } from "../schemas.generated.js";
import { serializeUploadSession } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { UploadedPart } from "../schemas.generated.js";
import { deserializeUploadedPart } from "../schemas.generated.js";
import { serializeUploadedPart } from "../schemas.generated.js";
import { UploadParts } from "../schemas.generated.js";
import { deserializeUploadParts } from "../schemas.generated.js";
import { serializeUploadParts } from "../schemas.generated.js";
import { Files } from "../schemas.generated.js";
import { deserializeFiles } from "../schemas.generated.js";
import { serializeFiles } from "../schemas.generated.js";
import { UploadPart } from "../schemas.generated.js";
import { deserializeUploadPart } from "../schemas.generated.js";
import { serializeUploadPart } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type ChunkedUploadsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface CreateFileUploadSessionRequestBodyArg {
    readonly folderId: string;
    readonly fileSize: number;
    readonly fileName: string;
}
export interface CreateFileUploadSessionForExistingFileRequestBodyArg {
    readonly fileSize: number;
    readonly fileName?: string;
}
export interface GetFileUploadSessionPartsOptionsArg {
    readonly offset?: number;
    readonly limit?: number;
}
export interface CreateFileUploadSessionCommitRequestBodyArg {
    readonly parts: readonly UploadPart[];
}
export interface CreateFileUploadSessionCommitOptionsArg {
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
}
export class ChunkedUploadsManager {
    readonly auth!: ChunkedUploadsManagerAuthField;
    constructor(fields: Omit<ChunkedUploadsManager, "createFileUploadSession" | "createFileUploadSessionForExistingFile" | "getFileUploadSessionById" | "deleteFileUploadSessionById" | "getFileUploadSessionParts" | "createFileUploadSessionCommit">) {
        Object.assign(this, fields);
    }
    async createFileUploadSession(requestBody: CreateFileUploadSessionRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadSession(deserializeJSON(response.text) as JSON);
    }
    async createFileUploadSessionForExistingFile(fileId: string, requestBody: CreateFileUploadSessionForExistingFileRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/upload_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadSession(deserializeJSON(response.text) as JSON);
    }
    async getFileUploadSessionById(uploadSessionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions/", uploadSessionId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadSession(deserializeJSON(response.text) as JSON);
    }
    async deleteFileUploadSessionById(uploadSessionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions/", uploadSessionId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getFileUploadSessionParts(uploadSessionId: string, options: GetFileUploadSessionPartsOptionsArg = {} satisfies GetFileUploadSessionPartsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions/", uploadSessionId, "/parts") as string, { method: "GET", params: { ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadParts(deserializeJSON(response.text) as JSON);
    }
    async createFileUploadSessionCommit(uploadSessionId: string, digest: string, requestBody: CreateFileUploadSessionCommitRequestBodyArg, options: CreateFileUploadSessionCommitOptionsArg = {} satisfies CreateFileUploadSessionCommitOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions/", uploadSessionId, "/commit") as string, { method: "POST", headers: { ["digest"]: digest, ["if-match"]: options.ifMatch, ["if-none-match"]: options.ifNoneMatch }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFiles(deserializeJSON(response.text) as JSON);
    }
}
