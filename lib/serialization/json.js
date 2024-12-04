"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToSerializedData = jsonToSerializedData;
exports.sdToJson = sdToJson;
exports.sdToUrlParams = sdToUrlParams;
exports.getSdValueByKey = getSdValueByKey;
exports.sdIsEmpty = sdIsEmpty;
exports.sdIsBoolean = sdIsBoolean;
exports.sdIsNumber = sdIsNumber;
exports.sdIsString = sdIsString;
exports.sdIsList = sdIsList;
exports.sdIsMap = sdIsMap;
function jsonToSerializedData(text) {
    return JSON.parse(text);
}
function sdToJson(data) {
    return JSON.stringify(data);
}
function sdToUrlParams(data) {
    if (!sdIsMap(data) && !sdIsString(data)) {
        throw new Error('Expecting an object or string as an argument for sdToUrlParams');
    }
    const dataAsMap = sdIsString(data)
        ? JSON.parse(data)
        : data;
    return new URLSearchParams(Object.fromEntries(Object.entries(dataAsMap).filter(([key, value]) => value != null))).toString();
}
function getSdValueByKey(obj, key) {
    if (sdIsMap(obj)) {
        return obj[key].toString();
    }
    return '';
}
function sdIsEmpty(data) {
    return data == null;
}
function sdIsBoolean(data) {
    return typeof data == 'boolean';
}
function sdIsNumber(data) {
    return typeof data == 'number';
}
function sdIsString(data) {
    return typeof data == 'string';
}
function sdIsList(data) {
    return Array.isArray(data);
}
function sdIsMap(data) {
    return typeof data === 'object' && data != null && !Array.isArray(data);
}
//# sourceMappingURL=json.js.map