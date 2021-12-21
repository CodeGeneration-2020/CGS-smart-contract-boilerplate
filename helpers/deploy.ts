import { ethers } from "hardhat";
import { ILogger, ContractNames } from "../types";

export class ContractDeployer {
  currentNetwork: string | undefined;
  constructor(
    private contactName: ContractNames,
    private args: any[] = [],
    private logger: ILogger
  ) {
    this.currentNetwork = process.env.HARDHAT_NETWORK;
  }

  async deploy() {
    try {
      const Contract = await ethers.getContractFactory(this.contactName);
      // eslint-disable-next-line prefer-spread
      const deploy = await Contract.deploy.apply(Contract, this.args as any);
      await deploy.deployed();
      this.logger.log(
        `
        ✅ ${this.contactName} has been deployed to network: ${this.currentNetwork}. \n
        Address: ${deploy.address}
        `
      );
      return deploy;
    } catch (e: any) {
      this.logger.error(
        `
        🆘 ${this.contactName} has not been deployed to network: ${this.currentNetwork}. \n
        Reason: ${e.message}
        `
      );
      throw e;
    }
  }
}

export default class ContractDeployerFactory {
  constructor(private logger: ILogger = console) {}

  public createContractDeployer(
    contactName: ContractNames,
    args: any[]
  ): ContractDeployer {
    return new ContractDeployer(contactName, args, this.logger);
  }
}
