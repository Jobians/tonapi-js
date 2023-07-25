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
 */
export declare const AccStatusChange: {
    readonly Unchanged: "acst_unchanged";
    readonly Frozen: "acst_frozen";
    readonly Deleted: "acst_deleted";
};
export declare type AccStatusChange = typeof AccStatusChange[keyof typeof AccStatusChange];
export declare function AccStatusChangeFromJSON(json: any): AccStatusChange;
export declare function AccStatusChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccStatusChange;
export declare function AccStatusChangeToJSON(value?: AccStatusChange | null): any;