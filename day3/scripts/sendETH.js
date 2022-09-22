const hre = require("hardhat")
const { ethers, BigNumber } = require("ethers")

async function main() {
    const hardhatSigner = (await hre.ethers.getSigners())[0];

    const myBalance = await hardhatSigner.getBalance();

    console.log("My Balance", ethers.utils.formatEther(myBalance));

    const toAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

    console.log("Sending ETH to", toAddress);

    const tx = await hardhatSigner.sendTransaction({
        to: toAddress,
        value: myBalance.div(ethers.BigNumber.from("10")),
    });

    console.log("TX SENT!", tx.hash);

    await tx.wait();

    console.log("TX MINED!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });