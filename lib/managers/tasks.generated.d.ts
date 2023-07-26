import { Tasks } from "../schemas.generated.js";
import { Task } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type CreateTaskRequestBodyArgItemFieldTypeField = "file";
export interface CreateTaskRequestBodyArgItemField {
    readonly id: string;
    readonly type: CreateTaskRequestBodyArgItemFieldTypeField;
}
export type CreateTaskRequestBodyArgActionField = "review" | "complete";
export type CreateTaskRequestBodyArgCompletionRuleField = "all_assignees" | "any_assignee";
export interface CreateTaskRequestBodyArg {
    readonly item: CreateTaskRequestBodyArgItemField;
    readonly action?: CreateTaskRequestBodyArgActionField;
    readonly message?: string;
    readonly dueAt?: string;
    readonly completionRule?: CreateTaskRequestBodyArgCompletionRuleField;
}
export type UpdateTaskByIdRequestBodyArgActionField = "review" | "complete";
export type UpdateTaskByIdRequestBodyArgCompletionRuleField = "all_assignees" | "any_assignee";
export interface UpdateTaskByIdRequestBodyArg {
    readonly action?: UpdateTaskByIdRequestBodyArgActionField;
    readonly message?: string;
    readonly dueAt?: string;
    readonly completionRule?: UpdateTaskByIdRequestBodyArgCompletionRuleField;
}
export declare class TasksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TasksManager, "getFileTasks" | "createTask" | "getTaskById" | "updateTaskById" | "deleteTaskById">);
    getFileTasks(fileId: string): Promise<Tasks>;
    createTask(requestBody: CreateTaskRequestBodyArg): Promise<Task>;
    getTaskById(taskId: string): Promise<Task>;
    updateTaskById(taskId: string, requestBody: UpdateTaskByIdRequestBodyArg): Promise<Task>;
    deleteTaskById(taskId: string): Promise<any>;
}
export declare function serializeCreateTaskRequestBodyArgItemFieldTypeField(val: CreateTaskRequestBodyArgItemFieldTypeField): Json;
export declare function deserializeCreateTaskRequestBodyArgItemFieldTypeField(val: any): CreateTaskRequestBodyArgItemFieldTypeField;
export declare function serializeCreateTaskRequestBodyArgItemField(val: CreateTaskRequestBodyArgItemField): Json;
export declare function deserializeCreateTaskRequestBodyArgItemField(val: any): CreateTaskRequestBodyArgItemField;
export declare function serializeCreateTaskRequestBodyArgActionField(val: CreateTaskRequestBodyArgActionField): Json;
export declare function deserializeCreateTaskRequestBodyArgActionField(val: any): CreateTaskRequestBodyArgActionField;
export declare function serializeCreateTaskRequestBodyArgCompletionRuleField(val: CreateTaskRequestBodyArgCompletionRuleField): Json;
export declare function deserializeCreateTaskRequestBodyArgCompletionRuleField(val: any): CreateTaskRequestBodyArgCompletionRuleField;
export declare function serializeCreateTaskRequestBodyArg(val: CreateTaskRequestBodyArg): Json;
export declare function deserializeCreateTaskRequestBodyArg(val: any): CreateTaskRequestBodyArg;
export declare function serializeUpdateTaskByIdRequestBodyArgActionField(val: UpdateTaskByIdRequestBodyArgActionField): Json;
export declare function deserializeUpdateTaskByIdRequestBodyArgActionField(val: any): UpdateTaskByIdRequestBodyArgActionField;
export declare function serializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val: UpdateTaskByIdRequestBodyArgCompletionRuleField): Json;
export declare function deserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val: any): UpdateTaskByIdRequestBodyArgCompletionRuleField;
export declare function serializeUpdateTaskByIdRequestBodyArg(val: UpdateTaskByIdRequestBodyArg): Json;
export declare function deserializeUpdateTaskByIdRequestBodyArg(val: any): UpdateTaskByIdRequestBodyArg;
