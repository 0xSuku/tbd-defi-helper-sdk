"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../chains");
const token_1 = require("../constants/token");
const optimism = {
    WBTC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x68f180fcce6836688e9084f035309e29bf0a2095', 18, 'WBTC', 'WBTC'),
        tokenInfo: token_1.TokenTypes.BTC,
    },
    USDC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', 'USDC'),
        tokenInfo: token_1.TokenTypes.USDC,
    },
    WETH: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'WETH'),
        tokenInfo: token_1.TokenTypes.ETH,
    },
    QI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x3f56e0c36d275367b8c502090edf38289b3dea0d', 18, 'QI', 'QI'),
        tokenInfo: token_1.TokenTypes.QI,
    },
    HND: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x10010078a54396F62c96dF8532dc2B4847d47ED3', 18, 'HND', 'HND'),
        tokenInfo: token_1.TokenTypes.HND,
    },
    CRV: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53', 18, 'CRV', 'CRV'),
        tokenInfo: token_1.TokenTypes.CRV,
    },
    SNX: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x8700daec35af8ff88c16bdf0418774cb3d7599b4', 18, 'SNX', 'SNX'),
        tokenInfo: token_1.TokenTypes.SNX,
    },
    KNC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0xa00e3a3511aac35ca78530c85007afcd31753819', 18, 'KNC', 'KNC'),
        tokenInfo: token_1.TokenTypes.KNC,
    },
    KNC_2: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x4518231a8fdf6ac553b9bbd51bbb86825b583263', 18, 'mKNC', 'mKNC'),
        tokenInfo: token_1.TokenTypes.KNC,
    },
    USDPLUS: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x73cb180bf0521828d8849bc8CF2B920918e23032', 6, 'USD+', 'USD+'),
        tokenInfo: token_1.TokenTypes.USDPLUS,
    },
    OP: {
        token: new sdk_core_1.Token(chains_1.ChainId.Optimism, '0x4200000000000000000000000000000000000042', 18, 'OP', 'OP'),
        tokenInfo: token_1.TokenTypes.OP,
    },
};
exports.default = optimism;
//# sourceMappingURL=optimism.js.map