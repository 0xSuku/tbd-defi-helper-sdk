import { ChainId } from "../../chains";
import { Tokens } from "../../tokens";
import { TokenDetails } from "../../types/tokens";
import { Protocols, ProtocolTypes } from "../constants";
import { stakerABI, vesterABI } from "../gmx-forks/gmx-abis";
import { DepositInfo } from "./deposit";

export class GmxStakeDepositInfoBase extends DepositInfo {
    constructor(
        name: string,
        protocol: Protocols,
        chainId: ChainId,
        tokenDetailsStake: TokenDetails,
        tokenDetailsRewards: TokenDetails,
        tokenDetailsFeeRewards: TokenDetails,
        feeStakeTokenAddress: string,
    ) {
        super(stakerABI, tokenDetailsStake.token.address, tokenDetailsStake, tokenDetailsRewards, name, protocol, ProtocolTypes.Staking, chainId);

        this.tokenFeeRewards = tokenDetailsFeeRewards;
        this.feeStakeTokenAddress = feeStakeTokenAddress;
    }

    tokenFeeRewards: TokenDetails;
    feeStakeTokenAddress: string;
}

export class GmxStakeDepositInfo extends GmxStakeDepositInfoBase {
    constructor(
        name: string,
        tokenDetailsStake: TokenDetails,
        feeStakeTokenAddress: string,
    ) {
        super(name, Protocols.GMX, ChainId.Arbitrum, tokenDetailsStake, Tokens.arbitrum.GMX, Tokens.arbitrum.WETH, feeStakeTokenAddress);
    }
}

export class MummyStakeDepositInfo extends GmxStakeDepositInfoBase {
    constructor(
        name: string,
        tokenDetailsStake: TokenDetails,
        feeStakeTokenAddress: string,
    ) {
        super(name, Protocols.Mummy, ChainId.Fantom, tokenDetailsStake, Tokens.fantom.MMY, Tokens.fantom.WFTM, feeStakeTokenAddress);
    }
}

export class GmxVestDepositInfoBase extends DepositInfo {
    constructor(
        name: string,
        protocol: Protocols,
        chainId: ChainId,
        tokenDetailsVest: TokenDetails,
        tokenDetailsRewards: TokenDetails
    ) {
        super(vesterABI, tokenDetailsVest.token.address, tokenDetailsVest, tokenDetailsRewards, name, protocol, ProtocolTypes.Vesting, chainId);
    }
}

export class GmxVestDepositInfo extends GmxVestDepositInfoBase {
    constructor(
        name: string,
        tokenDetailsVest: TokenDetails,
    ) {
        super(name, Protocols.GMX, ChainId.Arbitrum, tokenDetailsVest, Tokens.arbitrum.GMX);
    }
}

export class MummyVestDepositInfo extends GmxVestDepositInfoBase {
    constructor(
        name: string,
        tokenDetailsVest: TokenDetails,
    ) {
        super(name, Protocols.Mummy, ChainId.Fantom, tokenDetailsVest, Tokens.fantom.MMY);
    }
}