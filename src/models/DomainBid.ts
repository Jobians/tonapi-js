/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DomainBid
 */
export interface DomainBid {
    /**
     * 
     * @type {boolean}
     * @memberof DomainBid
     */
    success: boolean;
    /**
     * 
     * @type {number}
     * @memberof DomainBid
     */
    value: number;
    /**
     * 
     * @type {number}
     * @memberof DomainBid
     */
    txTime: number;
    /**
     * 
     * @type {string}
     * @memberof DomainBid
     */
    bidderA: string;
}

export function DomainBidFromJSON(json: any): DomainBid {
    return DomainBidFromJSONTyped(json, false);
}

export function DomainBidFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBid {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'value': json['value'],
        'txTime': json['txTime'],
        'bidderA': json['bidderA'],
    };
}

export function DomainBidToJSON(value?: DomainBid | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'value': value.value,
        'txTime': value.txTime,
        'bidderA': value.bidderA,
    };
}
