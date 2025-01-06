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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var _Hash_hash;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = exports.DateTime = exports.Date = exports.Buffer = void 0;
exports.isBrowser = isBrowser;
exports.getUuid = getUuid;
exports.decodeBase64 = decodeBase64;
exports.hexToBase64 = hexToBase64;
exports.dateFromString = dateFromString;
exports.deserializeDate = dateFromString;
exports.dateToString = dateToString;
exports.serializeDate = dateToString;
exports.dateTimeFromString = dateTimeFromString;
exports.deserializeDateTime = dateTimeFromString;
exports.dateTimeToString = dateTimeToString;
exports.serializeDateTime = dateTimeToString;
exports.epochSecondsToDateTime = epochSecondsToDateTime;
exports.dateTimeToEpochSeconds = dateTimeToEpochSeconds;
exports.hexStrToBase64 = hexStrToBase64;
exports.getEnvVar = getEnvVar;
exports.generateByteBuffer = generateByteBuffer;
exports.generateByteStreamFromBuffer = generateByteStreamFromBuffer;
exports.generateByteStream = generateByteStream;
exports.bufferEquals = bufferEquals;
exports.bufferLength = bufferLength;
exports.decodeBase64ByteStream = decodeBase64ByteStream;
exports.stringToByteStream = stringToByteStream;
exports.readByteStream = readByteStream;
exports.iterateChunks = iterateChunks;
exports.reduceIterator = reduceIterator;
exports.prepareParams = prepareParams;
exports.toString = toString;
exports.createTokenAndCancelAfter = createTokenAndCancelAfter;
exports.createJwtAssertion = createJwtAssertion;
exports.readTextFromFile = readTextFromFile;
exports.getEpochTimeInSeconds = getEpochTimeInSeconds;
exports.createAgent = createAgent;
exports.delayInSeconds = delayInSeconds;
exports.getValueFromObjectRawData = getValueFromObjectRawData;
exports.createNull = createNull;
exports.createCancellationController = createCancellationController;
exports.jsonStringifyWithEscapedUnicode = jsonStringifyWithEscapedUnicode;
exports.computeWebhookSignature = computeWebhookSignature;
exports.random = random;
const buffer_1 = require("buffer");
Object.defineProperty(exports, "Buffer", { enumerable: true, get: function () { return buffer_1.Buffer; } });
const uuid_1 = require("uuid");
const jose_1 = require("jose");
const hash_wasm_1 = require("hash-wasm");
function isBrowser() {
    return (typeof window === 'object' && typeof document === 'object' && window.crypto);
}
function getUuid() {
    return (0, uuid_1.v4)();
}
function decodeBase64(value) {
    return buffer_1.Buffer.from(value, 'base64').toString('utf8');
}
function hexToBase64(data) {
    return buffer_1.Buffer.from(data, 'hex').toString('base64');
}
// using wrappers for date/datetime because of inability to export built-in Date types
class DateWrapper {
    constructor(value) {
        this.value = value;
    }
}
exports.Date = DateWrapper;
class DateTimeWrapper {
    constructor(value) {
        this.value = value;
    }
}
exports.DateTime = DateTimeWrapper;
function dateFromString(value) {
    return new DateWrapper(new Date(value));
}
function dateToString(date) {
    return date.value.toISOString().match(/^\d{4}-\d{2}-\d{2}/)[0];
}
function dateTimeFromString(value) {
    return new DateTimeWrapper(new Date(value));
}
function dateTimeToString(dateTime) {
    return (dateTime.value
        .toISOString()
        .match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)[0] + '+00:00');
}
function epochSecondsToDateTime(seconds) {
    return new DateTimeWrapper(new Date(seconds * 1000));
}
function dateTimeToEpochSeconds(dateTime) {
    return Math.floor(dateTime.value.getTime() / 1000);
}
// Function to convert a hexadecimal string to base64
function hexStrToBase64(hex) {
    const hexString = hex.toString(); // Ensure the input is a string
    const hexBytes = new Uint8Array(hexString.length / 2);
    // Convert the hexadecimal string to bytes
    for (let i = 0; i < hexString.length; i += 2) {
        hexBytes[i / 2] = parseInt(hexString.substr(i, 2), 16);
    }
    // Encode the bytes as base64
    const base64 = btoa(String.fromCharCode.apply(null, Array.from(hexBytes)));
    return base64;
}
class Hash {
    constructor({ algorithm }) {
        _Hash_hash.set(this, void 0);
        this.algorithm = algorithm;
        if (isBrowser()) {
            __classPrivateFieldSet(this, _Hash_hash, undefined, "f");
        }
        else {
            __classPrivateFieldSet(this, _Hash_hash, require('crypto').createHash(algorithm), "f");
        }
    }
    initializeBrowserHash() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.algorithm) {
                case 'sha1':
                    __classPrivateFieldSet(this, _Hash_hash, yield (0, hash_wasm_1.createSHA1)(), "f");
                    __classPrivateFieldGet(this, _Hash_hash, "f").init();
                    break;
                default:
                    throw new Error(`Unsupported algorithm: ${this.algorithm}`);
            }
        });
    }
    updateHash(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isBrowser()) {
                if (!__classPrivateFieldGet(this, _Hash_hash, "f")) {
                    yield this.initializeBrowserHash();
                }
            }
            __classPrivateFieldGet(this, _Hash_hash, "f").update(data);
        });
    }
    digestHash() {
        return __awaiter(this, arguments, void 0, function* (encoding = 'base64') {
            if (isBrowser()) {
                if (!__classPrivateFieldGet(this, _Hash_hash, "f")) {
                    yield this.initializeBrowserHash();
                }
                const d = __classPrivateFieldGet(this, _Hash_hash, "f").digest('binary');
                switch (encoding) {
                    case 'base64':
                        return buffer_1.Buffer.from(d).toString('base64');
                    default:
                        throw new Error(`Unsupported encoding: ${encoding}`);
                }
            }
            return __classPrivateFieldGet(this, _Hash_hash, "f").digest(encoding);
        });
    }
}
exports.Hash = Hash;
_Hash_hash = new WeakMap();
function getEnvVar(name) {
    return process.env[name] || '';
}
function generateByteBuffer(size) {
    if (isBrowser()) {
        const buffer = new Uint8Array(size);
        window.crypto.getRandomValues(buffer);
        return buffer_1.Buffer.from(buffer);
    }
    const crypto = require('crypto');
    return crypto.randomBytes(size);
}
function generateByteStreamFromBuffer(buffer) {
    return isBrowser()
        ? new ReadableStream({
            start(controller) {
                controller.enqueue(new Uint8Array(buffer));
                controller.close();
            },
        })
        : require('stream').Readable.from(buffer_1.Buffer.from(buffer));
}
function generateByteStream(size) {
    return generateByteStreamFromBuffer(generateByteBuffer(size));
}
function bufferEquals(buffer1, buffer2) {
    return buffer_1.Buffer.compare(buffer1, buffer2) === 0;
}
function bufferLength(buffer) {
    return buffer.length;
}
function decodeBase64ByteStream(data) {
    return isBrowser()
        ? new ReadableStream({
            start(controller) {
                const decodedStr = atob(data);
                const buffer = new ArrayBuffer(decodedStr.length);
                const array = new Uint8Array(buffer);
                for (let i = 0; i < decodedStr.length; i++) {
                    array[i] = decodedStr.charCodeAt(i);
                }
                controller.enqueue(array);
                controller.close();
            },
        })
        : require('stream').Readable.from(buffer_1.Buffer.from(data, 'base64'));
}
function stringToByteStream(data) {
    return isBrowser()
        ? new ReadableStream({
            start(controller) {
                const buffer = new ArrayBuffer(data.length);
                const array = new Uint8Array(buffer);
                for (let i = 0; i < data.length; i++) {
                    array[i] = data.charCodeAt(i);
                }
                controller.enqueue(array);
                controller.close();
            },
        })
        : require('stream').Readable.from(buffer_1.Buffer.from(data, 'ascii'));
}
function readByteStream(byteStream) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, byteStream_1, byteStream_1_1;
        var _b, e_1, _c, _d;
        const buffers = [];
        try {
            for (_a = true, byteStream_1 = __asyncValues(byteStream); byteStream_1_1 = yield byteStream_1.next(), _b = byteStream_1_1.done, !_b; _a = true) {
                _d = byteStream_1_1.value;
                _a = false;
                const data = _d;
                buffers.push(data);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_a && !_b && (_c = byteStream_1.return)) yield _c.call(byteStream_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return buffer_1.Buffer.concat(buffers);
    });
}
function iterateChunks(stream, chunkSize, fileSize) {
    return __asyncGenerator(this, arguments, function* iterateChunks_1() {
        var _a, e_2, _b, _c;
        let buffers = [];
        let totalSize = 0;
        let consumedSize = 0;
        while (consumedSize < fileSize && !stream.readableEnded) {
            try {
                for (var _d = true, stream_1 = (e_2 = void 0, __asyncValues(stream)), stream_1_1; stream_1_1 = yield __await(stream_1.next()), _a = stream_1_1.done, !_a; _d = true) {
                    _c = stream_1_1.value;
                    _d = false;
                    const chunk = _c;
                    const data = buffer_1.Buffer.isBuffer(chunk) ? chunk : buffer_1.Buffer.from(chunk);
                    if (!buffer_1.Buffer.isBuffer(data)) {
                        throw new Error('Expecting a chunk of stream to be a Buffer');
                    }
                    consumedSize += data.length;
                    buffers.push(data);
                    totalSize += data.length;
                    if (totalSize < chunkSize) {
                        continue;
                    }
                    const buffer = buffer_1.Buffer.concat(buffers);
                    let start = 0;
                    while (totalSize >= chunkSize) {
                        yield yield __await(generateByteStreamFromBuffer(buffer.subarray(start, start + chunkSize)));
                        start += chunkSize;
                        totalSize -= chunkSize;
                    }
                    buffers = totalSize > 0 ? [buffer.subarray(start)] : [];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = stream_1.return)) yield __await(_b.call(stream_1));
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (consumedSize !== fileSize) {
            throw new Error(`Stream size ${consumedSize} does not match expected file size ${fileSize}`);
        }
        if (totalSize > 0) {
            yield yield __await(generateByteStreamFromBuffer(buffer_1.Buffer.concat(buffers)));
        }
    });
}
function reduceIterator(iterator, reducer, initialValue) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = initialValue;
        let iteration = yield iterator.next();
        while (!iteration.done) {
            result = yield reducer(result, iteration.value);
            iteration = yield iterator.next();
        }
        return result;
    });
}
function prepareParams(map) {
    if (!map || typeof map !== 'object') {
        throw new Error('Expecting obj to be an object in prepareParams');
    }
    return Object.fromEntries(Object.entries(map).filter((entry) => typeof entry[1] === 'string'));
}
function toString(value) {
    if (typeof value === 'string' || value == null) {
        return value;
    }
    return String(value);
}
/**
 * Creates a cancellation token that will be cancelled after a given delay in ms.
 *
 * @param {number} delay Delay in ms.
 * @returns {CancellationToken} Cancellation token.
 */
function createTokenAndCancelAfter(delay) {
    return AbortSignal.timeout(delay);
}
/**
 * Creates a JWT assertion.
 *
 * @param claims
 * @param key
 * @param options
 * @returns
 */
function createJwtAssertion(claims, key, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const crypto = require('crypto');
        const privateKey = crypto.createPrivateKey({
            key: key.key,
            format: 'pem',
            type: 'pkcs8',
            passphrase: key.passphrase,
        });
        const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
        const pkcs8 = yield (0, jose_1.importPKCS8)(pem, options.algorithm || 'RS256');
        let signer = new jose_1.SignJWT(claims);
        signer = options.audience ? signer.setAudience(options.audience) : signer;
        signer = options.expiresIn
            ? signer.setExpirationTime(options.expiresIn)
            : signer;
        signer = options.issuer ? signer.setIssuer(options.issuer) : signer;
        signer = options.jwtid ? signer.setJti(options.jwtid) : signer;
        signer = options.notBefore ? signer.setNotBefore(options.notBefore) : signer;
        signer = options.subject ? signer.setSubject(options.subject) : signer;
        signer = options.algorithm
            ? signer.setProtectedHeader({ alg: options.algorithm })
            : signer;
        signer = signer.setIssuedAt();
        return yield signer.sign(pkcs8);
    });
}
/**
 * Reads a text file and returns its content.
 */
function readTextFromFile(filepath) {
    return require('fs').readFileSync(filepath, 'utf8');
}
/**
 * Get current epoch time in seconds.
 */
function getEpochTimeInSeconds() {
    return Math.floor(Date.now() / 1000);
}
/**
 * Create web agent from proxy agent options.
 */
function createAgent(options, proxyConfig) {
    if (isBrowser()) {
        return undefined;
    }
    const ProxyAgent = require('proxy-agent').ProxyAgent;
    let agentOptions = options;
    if (proxyConfig && proxyConfig.url) {
        if (!proxyConfig.url.startsWith('http')) {
            throw new Error('Invalid proxy URL');
        }
        const proxyHost = proxyConfig.url.split('//')[1];
        const proxyAuth = proxyConfig.username && proxyConfig.password
            ? `${proxyConfig.username}:${proxyConfig.password}@`
            : '';
        const proxyUrl = `http://${proxyAuth}${proxyHost}`;
        agentOptions = Object.assign({ getProxyForUrl: (url) => proxyUrl }, options || {});
    }
    return agentOptions ? new ProxyAgent(agentOptions) : new ProxyAgent();
}
function delayInSeconds(seconds) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    });
}
/**
 * Get value from object raw data.
 *
 * @param obj Object with raw data from which to get the value.
 * @param key Key of the value to get.
 * @returns Value from object raw data.
 */
function getValueFromObjectRawData(obj, key) {
    if (obj && typeof obj === 'object' && obj.rawData) {
        return obj.rawData[key];
    }
    return undefined;
}
/**
 * Create a null value.
 *
 * @returns null
 */
function createNull() {
    return null;
}
/**
 * Create a cancellation controller.
 */
function createCancellationController() {
    return new AbortController();
}
/**
 * Stringify JSON with escaped multibyte Unicode characters to ensure computed signatures match PHP's default behavior
 *
 * @param {Object} body - The parsed JSON object
 * @returns {string} - Stringified JSON with escaped multibyte Unicode characters
 * @private
 */
function jsonStringifyWithEscapedUnicode(body) {
    return body.replace(/[\u007f-\uffff]/g, (char) => `\\u${`0000${char.charCodeAt(0).toString(16)}`.slice(-4)}`);
}
/**
 * Compute the message signature
 * @see {@Link https://developer.box.com/en/guides/webhooks/handle/setup-signatures/}
 *
 * @param {string} body - The request body of the webhook message
 * @param {Object} headers - The request headers of the webhook message
 * @param {string} signatureKey - The signature to verify the message with
 * @returns {?string} - The message signature (or null, if it can't be computed)
 * @private
 */
function computeWebhookSignature(body, headers, signatureKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const escapedBody = jsonStringifyWithEscapedUnicode(body).replace(/\//g, '\\/');
        if (headers['box-signature-version'] !== '1') {
            return null;
        }
        if (headers['box-signature-algorithm'] !== 'HmacSHA256') {
            return null;
        }
        let signature = null;
        if (isBrowser()) {
            const hashFunc = (0, hash_wasm_1.createSHA256)();
            const hmac = yield (0, hash_wasm_1.createHMAC)(hashFunc, signatureKey);
            hmac.init();
            hmac.update(escapedBody);
            hmac.update(headers['box-delivery-timestamp']);
            const result = yield hmac.digest('binary');
            signature = buffer_1.Buffer.from(result).toString('base64');
        }
        else {
            let crypto = require('crypto');
            let hmac = crypto.createHmac('sha256', signatureKey);
            hmac.update(escapedBody);
            hmac.update(headers['box-delivery-timestamp']);
            signature = hmac.digest('base64');
        }
        return signature;
    });
}
function random(min, max) {
    return Math.random() * (max - min) + min;
}
//# sourceMappingURL=utils.js.map