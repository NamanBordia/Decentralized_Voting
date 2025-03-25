require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.0",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545", 
        },
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/VXrsduTm4N_WCnsM6QNlRJupkBUzDK9W",
            accounts: ["0x890b94e8a3d90f074109414872450c49b3dfa26a7e998d2a13ea6edb5eb66452",
                        "7bf07f519b95eea1f3c21ce15990ec0b449d539cbd482d26c6536d4b852413f9"]
        }
    },
};