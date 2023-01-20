"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QiDaoFarmVaultDepositInfo = void 0;
const constants_1 = require("../constants");
const deposit_1 = require("./deposit");
const qidao_abis_1 = require("../qidao/qidao-abis");
class QiDaoFarmVaultDepositInfo extends deposit_1.DepositInfo {
    constructor(p) {
        super(qidao_abis_1.qiFarmABI, p.contractAddress, p.tokenDetailsVault, p.tokenDetailsRewards, p.name, p.protocol, constants_1.ProtocolTypes.Farms, p.chainId);
        this.vaultId = p.vaultId;
    }
}
exports.QiDaoFarmVaultDepositInfo = QiDaoFarmVaultDepositInfo;
//# sourceMappingURL=qidao.js.map