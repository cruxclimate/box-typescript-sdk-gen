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
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testWebhooksCRUD', function testWebhooksCRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield exports.client.folders.createFolder({
            name: (0, utils_js_1.getUuid)(),
            parent: { id: '0' },
        });
        const webhook = yield exports.client.webhooks.createWebhook({
            target: {
                id: folder.id,
                type: 'folder',
            },
            address: 'https://example.com/new-webhook',
            triggers: ['FILE.UPLOADED'],
        });
        if (!(webhook.target.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(webhook.target.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.triggers.length == ['FILE.UPLOADED'].length)) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.address == 'https://example.com/new-webhook')) {
            throw new Error('Assertion failed');
        }
        const webhooks = yield exports.client.webhooks.getWebhooks();
        if (!(webhooks.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const webhookFromApi = yield exports.client.webhooks.getWebhookById(webhook.id);
        if (!(webhook.id == webhookFromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.target.id == webhookFromApi.target.id)) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.address == webhookFromApi.address)) {
            throw new Error('Assertion failed');
        }
        const updatedWebhook = yield exports.client.webhooks.updateWebhookById(webhook.id, {
            requestBody: {
                address: 'https://example.com/updated-webhook',
            },
        });
        if (!(updatedWebhook.id == webhook.id)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedWebhook.address == 'https://example.com/updated-webhook')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.webhooks.deleteWebhookById(webhook.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.webhooks.deleteWebhookById(webhook.id);
        })).rejects.toThrow();
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=webhooks.generated.test.js.map