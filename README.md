# Dynamic Reward System DApp

**Dynamic Reward System DApp** is a decentralized application (DApp) built on the Ethereum blockchain. It allows users to manage and view rewards dynamically through smart contracts deployed on the Ethereum network.

## Features

- **View Current Block Number**: Users can see the current block number on the Ethereum network.
- **Fetch Contract Data**: Users can retrieve various rewards data from the smart contract.
- **User Data**: The DApp allows querying of user-specific information related to rewards.

## Technologies Used

- **Solidity**: Smart contract programming language.
- **Hardhat**: Ethereum development environment for deploying and testing smart contracts.
- **React**: Frontend JavaScript library for building the user interface.
- **MetaMask**: Ethereum wallet integration for managing user accounts.
- **Ethers.js**: JavaScript library for interacting with the Ethereum blockchain.
- **Redux**: State management for React applications.

## Setup

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone <repository_url>
cd dynamic-reward-system
```

### 2. Install dependencies

```bash
cd frontend
yarn install
```

### 3. Start the local blockchain

Open a terminal and run:

```bash
npx hardhat node
```

### 4. Deploy the smart contract to the local blockchain

Open a second terminal and run:

```bash
npx hardhat run --network localhost scripts/deploy.js
```

### 5. Start the frontend development server

Open a third terminal and run:

```bash
yarn start
```

### 6. Open your browser

Go to **http://localhost:3000** to view the application.

## Usage

Connect MetaMask:

- Ensure MetaMask is installed in your browser.
- Connect MetaMask to the local blockchain network.

Interact with the DApp:

- Use the provided interface to view the current block number and contract data.
- Ensure sufficient Ether balance in your MetaMask wallet for transactions.

## Contributing

Contributions are welcome! Please follow these steps:  

1. Fork the repository.
2. Create a new branch (git checkout -b feature_branch).
3. Make modifications and commit changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature_branch).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENCE](https://github.com/komal769/ETHADV/blob/main/LICENSE) file for details.

## Acknowledgments

This project is inspired by various decentralized applications that showcase the power of blockchain technology and smart contracts.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your proposed changes.

## Contact

For questions or support, please contact [Komal](jangrakomal06@gmail.com).



