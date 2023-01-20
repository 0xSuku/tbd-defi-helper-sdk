"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../chains");
const token_1 = require("../constants/token");
const bnb = {
    USDT: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'USDT'),
        tokenInfo: token_1.TokenTypes.USDT,
    },
    USDC: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USDC'),
        tokenInfo: token_1.TokenTypes.USDC,
    },
    DAI: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'DAI'),
        tokenInfo: token_1.TokenTypes.DAI,
    },
    BUSD: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'BUSD'),
        tokenInfo: token_1.TokenTypes.BUSD,
    },
    WBNB: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'WBNB'),
        tokenInfo: token_1.TokenTypes.BNB,
    },
    WETH: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0x2170ed0880ac9a755fd29b2688956bd959f933f8', 18, 'WETH', 'WETH'),
        tokenInfo: token_1.TokenTypes.ETH,
    },
    BIFI: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0xCa3F508B8e4Dd382eE878A314789373D80A5190A', 18, 'BIFI', 'BIFI'),
        tokenInfo: token_1.TokenTypes.BIFI,
    },
    SYN: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0xa4080f1778e69467e905b8d6f72f6e441f9e9484', 18, 'SYN', 'SYN'),
        tokenInfo: token_1.TokenTypes.SYN,
    },
    FTM: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0xad29abb318791d579433d831ed122afeaf29dcfe', 18, 'FTM', 'FTM'),
        tokenInfo: token_1.TokenTypes.FTM,
    },
    ADA: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', 18, 'ADA', 'ADA'),
        tokenInfo: token_1.TokenTypes.ADA,
    },
    SNX: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0x9ac983826058b8a9c7aa1c9171441191232e8404', 18, 'SNX', 'SNX'),
        tokenInfo: token_1.TokenTypes.SNX,
    },
    KNC: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b', 18, 'KNC', 'KNC'),
        tokenInfo: token_1.TokenTypes.KNC,
    },
    THE: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0xf4c8e32eadec4bfe97e0f595add0f4450a863a11', 18, 'THE', 'THENA'),
        tokenInfo: token_1.TokenTypes.THE,
    },
};
exports.default = bnb;
//# sourceMappingURL=bnb.js.map