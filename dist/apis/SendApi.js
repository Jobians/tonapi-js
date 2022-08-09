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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class SendApi extends runtime.BaseAPI {
    /**
     * Estimate fees for message
     */
    estimateTxRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("JWTAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/send/estimateTx`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.SendBocRequestToJSON)(requestParameters.sendBocRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AccountEventFromJSON)(jsonValue));
        });
    }
    /**
     * Estimate fees for message
     */
    estimateTx(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.estimateTxRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Send message to blockchain
     */
    sendBocRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("JWTAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/send/boc`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.SendBocRequestToJSON)(requestParameters.sendBocRequest),
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Send message to blockchain
     */
    sendBoc(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sendBocRaw(requestParameters, initOverrides);
        });
    }
}
exports.SendApi = SendApi;