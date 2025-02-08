import { ethers } from "hardhat";

async function main() {
  const initialNumber = 42; // Initial value for storage

  const BasicStorage = await ethers.getContractFactory("BasicStorage");
  const contract = await BasicStorage.deploy(initialNumber);

  console.log("Deploying contract...");
  await contract.waitForDeployment();

  const contractAddress = await contract.getAddress();
  console.log(`BasicStorage deployed to: ${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
