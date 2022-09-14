import { ethers } from "ethers";
import { getProvider} from "./utils.js";
import sanfordNFTAbi from "./abi/sanfordNFTAbi.js";

const sanfordNFTAddress = "0x6e2756d5a4780c4d26de0a91f0c0af5ce77cbc34";
const rinkebyProvider = getProvider();

const sanfordContract = new ethers.Contract(
    sanfordNFTAddress, 
    sanfordNFTAbi, 
    rinkebyProvider
    );

    const mintPrice = await sanfordContract.MINT_PRICE();

    console.log("SanfordStout Mint Price in ETH:", ethers.utils.formatEther(mintPrice));