# Basi Smart Contract

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

Use these accounts for development and testing, but **never use the private keys on a real network**.
