import { ChainId, getProvider, getReadContract, getWriteContract } from "./chains";
import { Tokens as Tokens_ } from "./tokens";

export const Tokens = Tokens_;
export const Chains = {
    ChainId,
    getProvider,
    getReadContract,
    getWriteContract,
}