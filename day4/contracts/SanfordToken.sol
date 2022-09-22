// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SanfordToken {
    event Buy(address indexed buyer);

    uint256 public constant totalSupply = 1000;
    uint256 public totalCreated = 0;

    uint256 public constant CREATION_PRICE = 0.01 ether;

    address public immutable boss;

    mapping(address => uint256) public balances;
    struct Vote {
        address voter;
        bool selection;
    }

    constructor() {
        boss = msg.sender;
    }

    modifier onlyBoss() {
        require(msg.sender == boss, "Sorry, not the boss");
        _;
    }

    function create(uint256 quantity) public onlyBoss {
        require(quantity + totalCreated <= totalSupply, "Total Supply reached!");

        balances[msg.sender] += quantity;
        totalCreated += quantity;
    }

    function create(uint256 quantity) public {
        require(quantity + totalCreated <= totalSupply, "Total Supply reached!");

        balances[msg.sender] += quantity;
        totalCreated += quantity;
    }

    function send(address to, uint256 quantity) public {
        require(balances[msg.sender] >= quantity, "Not enough");

        balances[msg.sender] -= quantity;
        balances[to] += quantity;
    }

    function buy() public payable {
        require(msg.value == CREATION_PRICE, "Incorrect ETH Amount");
        require(totalCreated < totalSupply, "Total supply reached!");

        balances[msg.sender] += 1;
        totalCreated += 1;

        emit Buy(msg.sender);
    }
}
