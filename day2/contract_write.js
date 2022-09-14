import { ethers } from "ethers";
import { getSigner } from "./utils.js";
import sanfordNFTAbi from "./abi/sanfordNFTAbi.js";

const sanfordNFTAddress = "0x6e2756d5a4780c4d26de0a91f0c0af5ce77cbc34";
const rinkebySigner = getSigner();

const sanfordContract = new ethers.Contract(
    sanfordNFTAddress, 
    sanfordNFTAbi, 
    rinkebySigner
    );

    const mintPrice = await sanfordContract.MINT_PRICE();

    console.log("SanfordStout Mint Price in ETH:", ethers.utils.formatEther(mintPrice));

    console.log("Minting NFT...");

    const mintTx = await sanfordContract.mint({
        value: mintPrice,
    });

    console.log("TX Sent", mintTx.hash);

    await mintTx.wait();

    console.log("TX Mined");