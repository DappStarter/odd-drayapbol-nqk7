require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area similar champion royal magic arrange hunt ghost army gauge'; 
let testAccounts = [
"0xb5ad746be1e3cd524c49ca4b57dd9f74af670d0fb560890893239df8ae2ed43c",
"0x3675d96d145518e005f2920b98ef52aa528130c9b73abfe7b16b11b5bcad6c85",
"0x45e643387efbb52ce48d5d6e36913844977a532d07dc3d010ec58bb312f7ea45",
"0x68c32c5c2a58f720a9911a4d9e76dd58290184e488f55c7912335d05247ca0a2",
"0x8c02eeda3b5e9603a65ca0a5d966edf4dcbeee89d1c5680669dc3cbb70158a40",
"0x603af74709c2adc400c843023a0b2d3424554ebf0dbe4885c069ffbc1fd8deb4",
"0x1a585590665e76ead505ba7e2a3180ecc009e5b7a133d4b8c93e30fe7d7d41ba",
"0xa39597d6ea1b8215d5b0a558d7de934f67d94c9886845b49e0f53c04ae17a97e",
"0x7c518c688d7a9940f1be33e4eaebf6c3515d43a320e9b63d4f08886d954a00eb",
"0xa26fbb6535d5771478215cd33f042b8ea4682c20d40543deefd3aeb5941057a9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

