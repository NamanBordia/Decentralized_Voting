const hre = require("hardhat");

async function main() {
    const [deployer, voter1] = await hre.ethers.getSigners();
    const deployedAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; 

    const Voting = await hre.ethers.getContractAt("voting", deployedAddress);

    console.log("Interacting with deployed Voting contract at:", deployedAddress);

    const voteTx1 = await Voting.connect(voter1).vote(0);
    await voteTx1.wait();
    console.log(`${voter1.address} voted for candidate 0`);

    

    const winner = await Voting.getWinner();
    console.log("Winner is:", winner);
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
