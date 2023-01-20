"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokens = void 0;
const natives_1 = __importDefault(require("./natives"));
const polygon_1 = __importDefault(require("./polygon"));
const fantom_1 = __importDefault(require("./fantom"));
const arbitrum_1 = __importDefault(require("./arbitrum"));
const ethereum_1 = __importDefault(require("./ethereum"));
const avalanche_1 = __importDefault(require("./avalanche"));
const bnb_1 = __importDefault(require("./bnb"));
const gnosis_1 = __importDefault(require("./gnosis"));
const optimism_1 = __importDefault(require("./optimism"));
const metis_1 = __importDefault(require("./metis"));
exports.Tokens = {
    ethereum: ethereum_1.default,
    optimism: optimism_1.default,
    bnb: bnb_1.default,
    gnosis: gnosis_1.default,
    polygon: polygon_1.default,
    fantom: fantom_1.default,
    metis: metis_1.default,
    arbitrum: arbitrum_1.default,
    avalanche: avalanche_1.default,
    nativeTokens: natives_1.default
};
//# sourceMappingURL=index.js.map