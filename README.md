# Basic Smart Contract

This project demonstrates a simple Ethereum smart contract for storing and retrieving a numerical value on the blockchain. It covers essential smart contract concepts such as state variables, functions, and blockchain interaction, making it an ideal starting point for Solidity development.

## What is a Smart Contract?

A smart contract is a self-executing program that runs on a blockchain. It:

- Contains **code (functions)** and **data (state)**.
- Executes **automatically** when conditions are met.
- Cannot be modified once deployed (**immutable**).
- Runs **decentralized** on the blockchain.

## Running a Local Ethereum Network

You can start a local Ethereum network using Hardhat by running:

```sh
npx hardhat node
```

### What Happens?

- A local Ethereum blockchain is launched for testing.
- Multiple accounts are automatically created.
- Each account is pre-funded with test ETH.
- Private keys for these accounts are displayed, allowing interaction via scripts or wallets.

### Why is this useful?

- Test smart contracts without real ETH.
- Simulate multiple users (e.g., owner, buyer, seller).
- Run transactions locally before deploying to a live network.

⚠️ **Never use these private keys on a real network.**

## Deploying the Smart Contract

To deploy the contract to the local Hardhat network, run:

```sh
npx hardhat run scripts/deploy.ts --network localhost
```

### What Happens?

- The smart contract is compiled and deployed to the local blockchain.
- A contract address is generated.
- You can interact with the contract using this address.

## Interacting with the Smart Contract

### Open Hardhat Console

```sh
npx hardhat console --network localhost
```

### Load the Contract

```js
const contract = await ethers.getContractAt(
  "BasicStorage",
  "<DEPLOYED_CONTRACT_ADDRESS>"
);
```

Replace `<DEPLOYED_CONTRACT_ADDRESS>` with your actual contract address from deployment.

### Read the Stored Value

```js
await contract.getNumber();
```

### Update the Stored Value

```js
await contract.setNumber(99);
```

### Verify the Change

```js
await contract.getNumber();
```

It should now return `99`.

## Running Tests

To ensure the smart contract works correctly, you can run automated tests using Hardhat.

### Running the Tests

Run the following command:

```sh
npx hardhat test
```

### What These Tests Do

- ✅ **First Test**: Ensures the contract is deployed with the correct initial value.
- ✅ **Second Test**: Verifies that `setNumber()` correctly updates the stored value.

If successful, the output should show:

```
BasicStorage
  ✔ Should deploy the contract with an initial value
  ✔ Should update the stored number

2 passing (1s)
```

These tests help confirm that the contract behaves as expected before deploying to a live network.

## Continuous Integration (CI/CD) for Testing

This project includes **GitHub Actions** workflows for automated testing:

### **1. Automated Tests on Push & PR (`ci.yml`)**

- Runs tests **automatically** when you push changes to `main` or `dev`.
- Ensures that any updates do not break existing functionality.
- Tests are executed using **Node.js 22** in a GitHub Actions workflow.

### **2. Manual Test Execution (`ci-manual.yml`)**

- Allows **manually running tests** from the GitHub Actions UI.
- Useful for verifying changes before pushing them.

### **How to Trigger Manual Tests?**

1. Go to the **GitHub Actions** tab.
2. Select **Run Hardhat Tests (Manual)**.
3. Click **Run workflow**.

This ensures that smart contracts are thoroughly tested before deployment.
