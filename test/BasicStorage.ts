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

  // Test case to ensure setNumber() reverts when trying to store the same value
  it("Should revert when setting the same number", async function () {
    const initialNumber = 42; // Initial value for deployment

    // Deploy the contract
    const BasicStorage = await ethers.getContractFactory("BasicStorage");
    const contract = await BasicStorage.deploy(initialNumber);
    await contract.waitForDeployment();

    // Expect transaction to fail when trying to set the same number
    await expect(contract.setNumber(initialNumber)).to.be.revertedWith(
      "New number must be different"
    );
  });

  // Test case to ensure setNumber() reverts when trying to store zero
  it("Should revert when setting zero", async function () {
    const initialNumber = 42; // Initial value for deployment

    // Deploy the contract
    const BasicStorage = await ethers.getContractFactory("BasicStorage");
    const contract = await BasicStorage.deploy(initialNumber);
    await contract.waitForDeployment();

    // Expect transaction to fail when setting the number to zero
    await expect(contract.setNumber(0)).to.be.revertedWith(
      "Number must be greater than zero"
    );
  });
});
