// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Auction {
    address public owner;
    string public item;
    uint256 public highestBid;
    address public highestBidder;
    uint256 public endAt;
    bool public ended;

    mapping(address => uint256) public bids;

    event NewBid(address indexed bidder, uint256 amount);
    event AuctionEnded(address winner, uint256 amount);

    constructor(string memory _item, uint256 _startingBid, uint256 _duration) {
        owner = msg.sender;
        item = _item;
        highestBid = _startingBid;
        endAt = block.timestamp + _duration;
    }

    function bid() external payable {
        require(block.timestamp < endAt, "Auction ended.");
        require(msg.value > highestBid, "There already is a higher bid.");

        if (highestBid != 0) {
            bids[highestBidder] += highestBid;
        }

        highestBid = msg.value;
        highestBidder = msg.sender;
        emit NewBid(msg.sender, msg.value);
    }

    function withdraw() external returns (bool) {
        uint256 amount = bids[msg.sender];
        require(amount > 0, "No funds to withdraw.");

        bids[msg.sender] = 0;

        if (!payable(msg.sender).send(amount)) {
            bids[msg.sender] = amount;
            return false;
        }
        return true;
    }

    function endAuction() external {
        require(block.timestamp >= endAt, "Auction not yet ended.");
        require(!ended, "Auction already ended.");

        ended = true;
        emit AuctionEnded(highestBidder, highestBid);

        // Transfer the highest bid to the owner
        payable(owner).transfer(highestBid);
    }
}
