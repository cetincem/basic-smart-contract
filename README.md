# Basi Smart Contract

## What is a Smart Contract?

A smart contract is a self-executing program that runs on a blockchain. It:

- Contains **code (functions)** and **data (state)**.
- Executes **automatically** when conditions are met.
- Cannot be modified once deployed (**immutable**).
- Runs **decentralized** on the blockchain.

## Hardhat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```
