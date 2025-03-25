const { expect } = require("chai");
const { ethers } = require("hardhat");

console.log("Test file is being executed!");

describe("voting Contract", function () {//mocca
    console.log("Test file is being executed!");

    let ss, sc;
    beforeEach(async function () {
        console.log("Test file is being executed!");
        [deployer, voter1] = await ethers.getSigners();
        ss = await ethers.getContractFactory("voting");
        const cnames = ["Naman", "Manan", "Namit"];
        sc = await ss.deploy(cnames);
        sc.deployed();
        console.log("voting deployed to:", sc.address);
    });

    it("who is the winner", async function () {
        await sc.connect(voter1).vote(0); 
        
        const winner = await sc.getWinner();
        expect(winner).to.equal("Naman");
    });
});