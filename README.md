# SCM-STARTER

**scm-starter** is a decentralized application (DApp) built using Ethereum blockchain technology. It allows users to interact with a smart contract deployed on the Ethereum network to perform basic functions.

## Features

- **View Balance**: Users can view their account balance stored in the smart contract.
- **Deposit**: Users can deposit Ether into the smart contract.
- **Withdraw**: Users can withdraw Ether from the smart contract.

## Technologies Used

- **Solidity**: Smart contract programming language.
- **Hardhat**: Ethereum development environment.
- **React**: Frontend JavaScript library.
- **MetaMask**: Ethereum wallet integration.
- **Web3.js / Ethers.js**: Ethereum JavaScript libraries for interaction with smart contracts.

## Setup

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone <repository_url>
cd scm-starter
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
npm run dev
```

### 6. Open your browser

Go to **http://localhost:3000** to view the application.

## Usage

Connect MetaMask:

- Ensure MetaMask is installed in your browser.
- Connect MetaMask to the local blockchain network.
