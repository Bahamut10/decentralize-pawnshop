// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Base contract for access control
contract Ownable {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }
}

// Tokenized Property Contract inheriting from Ownable
contract TokenizedPawn is Ownable {
    uint256 public totalShares;
    uint256 public value = 0.0001 ether;
    mapping(address => uint256) public shares;

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event SharesTransferred(
        address indexed from,
        address indexed to,
        uint256 amount
    );
    event SharesPurchased(address indexed buyer, uint256 amount);
    event Withdrawal(address indexed owner, uint256 amount);

    constructor( uint256 _totalShares) {
        totalShares = _totalShares;
        shares[msg.sender] = _totalShares; // Owner starts with all shares
    }


    function transferShares(address to, uint256 amount) public {
        require(shares[msg.sender] >= amount, "Insufficient shares");
        require(to != address(0), "Invalid address");

        shares[msg.sender] -= amount; // Effects
        shares[to] += amount;

        emit SharesTransferred(msg.sender, to, amount); // Interaction
    }

    function buyShares(uint256 amount) public payable {
        uint256 sharesToBuy = amount; // Example conversion rate
        require(shares[owner] >= sharesToBuy, "Not enough shares available");

        shares[owner] -= sharesToBuy; // Effects
        shares[msg.sender] += sharesToBuy;

        emit SharesPurchased(msg.sender, sharesToBuy); // Interaction
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;

        (bool success, ) = payable(owner).call{value: balance}("");
        require(success, "Transfer failed");

        emit Withdrawal(owner, balance);
    }

    receive() external payable {}
}