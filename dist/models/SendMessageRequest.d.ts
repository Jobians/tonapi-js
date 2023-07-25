/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface SendMessageRequest
 */
export interface SendMessageRequest {
    /**
     *
     * @type {string}
     * @memberof SendMessageRequest
     */
    boc: string;
}
/**
 * Check if a given object implements the SendMessageRequest interface.
 */
export declare function instanceOfSendMessageRequest(value: object): boolean;
export declare function SendMessageRequestFromJSON(json: any): SendMessageRequest;
export declare function SendMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendMessageRequest;
export declare function SendMessageRequestToJSON(value?: SendMessageRequest | null): any;