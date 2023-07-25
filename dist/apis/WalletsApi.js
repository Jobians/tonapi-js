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
exports.WalletsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class WalletsApi extends runtime.BaseAPI {
    /**
     * Get account seqno
     */
    getAccountSeqnoRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getAccountSeqno.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/wallet/{account_id}/seqno`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SeqnoFromJSON)(jsonValue));
        });
    }
    /**
     * Get account seqno
     */
    getAccountSeqno(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAccountSeqnoRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get wallets by public key
     */
    getWalletsByPublicKeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.publicKey === null || requestParameters.publicKey === undefined) {
                throw new runtime.RequiredError('publicKey', 'Required parameter requestParameters.publicKey was null or undefined when calling getWalletsByPublicKey.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/v2/pubkeys/{public_key}/wallets`.replace(`{${"public_key"}}`, encodeURIComponent(String(requestParameters.publicKey))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AccountsFromJSON)(jsonValue));
        });
    }
    /**
     * Get wallets by public key
     */
    getWalletsByPublicKey(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getWalletsByPublicKeyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.WalletsApi = WalletsApi;