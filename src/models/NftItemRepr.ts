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
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import type { ImagePreview } from './ImagePreview';
import {
    ImagePreviewFromJSON,
    ImagePreviewFromJSONTyped,
    ImagePreviewToJSON,
} from './ImagePreview';
import type { NftItemReprCollection } from './NftItemReprCollection';
import {
    NftItemReprCollectionFromJSON,
    NftItemReprCollectionFromJSONTyped,
    NftItemReprCollectionToJSON,
} from './NftItemReprCollection';
import type { Sale } from './Sale';
import {
    SaleFromJSON,
    SaleFromJSONTyped,
    SaleToJSON,
} from './Sale';

/**
 * 
 * @export
 * @interface NftItemRepr
 */
export interface NftItemRepr {
    /**
     * 
     * @type {string}
     * @memberof NftItemRepr
     */
    address: string;
    /**
     * 
     * @type {NftItemReprCollection}
     * @memberof NftItemRepr
     */
    collection?: NftItemReprCollection;
    /**
     * deprecated
     * @type {string}
     * @memberof NftItemRepr
     * @deprecated
     */
    collectionAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof NftItemRepr
     */
    dns?: string;
    /**
     * 
     * @type {number}
     * @memberof NftItemRepr
     */
    index: number;
    /**
     * 
     * @type {any}
     * @memberof NftItemRepr
     */
    metadata?: any | null;
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftItemRepr
     */
    owner?: AccountAddress;
    /**
     * 
     * @type {Array<ImagePreview>}
     * @memberof NftItemRepr
     */
    previews?: Array<ImagePreview>;
    /**
     * 
     * @type {Sale}
     * @memberof NftItemRepr
     */
    sale?: Sale;
    /**
     * 
     * @type {boolean}
     * @memberof NftItemRepr
     */
    verified: boolean;
}

/**
 * Check if a given object implements the NftItemRepr interface.
 */
export function instanceOfNftItemRepr(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "index" in value;
    isInstance = isInstance && "verified" in value;

    return isInstance;
}

export function NftItemReprFromJSON(json: any): NftItemRepr {
    return NftItemReprFromJSONTyped(json, false);
}

export function NftItemReprFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItemRepr {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'collection': !exists(json, 'collection') ? undefined : NftItemReprCollectionFromJSON(json['collection']),
        'collectionAddress': !exists(json, 'collection_address') ? undefined : json['collection_address'],
        'dns': !exists(json, 'dns') ? undefined : json['dns'],
        'index': json['index'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'owner': !exists(json, 'owner') ? undefined : AccountAddressFromJSON(json['owner']),
        'previews': !exists(json, 'previews') ? undefined : ((json['previews'] as Array<any>).map(ImagePreviewFromJSON)),
        'sale': !exists(json, 'sale') ? undefined : SaleFromJSON(json['sale']),
        'verified': json['verified'],
    };
}

export function NftItemReprToJSON(value?: NftItemRepr | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'collection': NftItemReprCollectionToJSON(value.collection),
        'collection_address': value.collectionAddress,
        'dns': value.dns,
        'index': value.index,
        'metadata': value.metadata,
        'owner': AccountAddressToJSON(value.owner),
        'previews': value.previews === undefined ? undefined : ((value.previews as Array<any>).map(ImagePreviewToJSON)),
        'sale': SaleToJSON(value.sale),
        'verified': value.verified,
    };
}
