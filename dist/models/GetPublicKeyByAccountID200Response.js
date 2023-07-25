"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPublicKeyByAccountID200ResponseToJSON = exports.GetPublicKeyByAccountID200ResponseFromJSONTyped = exports.GetPublicKeyByAccountID200ResponseFromJSON = exports.instanceOfGetPublicKeyByAccountID200Response = void 0;
/**
 * Check if a given object implements the GetPublicKeyByAccountID200Response interface.
 */
function instanceOfGetPublicKeyByAccountID200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "publicKey" in value;
    return isInstance;
}
exports.instanceOfGetPublicKeyByAccountID200Response = instanceOfGetPublicKeyByAccountID200Response;
function GetPublicKeyByAccountID200ResponseFromJSON(json) {
    return GetPublicKeyByAccountID200ResponseFromJSONTyped(json, false);
}
exports.GetPublicKeyByAccountID200ResponseFromJSON = GetPublicKeyByAccountID200ResponseFromJSON;
function GetPublicKeyByAccountID200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicKey': json['public_key'],
    };
}
exports.GetPublicKeyByAccountID200ResponseFromJSONTyped = GetPublicKeyByAccountID200ResponseFromJSONTyped;
function GetPublicKeyByAccountID200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'public_key': value.publicKey,
    };
}
exports.GetPublicKeyByAccountID200ResponseToJSON = GetPublicKeyByAccountID200ResponseToJSON;