// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BasicStorage {
    uint256 private storedNumber;

    constructor(uint256 _initialNumber) {
        storedNumber = _initialNumber;
    }

    function getNumber() public view returns (uint256) {
        return storedNumber;
    }

    function setNumber(uint256 _newNumber) public {
        storedNumber = _newNumber;
    }
}
