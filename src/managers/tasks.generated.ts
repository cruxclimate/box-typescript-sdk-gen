import { Tasks } from "../schemas.generated.js";
import { deserializeTasks } from "../schemas.generated.js";
import { serializeTasks } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Task } from "../schemas.generated.js";
import { deserializeTask } from "../schemas.generated.js";
import { serializeTask } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type TasksManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type PostTasksRequestBodyArgItemFieldTypeField = "file";
export interface PostTasksRequestBodyArgItemField {
    readonly id: string;
    readonly type: PostTasksRequestBodyArgItemFieldTypeField;
}
export type PostTasksRequestBodyArgActionField = "review" | "complete";
export type PostTasksRequestBodyArgCompletionRuleField = "all_assignees" | "any_assignee";
export interface PostTasksRequestBodyArg {
    readonly item: PostTasksRequestBodyArgItemField;
    readonly action?: PostTasksRequestBodyArgActionField;
    readonly message?: string;
    readonly dueAt?: string;
    readonly completionRule?: PostTasksRequestBodyArgCompletionRuleField;
}
export type PutTasksIdRequestBodyArgActionField = "review" | "complete";
export type PutTasksIdRequestBodyArgCompletionRuleField = "all_assignees" | "any_assignee";
export interface PutTasksIdRequestBodyArg {
    readonly action?: PutTasksIdRequestBodyArgActionField;
    readonly message?: string;
    readonly dueAt?: string;
    readonly completionRule?: PutTasksIdRequestBodyArgCompletionRuleField;
}
export class TasksManager {
    readonly auth!: TasksManagerAuthField;
    constructor(fields: Omit<TasksManager, "getFilesIdTasks" | "postTasks" | "getTasksId" | "putTasksId" | "deleteTasksId">) {
        Object.assign(this, fields);
    }
    async getFilesIdTasks(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/tasks") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTasks(await deserializeJson(response.text));
    }
    async postTasks(requestBody: PostTasksRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTask(await deserializeJson(response.text));
    }
    async getTasksId(taskId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTask(await deserializeJson(response.text));
    }
    async putTasksId(taskId: string, requestBody: PutTasksIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTask(await deserializeJson(response.text));
    }
    async deleteTasksId(taskId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
