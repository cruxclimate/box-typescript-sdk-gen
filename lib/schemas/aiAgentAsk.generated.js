"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiAgentAsk = void 0;
exports.serializeAiAgentAskTypeField = serializeAiAgentAskTypeField;
exports.deserializeAiAgentAskTypeField = deserializeAiAgentAskTypeField;
exports.serializeAiAgentAsk = serializeAiAgentAsk;
exports.deserializeAiAgentAsk = deserializeAiAgentAsk;
exports.serializeAiAgentAskInput = serializeAiAgentAskInput;
exports.deserializeAiAgentAskInput = deserializeAiAgentAskInput;
const aiAgentLongTextTool_generated_js_1 = require("./aiAgentLongTextTool.generated.js");
const aiAgentLongTextTool_generated_js_2 = require("./aiAgentLongTextTool.generated.js");
const aiAgentBasicTextTool_generated_js_1 = require("./aiAgentBasicTextTool.generated.js");
const aiAgentBasicTextTool_generated_js_2 = require("./aiAgentBasicTextTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
class AiAgentAsk {
    constructor(fields) {
        /**
         * The type of AI agent used to handle queries. */
        this.type = 'ai_agent_ask';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.longText !== undefined) {
            this.longText = fields.longText;
        }
        if (fields.basicText !== undefined) {
            this.basicText = fields.basicText;
        }
        if (fields.longTextMulti !== undefined) {
            this.longTextMulti = fields.longTextMulti;
        }
        if (fields.basicTextMulti !== undefined) {
            this.basicTextMulti = fields.basicTextMulti;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AiAgentAsk = AiAgentAsk;
function serializeAiAgentAskTypeField(val) {
    return val;
}
function deserializeAiAgentAskTypeField(val) {
    if (val == 'ai_agent_ask') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AiAgentAskTypeField" });
}
function serializeAiAgentAsk(val) {
    return {
        ['type']: serializeAiAgentAskTypeField(val.type),
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiAgentLongTextTool_generated_js_1.serializeAiAgentLongTextTool)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiAgentBasicTextTool_generated_js_1.serializeAiAgentBasicTextTool)(val.basicText),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : (0, aiAgentLongTextTool_generated_js_1.serializeAiAgentLongTextTool)(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : (0, aiAgentBasicTextTool_generated_js_1.serializeAiAgentBasicTextTool)(val.basicTextMulti),
    };
}
function deserializeAiAgentAsk(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiAgentAsk"' });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiAgentAsk" to be defined',
        });
    }
    const type = deserializeAiAgentAskTypeField(val.type);
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiAgentLongTextTool_generated_js_2.deserializeAiAgentLongTextTool)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiAgentBasicTextTool_generated_js_2.deserializeAiAgentBasicTextTool)(val.basic_text);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : (0, aiAgentLongTextTool_generated_js_2.deserializeAiAgentLongTextTool)(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : (0, aiAgentBasicTextTool_generated_js_2.deserializeAiAgentBasicTextTool)(val.basic_text_multi);
    return {
        type: type,
        longText: longText,
        basicText: basicText,
        longTextMulti: longTextMulti,
        basicTextMulti: basicTextMulti,
    };
}
function serializeAiAgentAskInput(val) {
    return {
        ['type']: val.type == void 0 ? val.type : serializeAiAgentAskTypeField(val.type),
        ['long_text']: val.longText == void 0
            ? val.longText
            : (0, aiAgentLongTextTool_generated_js_1.serializeAiAgentLongTextTool)(val.longText),
        ['basic_text']: val.basicText == void 0
            ? val.basicText
            : (0, aiAgentBasicTextTool_generated_js_1.serializeAiAgentBasicTextTool)(val.basicText),
        ['long_text_multi']: val.longTextMulti == void 0
            ? val.longTextMulti
            : (0, aiAgentLongTextTool_generated_js_1.serializeAiAgentLongTextTool)(val.longTextMulti),
        ['basic_text_multi']: val.basicTextMulti == void 0
            ? val.basicTextMulti
            : (0, aiAgentBasicTextTool_generated_js_1.serializeAiAgentBasicTextTool)(val.basicTextMulti),
    };
}
function deserializeAiAgentAskInput(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiAgentAskInput"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeAiAgentAskTypeField(val.type);
    const longText = val.long_text == void 0
        ? void 0
        : (0, aiAgentLongTextTool_generated_js_2.deserializeAiAgentLongTextTool)(val.long_text);
    const basicText = val.basic_text == void 0
        ? void 0
        : (0, aiAgentBasicTextTool_generated_js_2.deserializeAiAgentBasicTextTool)(val.basic_text);
    const longTextMulti = val.long_text_multi == void 0
        ? void 0
        : (0, aiAgentLongTextTool_generated_js_2.deserializeAiAgentLongTextTool)(val.long_text_multi);
    const basicTextMulti = val.basic_text_multi == void 0
        ? void 0
        : (0, aiAgentBasicTextTool_generated_js_2.deserializeAiAgentBasicTextTool)(val.basic_text_multi);
    return {
        type: type,
        longText: longText,
        basicText: basicText,
        longTextMulti: longTextMulti,
        basicTextMulti: basicTextMulti,
    };
}
//# sourceMappingURL=aiAgentAsk.generated.js.map