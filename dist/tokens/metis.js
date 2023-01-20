"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_core_1 = require("@uniswap/sdk-core");
const chains_1 = require("../chains");
const token_1 = require("../constants/token");
const metis = {
    QI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Metis, '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d', 18, 'QI', 'Qi DAO'),
        tokenInfo: token_1.TokenTypes.QI,
    },
    USDC: {
        token: new sdk_core_1.Token(chains_1.ChainId.Metis, '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21', 6, 'm.USDC', 'm.USDC'),
        tokenInfo: token_1.TokenTypes.USDC,
    },
    MAI: {
        token: new sdk_core_1.Token(chains_1.ChainId.Metis, '0xdFA46478F9e5EA86d57387849598dbFB2e964b02', 18, 'MAI', 'MAI'),
        tokenInfo: token_1.TokenTypes.MAI,
    },
    HUM: {
        token: new sdk_core_1.Token(chains_1.ChainId.Metis, '0x4aAC94985cD83be30164DfE7e9AF7C054D7d2121', 18, 'HUM', 'HUM'),
        tokenInfo: token_1.TokenTypes.HUM,
    },
};
exports.default = metis;
//# sourceMappingURL=metis.js.map