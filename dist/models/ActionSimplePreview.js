"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionSimplePreviewToJSON = exports.ActionSimplePreviewFromJSONTyped = exports.ActionSimplePreviewFromJSON = exports.instanceOfActionSimplePreview = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ActionSimplePreview interface.
 */
function instanceOfActionSimplePreview(value) {
    let isInstance = true;
    isInstance = isInstance && "fullDescription" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "shortDescription" in value;
    return isInstance;
}
exports.instanceOfActionSimplePreview = instanceOfActionSimplePreview;
function ActionSimplePreviewFromJSON(json) {
    return ActionSimplePreviewFromJSONTyped(json, false);
}
exports.ActionSimplePreviewFromJSON = ActionSimplePreviewFromJSON;
function ActionSimplePreviewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fullDescription': json['full_description'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : json['image'],
        'name': json['name'],
        'shortDescription': json['short_description'],
    };
}
exports.ActionSimplePreviewFromJSONTyped = ActionSimplePreviewFromJSONTyped;
function ActionSimplePreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'full_description': value.fullDescription,
        'image': value.image,
        'name': value.name,
        'short_description': value.shortDescription,
    };
}
exports.ActionSimplePreviewToJSON = ActionSimplePreviewToJSON;