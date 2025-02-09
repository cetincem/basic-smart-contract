import { ethers } from "hardhat";
import { expect } from "chai";

describe("BasicStorage", function () {
  // Test case to check if the contract deploys correctly with an initial value
  it("Should deploy the contract with an initial value", async function () {
    const initialNumber = 42; // Initial value to be stored in the contract

    // Get the contract factory for BasicStorage
    const BasicStorage = await ethers.getContractFactory("BasicStorage");

    // Deploy the contract with the initial number
    const contract = await BasicStorage.deploy(initialNumber);
    await contract.waitForDeployment(); // Ensures the contract is deployed before interacting

    // Verify that the stored value matches the initial number
    expect(await contract.getNumber()).to.equal(initialNumber);
  });

  // Test case to check if the contract allows updating the stored number
  it("Should update the stored number", async function () {
    const initialNumber = 42; // Initial value for deployment
    const newNumber = 99; // New value to be set in the contract

    // Deploy the contract
    const BasicStorage = await ethers.getContractFactory("BasicStorage");
    const contract = await BasicStorage.deploy(initialNumber);
    await contract.waitForDeployment();

    // Call setNumber to update the stored value
    await contract.setNumber(newNumber);

    // Verify that the stored value has been updated successfully
    expect(await contract.getNumber()).to.equal(newNumber);
  });
});
