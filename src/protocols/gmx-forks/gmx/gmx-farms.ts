import { Tokens } from "../../../tokens";
import { GmxProtocolDeposit } from "../../../types/protocols";
import { GmxStakeDepositInfo, GmxVestDepositInfo } from "../../entities/gmx";

export const fGlpAddress = '0x4e971a87900b931fF39d1Aad67697F49835400b6';
export const fGmxAddress = '0xd2D1162512F927a7e282Ef43a362659E4F2a728F';
export const rewardRouterAddress = '0xa906f338cb21815cbc4bc87ace9e68c87ef8d8f1';

const stakedGmx = new GmxStakeDepositInfo('Staked GMX', Tokens.arbitrum.sGMX, fGmxAddress);
const stakedGlp = new GmxStakeDepositInfo('Staked GLP', Tokens.arbitrum.fsGLP, fGlpAddress);
const vestedGmx = new GmxVestDepositInfo('Vesting GMX', Tokens.arbitrum.vGLP);
const vestedGlp = new GmxVestDepositInfo('Vesting GLP', Tokens.arbitrum.vGMX);

export const gmxFarms: GmxProtocolDeposit[] = [
    stakedGmx,
    stakedGlp,
    vestedGmx,
    vestedGlp
];