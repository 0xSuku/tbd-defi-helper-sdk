import { BigNumber, ethers } from "ethers";
import { ChainId, getReadContract } from "../../chains";
import { TokenDetails } from "../../types/tokens";
import { Protocols, ProtocolTypes } from "../constants";
import { DepositInfo } from "./deposit";
import { gaugeV2ABI } from "../solidly-forks/solidly-abis";
import { Tokens } from "../../tokens";

export class SolidlyGaugeV2DepositInfoBase extends DepositInfo {
    constructor(p: {
        name: string,
        protocol: Protocols,
        chainId: ChainId,
        contractAddress: string,
        tokenDetailsVault: TokenDetails,
        tokenDetailsRewards: TokenDetails
    }) {
        super(gaugeV2ABI, p.contractAddress, p.tokenDetailsVault, p.tokenDetailsRewards, p.name, p.protocol, ProtocolTypes.Farms, p.chainId);

        this.contract = getReadContract(this.chainId, this.address, JSON.stringify(this.abi));
    }

    contract: ethers.Contract;

    async getDepositAmount(address: string): Promise<BigNumber> {
        return await this.contract.balanceOf(address);
    }

    async getRewardsAmount(address: string): Promise<BigNumber> {
        return await this.contract.earned(address);
    }
}

export class ThenaGaugeV2DepositInfo extends SolidlyGaugeV2DepositInfoBase {
    constructor(p: {
        name: string,
        contractAddress: string,
        tokenDetailsVault: TokenDetails,
    }) {
        super({
            chainId: ChainId.BNB,
            contractAddress: p.contractAddress,
            name: p.name,
            protocol: Protocols.Thena,
            tokenDetailsRewards: Tokens.bnb.THE,
            tokenDetailsVault: p.tokenDetailsVault
        });
    }
}