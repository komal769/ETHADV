async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const Auction = await ethers.getContractFactory("Auction");
    const auction = await Auction.deploy("My Awesome Item", ethers.utils.parseEther("0.1"), 600); // 600 seconds duration

    console.log("Auction contract deployed to:", auction.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
