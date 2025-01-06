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
const integrationMappingPartnerItemSlack_generated_js_1 = require("../schemas/integrationMappingPartnerItemSlack.generated.js");
const integrationMappingBoxItemSlack_generated_js_1 = require("../schemas/integrationMappingBoxItemSlack.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testIntegrationMappings', function testIntegrationMappings() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield exports.client.folders.createFolder({
            name: (0, utils_js_1.getUuid)(),
            parent: { id: '0' },
        });
        const slackOrgId = '1';
        const partnerItemId = '1';
        const userId = (0, utils_js_2.getEnvVar)('USER_ID');
        const userClient = (0, commons_generated_js_2.getDefaultClientWithUserSubject)(userId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield userClient.integrationMappings.createSlackIntegrationMapping({
                partnerItem: new integrationMappingPartnerItemSlack_generated_js_1.IntegrationMappingPartnerItemSlack({
                    id: partnerItemId,
                    slackOrgId: slackOrgId,
                }),
                boxItem: new integrationMappingBoxItemSlack_generated_js_1.IntegrationMappingBoxItemSlack({ id: folder.id }),
            });
        })).rejects.toThrow();
        const integrationMappings = yield userClient.integrationMappings.getSlackIntegrationMapping();
        if (!(integrationMappings.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=integrationMappings.generated.test.js.map