"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chains = exports.Tokens = void 0;
const chains_1 = require("./chains");
const tokens_1 = require("./tokens");
exports.Tokens = tokens_1.Tokens;
exports.Chains = {
    ChainId: chains_1.ChainId,
    getProvider: chains_1.getProvider,
    getReadContract: chains_1.getReadContract,
    getWriteContract: chains_1.getWriteContract,
};
//# sourceMappingURL=index.js.map