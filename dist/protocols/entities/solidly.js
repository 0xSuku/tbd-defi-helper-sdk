"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThenaGaugeV2DepositInfo = exports.SolidlyGaugeV2DepositInfoBase = void 0;
const chains_1 = require("../../chains");
const constants_1 = require("../constants");
const deposit_1 = require("./deposit");
const solidly_abis_1 = require("../solidly-forks/solidly-abis");
const tokens_1 = require("../../tokens");
class SolidlyGaugeV2DepositInfoBase extends deposit_1.DepositInfo {
    constructor(p) {
        super(solidly_abis_1.gaugeV2ABI, p.contractAddress, p.tokenDetailsVault, p.tokenDetailsRewards, p.name, p.protocol, constants_1.ProtocolTypes.Farms, p.chainId);
        this.contract = (0, chains_1.getReadContract)(this.chainId, this.address, JSON.stringify(this.abi));
    }
    getDepositAmount(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.balanceOf(address);
        });
    }
    getRewardsAmount(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.contract.earned(address);
        });
    }
}
exports.SolidlyGaugeV2DepositInfoBase = SolidlyGaugeV2DepositInfoBase;
class ThenaGaugeV2DepositInfo extends SolidlyGaugeV2DepositInfoBase {
    constructor(p) {
        super({
            chainId: chains_1.ChainId.BNB,
            contractAddress: p.contractAddress,
            name: p.name,
            protocol: constants_1.Protocols.Thena,
            tokenDetailsRewards: tokens_1.Tokens.bnb.THE,
            tokenDetailsVault: p.tokenDetailsVault
        });
    }
}
exports.ThenaGaugeV2DepositInfo = ThenaGaugeV2DepositInfo;
//# sourceMappingURL=solidly.js.map