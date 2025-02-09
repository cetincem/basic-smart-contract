// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BasicStorage {
    uint256 private storedNumber; // State variable stored permanently on-chain

    /// @notice Constructor sets an initial number when deploying the contract
    /// @dev The value passed here is stored on-chain during deployment
    /// @param _initialNumber The initial value to store
    constructor(uint256 _initialNumber) {
        storedNumber = _initialNumber; // Initializing state variable
    }

    /// @notice Retrieves the stored number
    /// @dev This function is marked `view` because it does not modify state
    /// @return The stored number
    function getNumber() public view returns (uint256) {
        // `view` functions are read-only, so calling this does not cost gas
        return storedNumber;
    }

    /// @notice Updates the stored number with a new value
    /// @dev This function modifies blockchain state, so it requires a transaction (costs gas)
    /// @param _newNumber The new value to store
    function setNumber(uint256 _newNumber) public {
        // Writing to storage is expensive, as it modifies blockchain state permanently
        storedNumber = _newNumber;
    }
}
