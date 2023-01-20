"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositInfo = void 0;
class DepositInfo {
    constructor(abi, address, token, tokenRewards, name, protocol, type, chainId) {
        this.abi = abi;
        this.address = address;
        this.tokenDetails = token;
        this.tokenDetailsRewards = tokenRewards;
        this.name = name;
        this.protocol = protocol;
        this.type = type;
        this.chainId = chainId;
    }
}
exports.DepositInfo = DepositInfo;
//# sourceMappingURL=deposit.js.map