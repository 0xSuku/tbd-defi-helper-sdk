"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gmxFarms = exports.rewardRouterAddress = exports.fGmxAddress = exports.fGlpAddress = void 0;
const tokens_1 = require("../../../tokens");
const gmx_1 = require("../../entities/gmx");
exports.fGlpAddress = '0x4e971a87900b931fF39d1Aad67697F49835400b6';
exports.fGmxAddress = '0xd2D1162512F927a7e282Ef43a362659E4F2a728F';
exports.rewardRouterAddress = '0xa906f338cb21815cbc4bc87ace9e68c87ef8d8f1';
const stakedGmx = new gmx_1.GmxStakeDepositInfo('Staked GMX', tokens_1.Tokens.arbitrum.sGMX, exports.fGmxAddress);
const stakedGlp = new gmx_1.GmxStakeDepositInfo('Staked GLP', tokens_1.Tokens.arbitrum.fsGLP, exports.fGlpAddress);
const vestedGmx = new gmx_1.GmxVestDepositInfo('Vesting GMX', tokens_1.Tokens.arbitrum.vGLP);
const vestedGlp = new gmx_1.GmxVestDepositInfo('Vesting GLP', tokens_1.Tokens.arbitrum.vGMX);
exports.gmxFarms = [
    stakedGmx,
    stakedGlp,
    vestedGmx,
    vestedGlp
];
//# sourceMappingURL=gmx-farms.js.map