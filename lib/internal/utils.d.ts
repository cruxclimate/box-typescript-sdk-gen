import { Buffer } from 'buffer';
import type { Readable } from 'stream';
export declare function isBrowser(): false | Crypto;
export declare function getUuid(): string;
export declare function decodeBase64(value: string): string;
export declare function hexToBase64(data: string): string;
export { Buffer, Readable as ByteStream };
export type { CancellationController, CancellationToken };
export type Iterator<T = any> = AsyncIterator<T>;
export type AgentOptions = any;
export type Agent = any;
declare class DateWrapper {
    readonly value: Date;
    constructor(value: Date);
}
declare class DateTimeWrapper {
    readonly value: Date;
    constructor(value: Date);
}
export { DateWrapper as Date, DateTimeWrapper as DateTime };
export declare function dateFromString(value: string): DateWrapper;
export declare function dateToString(date: DateWrapper): string;
export declare function dateTimeFromString(value: string): DateTimeWrapper;
export declare function dateTimeToString(dateTime: DateTimeWrapper): string;
export declare function epochSecondsToDateTime(seconds: number): DateTimeWrapper;
export declare function dateTimeToEpochSeconds(dateTime: DateTimeWrapper): number;
export { dateToString as serializeDate, dateFromString as deserializeDate, dateTimeToString as serializeDateTime, dateTimeFromString as deserializeDateTime, };
export declare function hexStrToBase64(hex: string): string;
export type HashName = 'sha1';
export type DigestHashType = 'base64';
export declare class Hash {
    #private;
    algorithm: HashName;
    constructor({ algorithm }: {
        algorithm: HashName;
    });
    initializeBrowserHash(): Promise<void>;
    updateHash(data: Buffer): Promise<void>;
    digestHash(encoding?: DigestHashType): Promise<string>;
}
export declare function getEnvVar(name: string): string;
export declare function generateByteBuffer(size: number): Buffer;
export declare function generateByteStreamFromBuffer(buffer: Buffer | ArrayBuffer): Readable;
export declare function generateByteStream(size: number): Readable;
export declare function bufferEquals(buffer1: Buffer, buffer2: Buffer): boolean;
export declare function bufferLength(buffer: Buffer): number;
export declare function decodeBase64ByteStream(data: string): Readable;
export declare function stringToByteStream(data: string): Readable;
export declare function readByteStream(byteStream: Readable): Promise<Buffer>;
export declare function iterateChunks(stream: Readable, chunkSize: number, fileSize: number): Iterator<Readable>;
export declare function reduceIterator<T, U>(iterator: Iterator<T>, reducer: (accumulator: U, current: T) => Promise<U>, initialValue: U): Promise<U>;
export declare function prepareParams(map: {
    readonly [key: string]: undefined | string;
}): {
    readonly [key: string]: string;
};
export declare function toString(value: any): string;
type CancellationController = AbortController;
type CancellationToken = AbortSignal;
/**
 * Creates a cancellation token that will be cancelled after a given delay in ms.
 *
 * @param {number} delay Delay in ms.
 * @returns {CancellationToken} Cancellation token.
 */
export declare function createTokenAndCancelAfter(delay: number): CancellationToken;
export type JwtKey = {
    key: string;
    passphrase: string;
};
export type JwtAlgorithm = 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512' | 'ES256' | 'ES384' | 'ES512' | 'PS256' | 'PS384' | 'PS512' | 'none';
export type JwtSignOptions = {
    algorithm?: JwtAlgorithm;
    keyid?: string | undefined;
    expiresIn?: string | number | undefined;
    notBefore?: string | number | undefined;
    audience?: string | string[] | undefined;
    subject?: string | undefined;
    issuer?: string | undefined;
    jwtid?: string | undefined;
};
/**
 * Creates a JWT assertion.
 *
 * @param claims
 * @param key
 * @param options
 * @returns
 */
export declare function createJwtAssertion(claims: {
    readonly [key: string]: any;
}, key: JwtKey, options: JwtSignOptions): Promise<string>;
/**
 * Reads a text file and returns its content.
 */
export declare function readTextFromFile(filepath: string): string;
/**
 * Get current epoch time in seconds.
 */
export declare function getEpochTimeInSeconds(): number;
/**
 * Create web agent from proxy agent options.
 */
export declare function createAgent(options?: AgentOptions, proxyConfig?: any): Agent;
export declare function delayInSeconds(seconds: number): Promise<void>;
/**
 * Get value from object raw data.
 *
 * @param obj Object with raw data from which to get the value.
 * @param key Key of the value to get.
 * @returns Value from object raw data.
 */
export declare function getValueFromObjectRawData(obj: any, key: string): any;
/**
 * Create a null value.
 *
 * @returns null
 */
export declare function createNull(): null;
/**
 * Create a cancellation controller.
 */
export declare function createCancellationController(): CancellationController;
/**
 * Stringify JSON with escaped multibyte Unicode characters to ensure computed signatures match PHP's default behavior
 *
 * @param {Object} body - The parsed JSON object
 * @returns {string} - Stringified JSON with escaped multibyte Unicode characters
 * @private
 */
export declare function jsonStringifyWithEscapedUnicode(body: string): string;
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
export declare function computeWebhookSignature(body: string, headers: {
    [key: string]: string;
}, signatureKey: string): Promise<string | null>;
export declare function random(min: number, max: number): number;
