require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note mean essay hidden produce boat seminar'; 
let testAccounts = [
"0xc850906802f39740b411aea218c8e8faa842e43a1741eca0c2d00d90213646d0",
"0x9cf15cb79c747247e10e2f9a5b8410abdcb0b91b067dfccb7d38b58ffda42b18",
"0xb152e3fce84ebf45521f335d07acb56c4920965d44df3e6b2771c35a43bf7992",
"0x644d3d330b6b005542f04b9879cbdcc8f662f93f5b0a6324ca44ca9299b66f46",
"0x318439ca338767c36895db2d64bd471e8c3fdb7da4601a71df5741dbc5e33eb4",
"0x7689ff0c52e902df0b926443b4923c5bc53a41ca36f1924e2b70b02f1d62d596",
"0x7fc5778cf7070a9ee4d21cbe5ea2cf3268c5c4b974af8808457bdef0e33a7c3b",
"0x06c2561bdd2069270e9aed8fd20b8d41fc5b5148387e6cb60e3920bd7e7413a2",
"0x367c344636ca657c2cf872170e59d4d7e58d06724cbf5446d63553f365be82d2",
"0xebd3437cf833f600faff5579c5d4852c89af14972a1e48b8611f8eee075f264c"
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

