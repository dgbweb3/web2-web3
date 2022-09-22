import { BigNumber, ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

const mainnetProvider = getProvider(true);
const rinkebySigner = getSigner();

const myBalance = await rinkebySigner.getBalance();

console.log("My Balance", ethers.utils.formatEther(myBalance));

console.log(rinkebySigner.address);
