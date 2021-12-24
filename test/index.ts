import { expect } from "chai";
import { ethers } from "hardhat";
import ContractDeployerFactory from "../helpers/deploy";
import { CgsToken } from "../typechain";

const factory = new ContractDeployerFactory();
// For each smart contract you should call new global describe function
describe("CgsToken", () => {
  let instance: CgsToken;
  beforeEach(async () => {
    instance = (await factory
      .createContractDeployer("CgsToken", [1000])
      .deploy()) as CgsToken;
  });

  // For each smart contract method you should have describe inside of describe block related to that contract
  describe("helloWorld", () => {
    // Each `it` block represent use case of method and start from `should` phrase
    it("should set valueTest to call args on helloWorld call", async () => {
      await instance.helloWorld(99);
      expect(await instance.testValue()).to.equal(99);
    });
    // Example of testing errors
    it("should throw error if argument value more then 100", async () => {
      try {
        await instance.helloWorld(101);
      } catch (e: any) {
        expect(e.message.includes("V1")).to.equal(true);
      }
    });
    // Example of testing events
    it("should emit event and pass value from arguments into that", async () => {
      const actualArg = 1;
      instance.on("TestEvent", async (args: any) => {
        expect(args).to.equal(actualArg);
      });
      await instance.helloWorld(actualArg);
    });
  });
});
