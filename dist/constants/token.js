"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenTypesData = exports.TokenTypes = void 0;
var TokenTypes;
(function (TokenTypes) {
    TokenTypes["UNUSED"] = "UNUSED";
    TokenTypes["DAI"] = "DAI";
    TokenTypes["BUSD"] = "BUSD";
    TokenTypes["USDT"] = "USDT";
    TokenTypes["USDC"] = "USDC";
    TokenTypes["BNB"] = "BNB";
    TokenTypes["ETH"] = "ETH";
    TokenTypes["MATIC"] = "MATIC";
    TokenTypes["METIS"] = "METIS";
    TokenTypes["BTC"] = "BTC";
    TokenTypes["ADA"] = "ADA";
    TokenTypes["FTM"] = "FTM";
    TokenTypes["AVAX"] = "AVAX";
    TokenTypes["MAI"] = "MAI";
    TokenTypes["CRV"] = "CRV";
    TokenTypes["QI"] = "QI";
    TokenTypes["HND"] = "HND";
    TokenTypes["DHV"] = "DHV";
    TokenTypes["BIFI"] = "BIFI";
    TokenTypes["SYN"] = "SYN";
    TokenTypes["SNX"] = "SNX";
    TokenTypes["KNC"] = "KNC";
    TokenTypes["MMY"] = "MMY";
    TokenTypes["GMX"] = "GMX";
    TokenTypes["esGMX"] = "esGMX";
    TokenTypes["QUICK"] = "QUICK";
    TokenTypes["GNO"] = "GNO";
    TokenTypes["USDPLUS"] = "USD+";
    TokenTypes["HUM"] = "HUM";
    TokenTypes["OP"] = "OP";
    TokenTypes["THE"] = "THE";
})(TokenTypes = exports.TokenTypes || (exports.TokenTypes = {}));
exports.tokenTypesData = {
    'UNUSED': {
        isStable: false,
        coingeckoName: ''
    },
    'DAI': {
        isStable: true,
        coingeckoName: 'dai'
    },
    'BUSD': {
        isStable: true,
        coingeckoName: 'binance-usd'
    },
    'USDT': {
        isStable: true,
        coingeckoName: 'tether'
    },
    'USDC': {
        isStable: true,
        coingeckoName: 'usd-coin'
    },
    'BNB': {
        isStable: false,
        coingeckoName: 'binancecoin'
    },
    'ETH': {
        isStable: false,
        coingeckoName: 'ethereum'
    },
    'MATIC': {
        isStable: false,
        coingeckoName: 'matic-network'
    },
    'BTC': {
        isStable: false,
        coingeckoName: 'bitcoin'
    },
    'ADA': {
        isStable: false,
        coingeckoName: 'cardano'
    },
    'FTM': {
        isStable: false,
        coingeckoName: 'fantom'
    },
    'AVAX': {
        isStable: false,
        coingeckoName: 'avalanche-2'
    },
    'MAI': {
        isStable: false,
        coingeckoName: 'mimatic'
    },
    'CRV': {
        isStable: false,
        coingeckoName: 'curve-dao-token'
    },
    'QI': {
        isStable: false,
        coingeckoName: 'qi-dao'
    },
    'HND': {
        isStable: false,
        coingeckoName: 'hundred-finance'
    },
    'DHV': {
        isStable: false,
        coingeckoName: 'dehive'
    },
    'BIFI': {
        isStable: false,
        coingeckoName: 'beefy-finance'
    },
    'SYN': {
        isStable: false,
        coingeckoName: 'synapse-2'
    },
    'SNX': {
        isStable: false,
        coingeckoName: 'havven'
    },
    'KNC': {
        isStable: false,
        coingeckoName: 'kyber-network-crystal'
    },
    'MMY': {
        isStable: false,
        coingeckoName: 'mummy-finance'
    },
    'GMX': {
        isStable: false,
        coingeckoName: 'gmx'
    },
    'esGMX': {
        isStable: false,
        coingeckoName: 'gmx'
    },
    'QUICK': {
        isStable: false,
        coingeckoName: 'quickswap'
    },
    'GNO': {
        isStable: false,
        coingeckoName: 'gnosis'
    },
    'USD+': {
        isStable: false,
        coingeckoName: 'usd'
    },
    'METIS': {
        isStable: false,
        coingeckoName: 'metis-token'
    },
    'HUM': {
        isStable: false,
        coingeckoName: 'hummus'
    },
    'OP': {
        isStable: false,
        coingeckoName: 'optimism'
    },
    'THE': {
        isStable: false,
        coingeckoName: ''
    }
};
//# sourceMappingURL=token.js.map