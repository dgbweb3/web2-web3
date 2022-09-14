import { ethers } from "ethers";
import { getSigner } from "./utils.js";
import sanfordNFTAbi from "./abi/sanfordNFTAbi.js";

const sanfordNFTAddress = "0x6e2756d5a4780c4d26de0a91f0c0af5ce77cbc34";
const rinkebySigner = getSigner();

const mintPrice = ethers.utils.parseEther("0.01");

const mintCalldata = "0x1249c58b";

console.log("Minting NFT...");

const mintTx = await rinkebySigner.sendTransaction({
    to: sanfordNFTAddress,
    value: mintPrice,
    data: mintCalldata,
    nonce: 4,
    gasPrice: 10000000000,
});

console.log("TX Sent", mintTx.hash);

await mintTx.wait();

console.log("TX Mined");