import { BaseUrls } from './baseUrls.generated.js';
import { Interceptor } from './interceptors.generated.js';
import { Agent } from '../internal/utils.js';
import { AgentOptions } from '../internal/utils.js';
import { ProxyConfig } from './proxyConfig.generated.js';
export declare class NetworkSession {
    readonly additionalHeaders: {
        readonly [key: string]: string;
    };
    readonly baseUrls: BaseUrls;
    readonly interceptors: readonly Interceptor[];
    readonly agent: Agent;
    readonly agentOptions?: AgentOptions;
    readonly proxyConfig?: ProxyConfig;
    constructor(fields: Omit<NetworkSession, 'additionalHeaders' | 'baseUrls' | 'interceptors' | 'agent' | 'withAdditionalHeaders' | 'withCustomBaseUrls' | 'withCustomAgentOptions' | 'withInterceptors' | 'withProxy'> & Partial<Pick<NetworkSession, 'additionalHeaders' | 'baseUrls' | 'interceptors' | 'agent'>>);
    /**
       * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including additional headers to be attached to every API call.
       * @param {{
          readonly [key: string]: string;
      }} additionalHeaders Headers, which are appended to each API request
       * @returns {NetworkSession}
       */
    withAdditionalHeaders(additionalHeaders?: {
        readonly [key: string]: string;
    }): NetworkSession;
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including custom base urls to be used for every API call.
     * @param {BaseUrls} baseUrls Custom base urls
     * @returns {NetworkSession}
     */
    withCustomBaseUrls(baseUrls: BaseUrls): NetworkSession;
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including custom agent options to be used for every API call.
     * @param {AgentOptions} agentOptions Custom agent options
     * @returns {NetworkSession}
     */
    withCustomAgentOptions(agentOptions: AgentOptions): NetworkSession;
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also additional including custom interceptors.
     * @param {readonly Interceptor[]} interceptors Custom base urls
     * @returns {NetworkSession}
     */
    withInterceptors(interceptors: readonly Interceptor[]): NetworkSession;
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including a custom proxy configuration.
     * @param {ProxyConfig} proxyConfig
     * @returns {NetworkSession}
     */
    withProxy(proxyConfig: ProxyConfig): NetworkSession;
}
export interface NetworkSessionInput {
    readonly additionalHeaders?: {
        readonly [key: string]: string;
    };
    readonly baseUrls?: BaseUrls;
    readonly interceptors?: readonly Interceptor[];
    readonly agent?: Agent;
    readonly agentOptions?: AgentOptions;
    readonly proxyConfig?: ProxyConfig;
}
