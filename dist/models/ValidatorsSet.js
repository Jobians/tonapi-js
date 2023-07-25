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
exports.ValidatorsSetToJSON = exports.ValidatorsSetFromJSONTyped = exports.ValidatorsSetFromJSON = exports.instanceOfValidatorsSet = void 0;
const runtime_1 = require("../runtime");
const ValidatorsSetListInner_1 = require("./ValidatorsSetListInner");
/**
 * Check if a given object implements the ValidatorsSet interface.
 */
function instanceOfValidatorsSet(value) {
    let isInstance = true;
    isInstance = isInstance && "utimeSince" in value;
    isInstance = isInstance && "utimeUntil" in value;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "main" in value;
    isInstance = isInstance && "list" in value;
    return isInstance;
}
exports.instanceOfValidatorsSet = instanceOfValidatorsSet;
function ValidatorsSetFromJSON(json) {
    return ValidatorsSetFromJSONTyped(json, false);
}
exports.ValidatorsSetFromJSON = ValidatorsSetFromJSON;
function ValidatorsSetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'utimeSince': json['utime_since'],
        'utimeUntil': json['utime_until'],
        'total': json['total'],
        'main': json['main'],
        'totalWeight': !(0, runtime_1.exists)(json, 'total_weight') ? undefined : json['total_weight'],
        'list': (json['list'].map(ValidatorsSetListInner_1.ValidatorsSetListInnerFromJSON)),
    };
}
exports.ValidatorsSetFromJSONTyped = ValidatorsSetFromJSONTyped;
function ValidatorsSetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'utime_since': value.utimeSince,
        'utime_until': value.utimeUntil,
        'total': value.total,
        'main': value.main,
        'total_weight': value.totalWeight,
        'list': (value.list.map(ValidatorsSetListInner_1.ValidatorsSetListInnerToJSON)),
    };
}
exports.ValidatorsSetToJSON = ValidatorsSetToJSON;