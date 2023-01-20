"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../../chains");
const token_1 = require("../../constants/token");
const tokens_1 = require("../../tokens");
const constants_1 = require("../constants");
const qidao_1 = require("../entities/qidao");
const vaultArrakisMaiUsdc = new qidao_1.QiDaoFarmVaultDepositInfo({
    name: 'USDC-MAI Arrakis Vault',
    protocol: constants_1.Protocols.Qi_Dao,
    chainId: chains_1.ChainId.Polygon,
    contractAddress: '0x9f9f0456005ed4e7248199b6260752e95682a883',
    vaultId: '0',
    tokenDetailsVault: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0xa199569af06cb68960869fe376c9b41f68d8e2d1', 18, 'Arrakis Vault V1 USDC/miMATIC', 'USDC+MAI'),
        tokenInfo: token_1.TokenTypes.UNUSED,
    },
    tokenDetailsRewards: tokens_1.Tokens.polygon.QI
});
const vaultQuickswapMaiUsdc = new qidao_1.QiDaoFarmVaultDepositInfo({
    name: 'MAI-USDC Quickswap LP',
    protocol: constants_1.Protocols.Qi_Dao,
    chainId: chains_1.ChainId.Polygon,
    contractAddress: '0xcc54afcecd0d89e0b2db58f5d9e58468e7ad20dc',
    vaultId: '0',
    tokenDetailsVault: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x9a8b2601760814019b7e6ee0052e25f1c623d1e6', 18, 'Uniswap V2 (UNI-V2)', 'MAI+USDC'),
        tokenInfo: token_1.TokenTypes.UNUSED,
    },
    tokenDetailsRewards: tokens_1.Tokens.polygon.QI
});
const vaultQuickswapQiMatic = new qidao_1.QiDaoFarmVaultDepositInfo({
    name: 'QI-WMATIC Quickswap LP',
    protocol: constants_1.Protocols.Qi_Dao,
    chainId: chains_1.ChainId.Polygon,
    contractAddress: '0xcc54afcecd0d89e0b2db58f5d9e58468e7ad20dc',
    vaultId: '1',
    tokenDetailsVault: {
        token: new sdk_core_1.Token(chains_1.ChainId.Polygon, '0x9a8b2601760814019b7e6ee0052e25f1c623d1e6', 18, 'Uniswap V2 (UNI-V2)', 'QI+WMATIC'),
        tokenInfo: token_1.TokenTypes.UNUSED,
    },
    tokenDetailsRewards: tokens_1.Tokens.polygon.QI
});
const qiFarms = [
    vaultArrakisMaiUsdc,
    vaultQuickswapMaiUsdc,
    vaultQuickswapQiMatic
];
exports.default = qiFarms;
//# sourceMappingURL=qidao-farms.js.map