"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MummyVestDepositInfo = exports.GmxVestDepositInfo = exports.GmxVestDepositInfoBase = exports.MummyStakeDepositInfo = exports.GmxStakeDepositInfo = exports.GmxStakeDepositInfoBase = void 0;
const chains_1 = require("../../chains");
const tokens_1 = require("../../tokens");
const constants_1 = require("../constants");
const gmx_abis_1 = require("../gmx-forks/gmx-abis");
const deposit_1 = require("./deposit");
class GmxStakeDepositInfoBase extends deposit_1.DepositInfo {
    constructor(name, protocol, chainId, tokenDetailsStake, tokenDetailsRewards, tokenDetailsFeeRewards, feeStakeTokenAddress) {
        super(gmx_abis_1.stakerABI, tokenDetailsStake.token.address, tokenDetailsStake, tokenDetailsRewards, name, protocol, constants_1.ProtocolTypes.Staking, chainId);
        this.tokenFeeRewards = tokenDetailsFeeRewards;
        this.feeStakeTokenAddress = feeStakeTokenAddress;
    }
}
exports.GmxStakeDepositInfoBase = GmxStakeDepositInfoBase;
class GmxStakeDepositInfo extends GmxStakeDepositInfoBase {
    constructor(name, tokenDetailsStake, feeStakeTokenAddress) {
        super(name, constants_1.Protocols.GMX, chains_1.ChainId.Arbitrum, tokenDetailsStake, tokens_1.Tokens.arbitrum.GMX, tokens_1.Tokens.arbitrum.WETH, feeStakeTokenAddress);
    }
}
exports.GmxStakeDepositInfo = GmxStakeDepositInfo;
class MummyStakeDepositInfo extends GmxStakeDepositInfoBase {
    constructor(name, tokenDetailsStake, feeStakeTokenAddress) {
        super(name, constants_1.Protocols.Mummy, chains_1.ChainId.Fantom, tokenDetailsStake, tokens_1.Tokens.fantom.MMY, tokens_1.Tokens.fantom.WFTM, feeStakeTokenAddress);
    }
}
exports.MummyStakeDepositInfo = MummyStakeDepositInfo;
class GmxVestDepositInfoBase extends deposit_1.DepositInfo {
    constructor(name, protocol, chainId, tokenDetailsVest, tokenDetailsRewards) {
        super(gmx_abis_1.vesterABI, tokenDetailsVest.token.address, tokenDetailsVest, tokenDetailsRewards, name, protocol, constants_1.ProtocolTypes.Vesting, chainId);
    }
}
exports.GmxVestDepositInfoBase = GmxVestDepositInfoBase;
class GmxVestDepositInfo extends GmxVestDepositInfoBase {
    constructor(name, tokenDetailsVest) {
        super(name, constants_1.Protocols.GMX, chains_1.ChainId.Arbitrum, tokenDetailsVest, tokens_1.Tokens.arbitrum.GMX);
    }
}
exports.GmxVestDepositInfo = GmxVestDepositInfo;
class MummyVestDepositInfo extends GmxVestDepositInfoBase {
    constructor(name, tokenDetailsVest) {
        super(name, constants_1.Protocols.Mummy, chains_1.ChainId.Fantom, tokenDetailsVest, tokens_1.Tokens.fantom.MMY);
    }
}
exports.MummyVestDepositInfo = MummyVestDepositInfo;
//# sourceMappingURL=gmx.js.map