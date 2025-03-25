// Import Hardhat runtime environment
const hre = require("hardhat");

async function main() {
    const ss = await hre.ethers.getContractFactory("voting");
    const cnames = ["Naman", "Manan", "Namit"];

    const sc = await ss.deploy(cnames);

    await sc.deployed();

    console.log("voting deployed to:", sc.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
  