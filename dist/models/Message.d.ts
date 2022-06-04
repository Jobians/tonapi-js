/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AccountAddress } from './AccountAddress';
/**
 *
 * @export
 * @interface Message
 */
export interface Message {
    /**
     *
     * @type {number}
     * @memberof Message
     */
    createdLt: number;
    /**
     *
     * @type {AccountAddress}
     * @memberof Message
     */
    destination?: AccountAddress;
    /**
     *
     * @type {number}
     * @memberof Message
     */
    fwdFee: number;
    /**
     *
     * @type {number}
     * @memberof Message
     */
    ihrFee: number;
    /**
     *
     * @type {any}
     * @memberof Message
     */
    msgData: any | null;
    /**
     *
     * @type {AccountAddress}
     * @memberof Message
     */
    source?: AccountAddress;
    /**
     *
     * @type {number}
     * @memberof Message
     */
    value: number;
}
export declare function MessageFromJSON(json: any): Message;
export declare function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message;
export declare function MessageToJSON(value?: Message | null): any;