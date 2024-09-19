import React, { useEffect, useState } from 'react';
import { JsonRpcProvider, Contract } from 'ethers';
import './App.css'; // Ensure you have this CSS file or remove this line if not needed

function App() {
  const [blockNumber, setBlockNumber] = useState(null);
  const [contractData, setContractData] = useState(null);

  useEffect(() => {
    // Setup provider
    const provider = new JsonRpcProvider(process.env.REACT_APP_ETHEREUM_NODE_URL || 'http://localhost:8545');

    // Fetch block number
    provider.getBlockNumber()
      .then(number => {
        setBlockNumber(number);
      })
      .catch(error => {
        console.error('Error fetching block number:', error);
      });

    // Example contract usage
    const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
    const contractABI = [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "category",
            "type": "string"
          }
        ],
        "name": "ContributionMade",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "reward",
            "type": "uint256"
          }
        ],
        "name": "RewardWithdrawn",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "baseReward",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "bonusReward",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          }
        ],
        "name": "contribute",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "users",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalContributions",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rewardBalance",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdrawReward",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "stateMutability": "payable",
        "type": "receive"
      }
    ];

    const contract = new Contract(contractAddress, contractABI, provider);

    // Fetch contract data
    const fetchContractData = async () => {
      try {
        console.log("Fetching base reward...");
        const baseReward = await contract.baseReward();
        
        console.log("Fetching bonus reward...");
        const bonusReward = await contract.bonusReward();
        
        console.log("Fetching user data...");
        const usersData = await contract.users('0x70997970C51812dc3A010C7d01b50e0d17dc79C8'); // Replace with your address
    
        // Convert BigInt values to strings for serialization
        setContractData({
          baseReward: baseReward.toString(),
          bonusReward: bonusReward.toString(),
          usersData: {
            totalContributions: usersData[0].toString(),
            rewardBalance: usersData[1].toString(),
          },
        });
      } catch (error) {
        console.error('Error calling contract method:', error);
      }
    };
    

    fetchContractData();
  }, []);

  return (
    <div className="App">
      <h1>Current Block Number</h1>
      <p>{blockNumber !== null ? blockNumber : 'Loading...'}</p>
      <h2>Contract Data</h2>
      <p>{contractData !== null ? JSON.stringify(contractData) : 'Loadingg...'}</p>
    </div>
  );
}

export default App;

