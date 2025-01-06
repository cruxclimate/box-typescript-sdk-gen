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
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testTransferUserContent', function testTransferUserContent() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUserName = (0, utils_js_1.getUuid)();
        const newUser = yield exports.client.users.createUser({
            name: newUserName,
            isPlatformAccessOnly: true,
        });
        const currentUser = yield exports.client.users.getUserMe();
        const transferedFolder = yield exports.client.transfer.transferOwnedFolder(newUser.id, {
            ownedBy: {
                id: currentUser.id,
            },
        }, {
            queryParams: { notify: false },
        });
        if (!(transferedFolder.ownedBy.id == currentUser.id)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(transferedFolder.id, {
            queryParams: { recursive: true },
        });
        yield exports.client.users.deleteUserById(newUser.id, {
            queryParams: {
                notify: false,
                force: true,
            },
        });
    });
});
//# sourceMappingURL=transfer.generated.test.js.map