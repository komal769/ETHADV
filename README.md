# Auction DApp

**Auction DApp** is a decentralized application (DApp) built using Ethereum blockchain technology. It allows users to bid on items through a smart contract deployed on the Ethereum network.

## Features

- **Auction Item**: Users can view the item up for auction.
- **Place Bids**: Users can place bids on the auction item.
- **View Current Bid**: Users can see the highest bid placed on the item.

## Technologies Used

- **Solidity**: Smart contract programming language.
- **Hardhat**: Ethereum development environment.
- **React**: Frontend JavaScript library.
- **MetaMask**: Ethereum wallet integration.
- **Ethers.js**: Ethereum JavaScript library for interaction with smart contracts.
- **Redux**: State management for React.

## Setup

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone <repository_url>
cd auction-dapp
```

### 2. Install dependencies

```bash
npm install
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
npm start
```

### 6. Open your browser

Go to **http://localhost:3000** to view the application.

## Usage

Connect MetaMask:

- Ensure MetaMask is installed in your browser.
- Connect MetaMask to the local blockchain network.

Interact with the DApp:

- Use the provided interface to view the auction item and place bids.
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

This project was inspired by various auction platforms and blockchain applications that demonstrate the power of decentralized technologies.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your proposed changes.

## Contact

For questions or support, please contact [Komal](jangrakomal06@gmail.com).



