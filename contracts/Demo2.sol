// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ABC2 {
    event Echo(string message);

    function echo(string calldata message) external {
        emit Echo(message);
    }
}