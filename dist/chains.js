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
exports.getWriteContract = exports.getReadContract = exports.getProvider = exports.ChainId = exports.RPC_METIS = exports.RPC_ARBITRUM = exports.RPC_OPTIMISM = exports.RPC_AVALANCHE = exports.RPC_FTM = exports.RPC_MILKOMEDA = exports.RPC_GNOSIS = exports.RPC_BSC = exports.RPC_POLYGON = exports.RPC_ETHEREUM = void 0;
const ethers_1 = require("ethers");
require("dotenv/config");
exports.RPC_ETHEREUM = process.env.RPC_ETHEREUM;
exports.RPC_POLYGON = process.env.RPC_POLYGON;
exports.RPC_BSC = process.env.RPC_BSC;
exports.RPC_GNOSIS = process.env.RPC_GNOSIS;
exports.RPC_MILKOMEDA = process.env.RPC_MILKOMEDA;
exports.RPC_FTM = process.env.RPC_FTM;
exports.RPC_AVALANCHE = process.env.RPC_AVALANCHE;
exports.RPC_OPTIMISM = process.env.RPC_OPTIMISM;
exports.RPC_ARBITRUM = process.env.RPC_ARBITRUM;
exports.RPC_METIS = process.env.RPC_METIS;
var ChainId;
(function (ChainId) {
    ChainId[ChainId["Ethereum"] = 1] = "Ethereum";
    ChainId[ChainId["Optimism"] = 10] = "Optimism";
    ChainId[ChainId["BNB"] = 56] = "BNB";
    ChainId[ChainId["Gnosis"] = 100] = "Gnosis";
    ChainId[ChainId["Polygon"] = 137] = "Polygon";
    ChainId[ChainId["Fantom"] = 250] = "Fantom";
    ChainId[ChainId["Metis"] = 1088] = "Metis";
    ChainId[ChainId["Milkomeda"] = 2001] = "Milkomeda";
    ChainId[ChainId["Arbitrum"] = 42161] = "Arbitrum";
    ChainId[ChainId["Avalanche"] = 43114] = "Avalanche";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
function getProvider(chainId) {
    switch (chainId) {
        case ChainId.Ethereum:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_ETHEREUM);
        case ChainId.Optimism:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_OPTIMISM);
        case ChainId.BNB:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_BSC);
        case ChainId.Gnosis:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_GNOSIS);
        case ChainId.Polygon:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_POLYGON);
        case ChainId.Fantom:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_FTM);
        case ChainId.Metis:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_METIS);
        case ChainId.Milkomeda:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_MILKOMEDA);
        case ChainId.Arbitrum:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_ARBITRUM);
        case ChainId.Avalanche:
            return ethers_1.ethers.providers.getDefaultProvider(exports.RPC_AVALANCHE);
        default:
            throw new Error('Provider not implemented');
    }
}
exports.getProvider = getProvider;
function getReadContract(chainId, address, abi) {
    const provider = getProvider(chainId);
    return new ethers_1.ethers.Contract(address, abi, provider);
}
exports.getReadContract = getReadContract;
function getWriteContract(chainId, address, abi) {
    return __awaiter(this, void 0, void 0, function* () {
        const _window = window;
        if (!_window.ethereum)
            return null;
        if (_window.ethereum.chainId !== chainId) {
            yield _window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x' + chainId.toString(16) }],
            });
        }
        const provider = new ethers_1.ethers.providers.Web3Provider(_window.ethereum);
        return new ethers_1.ethers.Contract(address, abi, provider.getSigner());
    });
}
exports.getWriteContract = getWriteContract;
//# sourceMappingURL=chains.js.map