"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mummyFarms = exports.mummyRewardRouterAddress = exports.fMMYAddress = exports.fMLPAddress = void 0;
const tokens_1 = require("../../../tokens");
const gmx_1 = require("../../entities/gmx");
exports.fMLPAddress = '0x7b26207457a9f8ff4fd21a7a0434066935f1d8e7';
exports.fMMYAddress = '0xe149164d8eca659e8912dbdec35e3f7e71fb5789';
exports.mummyRewardRouterAddress = '0x7b9e962dd8aed0db9a1d8a2d7a962ad8b871ce4f';
const stakedGmx = new gmx_1.MummyStakeDepositInfo('Staked MMY', tokens_1.Tokens.fantom.sMMY, exports.fMMYAddress);
const stakedGlp = new gmx_1.MummyStakeDepositInfo('Staked MLP', tokens_1.Tokens.fantom.fsMLP, exports.fMLPAddress);
const vestedGmx = new gmx_1.MummyVestDepositInfo('Vesting MMY', tokens_1.Tokens.fantom.vMLP);
const vestedGlp = new gmx_1.MummyVestDepositInfo('Vesting MLP', tokens_1.Tokens.fantom.vMMY);
exports.mummyFarms = [
    stakedGmx,
    stakedGlp,
    vestedGmx,
    vestedGlp
];
//# sourceMappingURL=mummy-farms.js.map