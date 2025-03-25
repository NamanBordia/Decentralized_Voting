// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract voting {
    struct Candidate {
        string name;
        uint count;
    }

    address public admin;
    mapping(address => bool) public hasVoted;
    Candidate[] public candidates;

    constructor (string[] memory _names) {
        admin = msg.sender;
        for (uint256 i = 0; i < _names.length; i++) {
            candidates.push(Candidate(_names[i], 0));
        }
    }

    function vote(uint ci) public {
        require(msg.sender != admin, "u are admin");
        require(!hasVoted[msg.sender], "already voted!");
        require(ci < candidates.length, "invalid index");

        hasVoted[msg.sender] =true;
        candidates[ci].count +=1;
    }

    function getWinner() public view returns (string memory) {
        require(candidates.length > 0, "No candidates are there");

        uint max = 0;
        for (uint i = 1; i < candidates.length; i++) { 
            if (candidates[i].count > candidates[max].count) {
                max = i;
            }
        }
        return candidates[max].name;
    }
}
