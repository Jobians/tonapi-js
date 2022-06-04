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
exports.AnnotationsToJSON = exports.AnnotationsFromJSONTyped = exports.AnnotationsFromJSON = void 0;
const Annotation_1 = require("./Annotation");
function AnnotationsFromJSON(json) {
    return AnnotationsFromJSONTyped(json, false);
}
exports.AnnotationsFromJSON = AnnotationsFromJSON;
function AnnotationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'annotations': (json['annotations'].map(Annotation_1.AnnotationFromJSON)),
    };
}
exports.AnnotationsFromJSONTyped = AnnotationsFromJSONTyped;
function AnnotationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'annotations': (value.annotations.map(Annotation_1.AnnotationToJSON)),
    };
}
exports.AnnotationsToJSON = AnnotationsToJSON;