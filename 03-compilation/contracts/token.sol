// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    string public name = "My Token";
    string public symbol = "MTK";
    uint public totalSupply = 10000;

    address public owner;
    mapping (address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply; //giving all of the supply of tokens to contract caller
        owner = msg.sender; //assigning the contract caller to the owner.
    }

    function transfer(address to, uint supply) external {
        require(balances[msg.sender] >= supply, "Not enough tokens"); //Checking if the contract caller has enough amount to be sent to the given address
        balances[msg.sender] -= supply; //Subtracting the current tokens of contract caller from the required transfereable tokens
        balances[to] += supply; //Adding the required transferable tokens to the specified address
    }

    function balanceOf(address acc) external view returns (uint) {
        return balances[acc]; //returning the balances of the specified address to contract caller
    }
}