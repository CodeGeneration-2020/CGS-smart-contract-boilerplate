import { SimpleNFT } from "./../typechain/SimpleNFT.d";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import ContractDeployerFactory from "../helpers/deploy";
import { CgsNFT } from "../typechain";

async function main() {
  const factory = new ContractDeployerFactory();
  const instance = await factory.createContractDeployer("CgsNFT", []).deploy();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
