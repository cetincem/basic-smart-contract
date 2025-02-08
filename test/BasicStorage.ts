import { ethers } from "hardhat";
import { expect } from "chai";

describe("BasicStorage", function () {
  it("Should deploy the contract with an initial value", async function () {
    const initialNumber = 42;
    const BasicStorage = await ethers.getContractFactory("BasicStorage");
    const contract = await BasicStorage.deploy(initialNumber);
    await contract.waitForDeployment();

    expect(await contract.getNumber()).to.equal(initialNumber);
  });

  it("Should update the stored number", async function () {
    const initialNumber = 42;
    const newNumber = 99;
    const BasicStorage = await ethers.getContractFactory("BasicStorage");
    const contract = await BasicStorage.deploy(initialNumber);
    await contract.waitForDeployment();

    await contract.setNumber(newNumber);
    expect(await contract.getNumber()).to.equal(newNumber);
  });
});
