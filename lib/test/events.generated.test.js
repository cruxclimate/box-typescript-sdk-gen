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
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testEvents', function testEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield exports.client.events.getEvents();
        if (!(events.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const firstEvent = events.entries[0];
        if (!((0, utils_js_2.toString)(firstEvent.createdBy.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!!((0, utils_js_2.toString)(firstEvent.eventType) == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testEventUpload', function testEventUpload() {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield exports.client.events.getEvents({
            streamType: 'admin_logs',
            eventType: ['UPLOAD'],
        });
        if (!(events.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const firstEvent = events.entries[0];
        if (!((0, utils_js_2.toString)(firstEvent.eventType) == 'UPLOAD')) {
            throw new Error('Assertion failed');
        }
        const source = firstEvent.source;
        if (!((0, utils_js_2.toString)(source.itemType) == 'file' ||
            (0, utils_js_2.toString)(source.itemType) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!!(source.itemId == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(source.itemName == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testEventDeleteUser', function testEventDeleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield exports.client.events.getEvents({
            streamType: 'admin_logs',
            eventType: ['DELETE_USER'],
        });
        if (!(events.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const firstEvent = events.entries[0];
        if (!((0, utils_js_2.toString)(firstEvent.eventType) == 'DELETE_USER')) {
            throw new Error('Assertion failed');
        }
        const source = firstEvent.source;
        if (!((0, utils_js_2.toString)(source.type) == 'user')) {
            throw new Error('Assertion failed');
        }
        if (!!(source.id == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testEventSourceFileOrFolder', function testEventSourceFileOrFolder() {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield exports.client.events.getEvents({
            streamType: 'changes',
        });
        if (!(events.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const firstEvent = events.entries[0];
        const source = firstEvent.source;
        if (!((0, utils_js_2.toString)(source.type) == 'file' ||
            (0, utils_js_2.toString)(source.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!!(source.id == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testGetEventsWithLongPolling', function testGetEventsWithLongPolling() {
    return __awaiter(this, void 0, void 0, function* () {
        const servers = yield exports.client.events.getEventsWithLongPolling();
        if (!(servers.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const server = servers.entries[0];
        if (!((0, utils_js_2.toString)(server.type) == 'realtime_server')) {
            throw new Error('Assertion failed');
        }
        if (!!(server.url == '')) {
            throw new Error('Assertion failed');
        }
    });
});
test('testGetEventsWithDateFilters', function testGetEventsWithDateFilters() {
    return __awaiter(this, void 0, void 0, function* () {
        const createdAfterDate = (0, utils_js_1.dateTimeFromString)('2024-06-09T00:00:00Z');
        const createdBeforeDate = (0, utils_js_1.dateTimeFromString)('2025-06-09T00:00:00Z');
        const servers = yield exports.client.events.getEvents({
            streamType: 'admin_logs',
            limit: 1,
            createdAfter: createdAfterDate,
            createdBefore: createdBeforeDate,
        });
        if (!(servers.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=events.generated.test.js.map