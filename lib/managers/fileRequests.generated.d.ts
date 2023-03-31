import { FileRequestUpdateRequest } from "../schemas.generated.js";
import { FileRequestCopyRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type FileRequestsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface UpdateFileRequestByIdOptionsArg {
    readonly ifMatch?: string;
}
export declare class FileRequestsManager {
    readonly auth: FileRequestsManagerAuthField;
    constructor(fields: Omit<FileRequestsManager, "getFileRequestById" | "updateFileRequestById" | "deleteFileRequestById" | "createFileRequestCopy">);
    getFileRequestById(fileRequestId: string): Promise<any>;
    updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, options?: UpdateFileRequestByIdOptionsArg): Promise<any>;
    deleteFileRequestById(fileRequestId: string): Promise<any>;
    createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest): Promise<any>;
}
