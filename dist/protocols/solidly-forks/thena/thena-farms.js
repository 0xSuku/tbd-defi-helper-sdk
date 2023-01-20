"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../../../chains");
const token_1 = require("../../../constants/token");
const solidly_1 = require("../../entities/solidly");
const sAMM_UsdcBusd = new solidly_1.ThenaGaugeV2DepositInfo({
    name: 'USDC-BUSD Gauge',
    contractAddress: '0x11e79bc17cb1ff3d4f6a025412ac84960b20ba81',
    tokenDetailsVault: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0x7e61c053527a7af0c700ad9d2c8207e386273222', 18, 'sAMM-USDC/BUSD', 'USDC+BUSD'),
        tokenInfo: token_1.TokenTypes.UNUSED,
    }
});
const sAMM_HayBusd = new solidly_1.ThenaGaugeV2DepositInfo({
    name: 'HAY-BUSD Gauge',
    contractAddress: '0xe43317c1f037cbbaf33f33c386f2caf2b6b25c9c',
    tokenDetailsVault: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0x93b32a8dfe10e9196403dd111974e325219aec24', 18, 'sAMM-HAY/BUSD', 'HAY+BUSD'),
        tokenInfo: token_1.TokenTypes.UNUSED,
    }
});
const sAMM_MaiBusd = new solidly_1.ThenaGaugeV2DepositInfo({
    name: 'MAI-BUSD Gauge',
    contractAddress: '0x6fc3e598c8cc6d1e49b6233205b69ae07ab41c72',
    tokenDetailsVault: {
        token: new sdk_core_1.Token(chains_1.ChainId.BNB, '0xe459556595a224d7f12b45e93138f4a1265ac618', 18, 'sAMM-MAI/BUSD', 'MAI+BUSD'),
        tokenInfo: token_1.TokenTypes.UNUSED,
    }
});
const solidlyDeposits = [
    sAMM_UsdcBusd,
    sAMM_HayBusd,
    sAMM_MaiBusd
];
exports.default = solidlyDeposits;
//# sourceMappingURL=thena-farms.js.map