import { AiItemBase } from './aiItemBase.generated.js';
import { AiDialogueHistory } from './aiDialogueHistory.generated.js';
import { AiAgentAsk } from './aiAgentAsk.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAskModeField = 'multiple_item_qa' | 'single_item_qa';
export interface AiAsk {
    /**
     * The mode specifies if this request is for a single or multiple items. If you select `single_item_qa` the `items` array can have one element only. Selecting `multiple_item_qa` allows you to provide up to 25 items. */
    readonly mode: AiAskModeField;
    /**
     * The prompt provided by the client to be answered by the LLM. The prompt's length is limited to 10000 characters. */
    readonly prompt: string;
    /**
     * The items to be processed by the LLM, often files.
     *
     * **Note**: Box AI handles documents with text representations up to 1MB in size, or a maximum of 25 files, whichever comes first.
     * If the file size exceeds 1MB, the first 1MB of text representation will be processed.
     * If you set `mode` parameter to `single_item_qa`, the `items` array can have one element only.  */
    readonly items: readonly AiItemBase[];
    /**
     * The history of prompts and answers previously passed to the LLM. This provides additional context to the LLM in generating the response. */
    readonly dialogueHistory?: readonly AiDialogueHistory[];
    /**
     * A flag to indicate whether citations should be returned. */
    readonly includeCitations?: boolean;
    readonly aiAgent?: AiAgentAsk;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAskModeField(val: AiAskModeField): SerializedData;
export declare function deserializeAiAskModeField(val: SerializedData): AiAskModeField;
export declare function serializeAiAsk(val: AiAsk): SerializedData;
export declare function deserializeAiAsk(val: SerializedData): AiAsk;
