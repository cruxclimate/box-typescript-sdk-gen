"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxApiError = exports.BoxSdkError = void 0;
const errors_js_1 = require("../internal/errors.js");
class BoxSdkError extends errors_js_1.GeneratedCodeError {
    constructor(fields) {
        super(fields);
        this.name = 'BoxSdkError';
        Object.setPrototypeOf(this, BoxSdkError.prototype);
    }
}
exports.BoxSdkError = BoxSdkError;
class BoxApiError extends BoxSdkError {
    constructor(fields) {
        super(fields);
        this.name = 'BoxApiError';
        Object.setPrototypeOf(this, BoxApiError.prototype);
    }
}
exports.BoxApiError = BoxApiError;
//# sourceMappingURL=errors.js.map