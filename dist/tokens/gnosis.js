"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../chains");
const token_1 = require("../constants/token");
const gnosis = {
    WETH: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1', 18, 'WETH', 'WETH'),
        tokenInfo: token_1.TokenTypes.ETH,
    },
    USDC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', 6, 'USDC', 'USDC'),
        tokenInfo: token_1.TokenTypes.USDC,
    },
    MAI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d', 18, 'MAI', 'MAI'),
        tokenInfo: token_1.TokenTypes.MAI,
    },
    GNO: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb', 18, 'GNO', 'GNO'),
        tokenInfo: token_1.TokenTypes.GNO,
    },
    CRV: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0x712b3d230F3C1c19db860d80619288b1F0BDd0Bd', 18, 'CRV', 'CRV'),
        tokenInfo: token_1.TokenTypes.CRV,
    },
    WXDAI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d', 18, 'WXDAI', 'WXDAI'),
        tokenInfo: token_1.TokenTypes.DAI,
    },
    DHV: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0xFbdd194376de19a88118e84E279b977f165d01b8', 18, 'DHV', 'DHV'),
        tokenInfo: token_1.TokenTypes.DHV,
    },
    QI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0xdfa46478f9e5ea86d57387849598dbfb2e964b02', 18, 'QI', 'QI'),
        tokenInfo: token_1.TokenTypes.QI,
    },
    HND: {
        token: new sdk_core_1.Token(chains_1.ChainId.Gnosis, '0x10010078a54396F62c96dF8532dc2B4847d47ED3', 18, 'HND', 'HND'),
        tokenInfo: token_1.TokenTypes.HND,
    },
};
exports.default = gnosis;
//# sourceMappingURL=gnosis.js.map