import {
    Address,
    WalletContractV4
} from '@ton/ton';
import { mnemonicNew, mnemonicToPrivateKey } from '@ton/crypto';
import { WalletItem } from './utils/contract';
import {
    clientTonApi,
    getTonCenterClient
} from './utils/clients';

const client = process.env.CLIENT === 'toncenter' ? getTonCenterClient() : clientTonApi;

test('Exists wallet contract', async () => {
    // create wallet contract
    const address = Address.parse(
        '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168'
    );
    const wallet = await WalletItem.createFromAddress(address);
    const contract = client.open(wallet);

    // Get balance
    const balance: bigint = await contract.getBalance();
    expect(balance).toBeDefined();
    expect(typeof balance === 'bigint').toBe(true);
    expect(balance).toBe(471698230n);
});

// TODO: with case with ofchain wallet aork only with toncenter
test('Missing wallet contract', async () => {
    const workchain = 0;
    const mnemonics = await mnemonicNew();
    const keyPair = await mnemonicToPrivateKey(mnemonics);

    const wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });
    const contract = client.open(wallet);

    // Get balance
    const balance: bigint = await contract.getBalance();
    expect(balance).toBeDefined();
    expect(typeof balance === 'bigint').toBe(true);
    expect(balance).toBe(0n);
});

test('Uninit address with balance', async () => {
    // const address = Address.parse('EQBeNSukqcF7a27a-kq3R7xFjEa9w1vd2HpQ0NowlnHq6UqC');
    // const rawAddress = '0:5e352ba4a9c17b6b6edafa4ab747bc458c46bdc35bddd87a50d0da309671eae9';
    const publicKey = 57787885441719996105546335440755198603738413181862234174694273066261933925918n;
    
    // create wallet contract
    const wallet = WalletContractV4.create({ workchain: 0, publicKey: Buffer.from(publicKey.toString(16), 'hex')});
    const contract = client.open(wallet);

    // Get balance
    const balance: bigint = await contract.getBalance();
    expect(balance).toBeDefined();
    expect(typeof balance === 'bigint').toBe(true);
    expect(balance).toBe(1326726n);
});

test('Uninit address without balance', async () => {
    // const address = Address.parse('EQAta6RYppvVkEavFszcZKFx9q1yobABP3vY5RE36DQxv6eO');
    // const rawAddress = '0:2d6ba458a69bd59046af16ccdc64a171f6ad72a1b0013f7bd8e51137e83431bf';
    const publicKey = 103331518834641293154200435092860708617866223941720484731223285872059976834397n;
    
    // create wallet contract
    const wallet = WalletContractV4.create({ workchain: 0, publicKey: Buffer.from(publicKey.toString(16), 'hex')});
    const contract = client.open(wallet);

    // Get balance
    const balance: bigint = await contract.getBalance();
    expect(balance).toBeDefined();
    expect(typeof balance === 'bigint').toBe(true);
    expect(balance).toBe(0n);
});