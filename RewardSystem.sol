// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RewardSystem {
    struct User {
        uint256 totalContributions;
        uint256 rewardBalance;
    }

    mapping(address => User) public users;

    event ContributionMade(address indexed user, uint256 amount, string category);
    event RewardWithdrawn(address indexed user, uint256 reward);

    // Reward rates based on contribution category
    uint256 public baseReward = 10;
    uint256 public bonusReward = 50;

    // User makes a contribution
    function contribute(string memory category) public {
        uint256 reward = calculateReward(category);
        users[msg.sender].totalContributions += 1;
        users[msg.sender].rewardBalance += reward;

        emit ContributionMade(msg.sender, reward, category);
    }

    // Calculate reward based on the category
    function calculateReward(string memory category) internal view returns (uint256) {
        if (keccak256(abi.encodePacked(category)) == keccak256(abi.encodePacked("bonus"))) {
            return bonusReward;
        }
        return baseReward;
    }

    // User can withdraw their rewards
    function withdrawReward() public {
        uint256 reward = users[msg.sender].rewardBalance;
        require(reward > 0, "No rewards available");

        users[msg.sender].rewardBalance = 0;

        // Send the reward to the user (for simplicity, using dummy reward mechanism)
        payable(msg.sender).transfer(reward);

        emit RewardWithdrawn(msg.sender, reward);
    }

    // Function to fund the contract (owner can send Ether to the contract)
    receive() external payable {}
}
