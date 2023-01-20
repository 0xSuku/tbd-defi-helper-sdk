"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../chains");
const token_1 = require("../constants/token");
const nativeTokens = {
    1: {
        token: new sdk_core_1.Token(chains_1.ChainId.Ethereum, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'ETH', 'Ethereum'),
        tokenInfo: token_1.TokenTypes.ETH,
    },
    10: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'ETH', 'Optimism Ethereum'),
        tokenInfo: token_1.TokenTypes.ETH,
    },
    56: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'BNB', 'BNB'),
        tokenInfo: token_1.TokenTypes.BNB,
    },
    100: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'xDAI', 'xDAI'),
        tokenInfo: token_1.TokenTypes.DAI,
    },
    137: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'MATIC', 'Matic'),
        tokenInfo: token_1.TokenTypes.MATIC,
    },
    250: {
        token: new sdk_core_1.Token(chains_1.ChainId.Fantom, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'FTM', 'Fantom'),
        tokenInfo: token_1.TokenTypes.FTM,
    },
    1088: {
        token: new sdk_core_1.Token(chains_1.ChainId.Metis, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'METIS', 'METIS'),
        tokenInfo: token_1.TokenTypes.METIS,
    },
    2001: {
        token: new sdk_core_1.Token(chains_1.ChainId.Milkomeda, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'ADA', 'ADA'),
        tokenInfo: token_1.TokenTypes.ADA,
    },
    42161: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'ETH', 'Arbitrum Ethereum'),
        tokenInfo: token_1.TokenTypes.ETH,
    },
    43114: {
        token: new sdk_core_1.Token(chains_1.ChainId.Avalanche, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 18, 'AVAX', 'AVAX'),
        tokenInfo: token_1.TokenTypes.AVAX,
    },
};
exports.default = nativeTokens;
//# sourceMappingURL=natives.js.map