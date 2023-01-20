import { ChainId } from '../chains';
import { Protocols, ProtocolTypes } from '../protocols/constants';
import { GmxStakeDepositInfoBase, GmxVestDepositInfoBase } from '../protocols/entities/gmx';
import { QiDaoFarmVaultDepositInfo } from '../protocols/entities/qidao';
import { TokenAmount, TokenDetails } from './tokens';

export interface ProtocolItem {
    pool: TokenDetails[];
    balance: TokenAmount[];
    rewards?: TokenAmount[];
    usdValue: number;
    address: string;
}

export interface ProtocolInfo {
    items?: ProtocolItem[];
    type: ProtocolTypes;
}

export interface Protocol {
    info: ProtocolInfo[];
    symbol: Protocols;
    chainId: ChainId;
    name: string;
}

export declare type GmxProtocolDeposit = GmxStakeDepositInfoBase | GmxVestDepositInfoBase;
export declare type QiDaoProtocolDeposit = QiDaoFarmVaultDepositInfo;