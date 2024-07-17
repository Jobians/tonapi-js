import { TonApiClient, Api, ApiConfig } from '../src/client';
import fetchMock from 'jest-fetch-mock';
// import { Address } from '@ton/core';
import { client, clienWithApiKey } from './utils/client';
import { JSONBig } from './utils/jsonbig';

test('Client status test', async () => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
        JSONBig.stringify({
            rest_online: true,
            indexing_latency: 8
        })
    );

    const res = await client.blockchain.status();
    expect(res).toBeDefined();

    fetchMock.disableMocks();
});

test('Client apiKey test', async () => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
        JSONBig.stringify({
            rest_online: true,
            indexing_latency: 8
        })
    );

    const res = await clienWithApiKey.blockchain.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.objectContaining({
                Authorization: 'Bearer TEST_API_KEY'
            })
        })
    );

    fetchMock.disableMocks();
});

test('Client apiKey missing test', async () => {
    fetchMock.enableMocks();

    const config: ApiConfig = {
        baseUrl: 'https://tonapi.io'
    };

    const http = new TonApiClient(config);
    const client = new Api(http);
    const res = await client.blockchain.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.not.objectContaining({
                Authorization: expect.anything()
            })
        })
    );

    fetchMock.disableMocks();
});

// test('Client getBlockchainRawAccount test', async () => {
//     const address = Address.parse('UQC62nZpm36EFzADVfXDVd_4OpbFyc1D3w3ZvCPHLni8Dst4');;
//     const res = await client.blockchain.getBlockchainRawAccount(address);

//     console.log(res);
//     expect(res).toBeDefined();
// });