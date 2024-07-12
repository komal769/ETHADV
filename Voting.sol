// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Voting {
    address public owner;
    mapping(string => uint256) public votes;
    string[] public candidates;

    event Voted(string candidate, uint256 votes);

    constructor(string[] memory _candidates) {
        owner = msg.sender;
        candidates = _candidates;
    }

    function vote(string memory _candidate) public {
        require(isValidCandidate(_candidate), "Not a valid candidate.");
        votes[_candidate]++;
        emit Voted(_candidate, votes[_candidate]);
    }

    function getVotes(string memory _candidate) public view returns (uint256) {
        require(isValidCandidate(_candidate), "Not a valid candidate.");
        return votes[_candidate];
    }

    function isValidCandidate(string memory _candidate) internal view returns (bool) {
        for (uint i = 0; i < candidates.length; i++) {
            if (keccak256(bytes(candidates[i])) == keccak256(bytes(_candidate))) {
                return true;
            }
        }
        return false;
    }
}

