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
import { NftItem } from './NftItem';
/**
 *
 * @export
 * @interface NftForSale
 */
export interface NftForSale {
    /**
     *
     * @type {NftItem}
     * @memberof NftForSale
     */
    nft: NftItem;
    /**
     *
     * @type {string}
     * @memberof NftForSale
     */
    saleContract: string;
}
export declare function NftForSaleFromJSON(json: any): NftForSale;
export declare function NftForSaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftForSale;
export declare function NftForSaleToJSON(value?: NftForSale | null): any;