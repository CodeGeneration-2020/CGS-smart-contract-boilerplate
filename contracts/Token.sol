
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CgsToken is ERC20 {
    uint256 public testValue;
    event TestEvent(uint256 amount);
    constructor(uint256 _initialSupply) ERC20("CGSToken", "CGST") {
        _mint(msg.sender, _initialSupply);
    }

    function helloWorld(uint256 value) public returns(uint256) {
        // Keep error messages as short as you can to save transaction cost
        require(value < 100, "V1");
        testValue = value;
        emit TestEvent(value);
        return value;
    } 
}
