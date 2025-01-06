"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const aiItemBase_generated_js_1 = require("../schemas/aiItemBase.generated.js");
const aiTextGen_generated_js_1 = require("../schemas/aiTextGen.generated.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_6 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testAskAISingleItem', function testAskAISingleItem() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToAsk = yield (0, commons_generated_js_2.uploadNewFile)();
        const response = yield exports.client.ai.createAiAsk({
            mode: 'single_item_qa',
            prompt: 'which direction sun rises',
            items: [
                new aiItemBase_generated_js_1.AiItemBase({
                    id: fileToAsk.id,
                    type: 'file',
                    content: 'Sun rises in the East',
                }),
            ],
        });
        if (!response.answer.includes('East')) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(fileToAsk.id);
    });
});
test('testAskAIMultipleItems', function testAskAIMultipleItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToAsk1 = yield (0, commons_generated_js_2.uploadNewFile)();
        const fileToAsk2 = yield (0, commons_generated_js_2.uploadNewFile)();
        const response = yield exports.client.ai.createAiAsk({
            mode: 'multiple_item_qa',
            prompt: 'Which direction sun rises?',
            items: [
                new aiItemBase_generated_js_1.AiItemBase({
                    id: fileToAsk1.id,
                    type: 'file',
                    content: 'Earth goes around the sun',
                }),
                new aiItemBase_generated_js_1.AiItemBase({
                    id: fileToAsk2.id,
                    type: 'file',
                    content: 'Sun rises in the East in the morning',
                }),
            ],
        });
        if (!response.answer.includes('East')) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(fileToAsk1.id);
        yield exports.client.files.deleteFileById(fileToAsk2.id);
    });
});
test('testAITextGenWithDialogueHistory', function testAITextGenWithDialogueHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToAsk = yield (0, commons_generated_js_2.uploadNewFile)();
        const response = yield exports.client.ai.createAiTextGen({
            prompt: 'Parapharse the document.s',
            items: [
                new aiTextGen_generated_js_1.AiTextGenItemsField({
                    id: fileToAsk.id,
                    type: 'file',
                    content: 'The Earth goes around the sun. Sun rises in the East in the morning.',
                }),
            ],
            dialogueHistory: [
                {
                    prompt: 'What does the earth go around?',
                    answer: 'The sun',
                    createdAt: (0, utils_js_4.dateTimeFromString)('2021-01-01T00:00:00Z'),
                },
                {
                    prompt: 'On Earth, where does the sun rise?',
                    answer: 'East',
                    createdAt: (0, utils_js_4.dateTimeFromString)('2021-01-01T00:00:00Z'),
                },
            ],
        });
        if (!response.answer.includes('sun')) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(fileToAsk.id);
    });
});
test('testGettingAIAskAgentConfig', function testGettingAIAskAgentConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const aiAskConfig = yield exports.client.ai.getAiAgentDefaultConfig({
            mode: 'ask',
            language: 'en-US',
        });
        if (!(aiAskConfig.type == 'ai_agent_ask')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicText.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicText.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiAskConfig.basicText.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicText.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicTextMulti.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicTextMulti.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiAskConfig.basicTextMulti.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.basicTextMulti.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiAskConfig.longText.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.embeddings.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.embeddings.strategy.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longText.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiAskConfig.longTextMulti.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.embeddings.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.embeddings.strategy.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiAskConfig.longTextMulti.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testGettingAITextGenAgentConfig', function testGettingAITextGenAgentConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const aiTextGenConfig = yield exports.client.ai.getAiAgentDefaultConfig({
            mode: 'text_gen',
            language: 'en-US',
        });
        if (!(aiTextGenConfig.type == 'ai_agent_text_gen')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.llmEndpointParams == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.promptTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!(aiTextGenConfig.basicGen.numTokensForCompletion > -1)) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.contentTemplate == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.embeddings.model == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(aiTextGenConfig.basicGen.embeddings.strategy.id == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testAIExtract', function testAIExtract() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: ''.concat((0, utils_js_1.getUuid)(), '.txt'),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.stringToByteStream)('My name is John Doe. I live in San Francisco. I was born in 1990. I work at Box.'),
        });
        const file = uploadedFiles.entries[0];
        yield (0, utils_js_3.delayInSeconds)(5);
        const response = yield exports.client.ai.createAiExtract({
            prompt: 'firstName, lastName, location, yearOfBirth, company',
            items: [new aiItemBase_generated_js_1.AiItemBase({ id: file.id })],
        });
        const expectedResponse = '{"firstName": "John", "lastName": "Doe", "location": "San Francisco", "yearOfBirth": "1990", "company": "Box"}';
        if (!(response.answer == expectedResponse)) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testAIExtractStructuredWithFields', function testAIExtractStructuredWithFields() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: ''.concat((0, utils_js_1.getUuid)(), '.txt'),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.stringToByteStream)('My name is John Doe. I was born in 4th July 1990. I am 34 years old. My hobby is guitar.'),
        });
        const file = uploadedFiles.entries[0];
        yield (0, utils_js_3.delayInSeconds)(5);
        const response = yield exports.client.ai.createAiExtractStructured({
            fields: [
                {
                    key: 'firstName',
                    displayName: 'First name',
                    description: 'Person first name',
                    prompt: 'What is the your first name?',
                    type: 'string',
                },
                {
                    key: 'lastName',
                    displayName: 'Last name',
                    description: 'Person last name',
                    prompt: 'What is the your last name?',
                    type: 'string',
                },
                {
                    key: 'dateOfBirth',
                    displayName: 'Birth date',
                    description: 'Person date of birth',
                    prompt: 'What is the date of your birth?',
                    type: 'date',
                },
                {
                    key: 'age',
                    displayName: 'Age',
                    description: 'Person age',
                    prompt: 'How old are you?',
                    type: 'float',
                },
                {
                    key: 'hobby',
                    displayName: 'Hobby',
                    description: 'Person hobby',
                    prompt: 'What is your hobby?',
                    type: 'multiSelect',
                    options: [
                        { key: 'guitar' },
                        { key: 'books' },
                    ],
                },
            ],
            items: [new aiItemBase_generated_js_1.AiItemBase({ id: file.id })],
        });
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'firstName')) ==
            'John')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'lastName')) ==
            'Doe')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'dateOfBirth')) == '1990-07-04')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'age')) == '34')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'hobby')) ==
            ['guitar'].map(utils_js_6.toString).join(','))) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testAIExtractStructuredWithMetadataTemplate', function testAIExtractStructuredWithMetadataTemplate() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: ''.concat((0, utils_js_1.getUuid)(), '.txt'),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.stringToByteStream)('My name is John Doe. I was born in 4th July 1990. I am 34 years old. My hobby is guitar.'),
        });
        const file = uploadedFiles.entries[0];
        yield (0, utils_js_3.delayInSeconds)(5);
        const templateKey = ''.concat('key', (0, utils_js_1.getUuid)());
        const template = yield exports.client.metadataTemplates.createMetadataTemplate({
            scope: 'enterprise',
            displayName: templateKey,
            templateKey: templateKey,
            fields: [
                {
                    key: 'firstName',
                    displayName: 'First name',
                    description: 'Person first name',
                    type: 'string',
                },
                {
                    key: 'lastName',
                    displayName: 'Last name',
                    description: 'Person last name',
                    type: 'string',
                },
                {
                    key: 'dateOfBirth',
                    displayName: 'Birth date',
                    description: 'Person date of birth',
                    type: 'date',
                },
                {
                    key: 'age',
                    displayName: 'Age',
                    description: 'Person age',
                    type: 'float',
                },
                {
                    key: 'hobby',
                    displayName: 'Hobby',
                    description: 'Person hobby',
                    type: 'multiSelect',
                    options: [
                        {
                            key: 'guitar',
                        },
                        {
                            key: 'books',
                        },
                    ],
                },
            ],
        });
        const response = yield exports.client.ai.createAiExtractStructured({
            metadataTemplate: {
                templateKey: templateKey,
                scope: 'enterprise',
            },
            items: [new aiItemBase_generated_js_1.AiItemBase({ id: file.id })],
        });
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'firstName')) ==
            'John')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'lastName')) ==
            'Doe')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'dateOfBirth')) == '1990-07-04T00:00:00Z')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'age')) == '34')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'hobby')) ==
            ['guitar'].map(utils_js_6.toString).join(','))) {
            throw new Error('Assertion failed');
        }
        yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=ai.generated.test.js.map