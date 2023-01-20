"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../chains");
const token_1 = require("../constants/token");
const polygon = {
    QI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x580a84c73811e1839f75d86d75d88cca0c241ff4', 18, 'QI', 'Qi DAO'),
        tokenInfo: token_1.TokenTypes.QI,
    },
    DHV: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x5fCB9de282Af6122ce3518CDe28B7089c9F97b26', 18, 'DHV', 'DHV'),
        tokenInfo: token_1.TokenTypes.DHV,
    },
    USDC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', 6, 'USDC', 'USDC'),
        tokenInfo: token_1.TokenTypes.USDC,
    },
    WBNB: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x7e9928aFe96FefB820b85B4CE6597B8F660Fe4F4', 18, 'WBNB', 'WBNB'),
        tokenInfo: token_1.TokenTypes.BNB,
    },
    DAI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', 18, 'DAI', 'DAI'),
        tokenInfo: token_1.TokenTypes.DAI,
    },
    USDT: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 18, 'USDT', 'USDT'),
        tokenInfo: token_1.TokenTypes.USDT,
    },
    WETH: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'WETH'),
        tokenInfo: token_1.TokenTypes.ETH,
    },
    WMATIC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'WMATIC'),
        tokenInfo: token_1.TokenTypes.DHV,
    },
    BUSD: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x9fb83c0635de2e815fd1c21b3a292277540c2e8d', 18, 'BUSD', 'BUSD'),
        tokenInfo: token_1.TokenTypes.BUSD,
    },
    MAI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1', 18, 'MAI', 'MAI'),
        tokenInfo: token_1.TokenTypes.MAI,
    },
    WBTC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', 18, 'WBTC', 'WBTC'),
        tokenInfo: token_1.TokenTypes.BTC,
    },
    QUICK: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x831753dd7087cac61ab5644b308642cc1c33dc13', 18, 'QUICK', 'QUICK'),
        tokenInfo: token_1.TokenTypes.QUICK,
    },
    HND: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x10010078a54396F62c96dF8532dc2B4847d47ED3', 18, 'HND', 'HND'),
        tokenInfo: token_1.TokenTypes.HND,
    },
    CRV: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x172370d5Cd63279eFa6d502DAB29171933a610AF', 18, 'CRV', 'CRV'),
        tokenInfo: token_1.TokenTypes.CRV,
    },
    BIFI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0xFbdd194376de19a88118e84E279b977f165d01b8', 18, 'BIFI', 'BIFI'),
        tokenInfo: token_1.TokenTypes.BIFI,
    },
    SYN: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0xf8f9efc0db77d8881500bb06ff5d6abc3070e695', 18, 'SYN', 'SYN'),
        tokenInfo: token_1.TokenTypes.SYN,
    },
    AVAX: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b', 18, 'AVAX', 'AVAX'),
        tokenInfo: token_1.TokenTypes.AVAX,
    },
    SNX: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x50b728d8d964fd00c2d0aad81718b71311fef68a', 18, 'SNX', 'SNX'),
        tokenInfo: token_1.TokenTypes.SNX,
    },
    KNC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c', 18, 'KNC', 'KNC'),
        tokenInfo: token_1.TokenTypes.KNC,
    },
};
exports.default = polygon;
//# sourceMappingURL=polygon.js.map