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
exports.ValueFlowJettonsInnerToJSON = exports.ValueFlowJettonsInnerFromJSONTyped = exports.ValueFlowJettonsInnerFromJSON = exports.instanceOfValueFlowJettonsInner = void 0;
const AccountAddress_1 = require("./AccountAddress");
/**
 * Check if a given object implements the ValueFlowJettonsInner interface.
 */
function instanceOfValueFlowJettonsInner(value) {
    let isInstance = true;
    isInstance = isInstance && "account" in value;
    isInstance = isInstance && "quantity" in value;
    return isInstance;
}
exports.instanceOfValueFlowJettonsInner = instanceOfValueFlowJettonsInner;
function ValueFlowJettonsInnerFromJSON(json) {
    return ValueFlowJettonsInnerFromJSONTyped(json, false);
}
exports.ValueFlowJettonsInnerFromJSON = ValueFlowJettonsInnerFromJSON;
function ValueFlowJettonsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'account': (0, AccountAddress_1.AccountAddressFromJSON)(json['account']),
        'quantity': json['quantity'],
    };
}
exports.ValueFlowJettonsInnerFromJSONTyped = ValueFlowJettonsInnerFromJSONTyped;
function ValueFlowJettonsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account': (0, AccountAddress_1.AccountAddressToJSON)(value.account),
        'quantity': value.quantity,
    };
}
exports.ValueFlowJettonsInnerToJSON = ValueFlowJettonsInnerToJSON;