// scripts/deploy.js

async function main() {
    // Get the contract factory
    const RewardSystem = await ethers.getContractFactory("RewardSystem");
  
    // Deploy the contract
    const rewardSystem = await RewardSystem.deploy();
  
    // Wait for the deployment to be confirmed
    await rewardSystem.deployed();
  
    // Log the contract address
    console.log("RewardSystem deployed to:", rewardSystem.address);
  }
  
  // Run the script and handle errors
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
