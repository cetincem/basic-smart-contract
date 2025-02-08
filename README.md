# Basic Smart Contract

This project demonstrates a simple Ethereum smart contract for storing and retrieving a numerical value on the blockchain. It covers essential smart contract concepts such as state variables, functions, and blockchain interaction, making it an ideal starting point for Solidity development.

## What is a Smart Contract?

A smart contract is a self-executing program that runs on a blockchain. It:

- Contains **code (functions)** and **data (state)**.
- Executes **automatically** when conditions are met.
- Cannot be modified once deployed (**immutable**).
- Runs **decentralized** on the blockchain.

---

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

---

## Deploying the Smart Contract

To deploy the contract to the local Hardhat network, run:

```sh
npx hardhat run scripts/deploy.ts --network localhost
```

### What Happens?

- The smart contract is compiled and deployed to the local blockchain.
- A contract address is generated.
- You can interact with the contract using this address.

---

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

---
