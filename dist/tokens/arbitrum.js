"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../chains");
const token_1 = require("../constants/token");
const arbitrum = {
    QI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0xB9C8F0d3254007eE4b98970b94544e473Cd610EC', 18, 'QI', 'Qi DAO'),
        tokenInfo: token_1.TokenTypes.QI,
    },
    USDC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USDC'),
        tokenInfo: token_1.TokenTypes.USDC,
    },
    GLP: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0x4277f8f2c384827b5273592ff7cebd9f2c1ac258', 18, 'GLP', 'GLP'),
        tokenInfo: token_1.TokenTypes.UNUSED,
        disabled: true,
    },
    BIFI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae', 18, 'BIFI', 'BIFI'),
        tokenInfo: token_1.TokenTypes.BIFI,
    },
    SYN: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0x080F6AEd32Fc474DD5717105Dba5ea57268F46eb', 18, 'SYN', 'SYN'),
        tokenInfo: token_1.TokenTypes.SYN,
    },
    GMX: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a', 18, 'GMX', 'GMX'),
        tokenInfo: token_1.TokenTypes.GMX,
    },
    esGMX: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0xf42ae1d54fd613c9bb14810b0588faaa09a426ca', 18, 'esGMX', 'esGMX'),
        tokenInfo: token_1.TokenTypes.esGMX,
    },
    sGMX: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0x908C4D94D34924765f1eDc22A1DD098397c59dD4', 18, 'sGMX', 'Staked GMX'),
        tokenInfo: token_1.TokenTypes.GMX,
        disabled: true,
    },
    fsGLP: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0x1aDDD80E6039594eE970E5872D247bf0414C8903', 18, 'fsGLP', 'Staked GLP'),
        tokenInfo: token_1.TokenTypes.UNUSED,
        disabled: true,
    },
    fGLP: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0x4e971a87900b931fF39d1Aad67697F49835400b6', 18, 'fsGLP', 'Staked GLP'),
        tokenInfo: token_1.TokenTypes.UNUSED,
        disabled: true,
    },
    vGMX: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0x199070DDfd1CFb69173aa2F7e20906F26B363004', 18, 'vGMX', 'Vested GMX'),
        tokenInfo: token_1.TokenTypes.GMX,
        disabled: true,
    },
    vGLP: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0xA75287d2f8b217273E7FCD7E86eF07D33972042E', 18, 'vGLP', 'Vested GLP'),
        tokenInfo: token_1.TokenTypes.UNUSED,
        disabled: true,
    },
    WETH: {
        token: new sdk_core_1.Token(chains_1.ChainId.Arbitrum, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'WETH'),
        tokenInfo: token_1.TokenTypes.ETH,
    },
};
exports.default = arbitrum;
//# sourceMappingURL=arbitrum.js.map