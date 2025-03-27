# Voting Smart Contract

## Description
The **Voting Smart Contract** is a Solidity-based decentralized voting system that allows users to cast votes securely and ensures fairness by restricting multiple votes per address. The contract supports multiple candidates, and the winner is determined based on the highest vote count.

## Features
- **Candidate Initialization**: Admin sets up candidates during contract deployment.
- **One Vote Per Address**: Ensures a fair voting process.
- **Admin Restrictions**: Prevents the admin from voting.
- **Winner Selection**: Determines the candidate with the most votes.

## Technologies Used
- **Solidity (0.8.0)**: Smart contract development.
- **Hardhat**: Development and testing framework.
- **Ethers.js**: Interaction with the Ethereum blockchain.
- **Chai**: Testing framework.

## File Structure

- **`contracts/voting.sol`**  
  Contains the Solidity smart contract implementation.

- **`scripts/deploy.js`**  
  Deploys the voting contract to a blockchain network.

- **`scripts/interact.js`**  
  Interacts with the deployed contract, allowing voting and fetching results.

- **`test/voting.test.js`**  
  Unit tests to ensure contract functionality.

- **`hardhat.config.js`**  
  Configuration file for Hardhat network settings.

- **`package.json`**  
  Defines dependencies and project metadata.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/voting-contract.git
   cd voting-contract
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start a local Hardhat network:
   ```sh
   npx hardhat node
   ```

## Deployment

Deploy the contract to the local network:
```sh
npx hardhat run scripts/deploy.js --network localhost
```

## Usage
1. **Deploy the contract** using the provided deployment script.
2. **Vote for a candidate** using the interaction script:
   ```sh
   npx hardhat run scripts/interact.js --network localhost
   ```
3. **Get the election winner** by calling the `getWinner` function.

## Running Tests

Run the contract tests:
```sh
npx hardhat test
```

## Future Enhancements
- Implement a **voting deadline**.
- Add **event logging** for better tracking.
- Deploy to a **testnet/mainnet** for real-world use.

## License
This project is licensed under the MIT License.

