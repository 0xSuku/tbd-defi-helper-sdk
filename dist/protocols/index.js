"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chains_1 = require("../chains");
const constants_1 = require("./constants");
const protocolList = [
    {
        symbol: constants_1.Protocols.Qi_Dao,
        name: 'Qi Dao',
        chainId: chains_1.ChainId.Polygon,
        info: []
    }, {
        symbol: constants_1.Protocols.Mummy,
        name: 'Mummy Finance',
        chainId: chains_1.ChainId.Fantom,
        info: []
    }, {
        symbol: constants_1.Protocols.GMX,
        name: 'GMX',
        chainId: chains_1.ChainId.Arbitrum,
        info: []
    }, {
        symbol: constants_1.Protocols.Thena,
        name: 'Thena',
        chainId: chains_1.ChainId.BNB,
        info: []
    }
];
exports.default = protocolList;
//# sourceMappingURL=index.js.map