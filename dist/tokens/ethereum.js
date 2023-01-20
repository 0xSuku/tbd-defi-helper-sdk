"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../chains");
const token_1 = require("../constants/token");
const ethereum = {
    CRV: {
        token: new sdk_core_1.Token(chains_1.ChainId.Ethereum, '0xD533a949740bb3306d119CC777fa900bA034cd52', 18, 'CRV', 'CRV'),
        tokenInfo: token_1.TokenTypes.CRV,
    },
    USDC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Ethereum, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 6, 'USDC', 'USDC'),
        tokenInfo: token_1.TokenTypes.USDC,
    },
    SNX: {
        token: new sdk_core_1.Token(chains_1.ChainId.Ethereum, '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f', 18, 'SNX', 'SNX'),
        tokenInfo: token_1.TokenTypes.SNX,
    },
};
exports.default = ethereum;
//# sourceMappingURL=ethereum.js.map