import { BigNumber, ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

const mainnetProvider = getProvider(true);
const rinkebySigner = getSigner();

const myBalance = await rinkebySigner.getBalance();

console.log("My Balance", ethers.utils.formatEther(myBalance));

const dgbweb3Address = await mainnetProvider.resolveName("dgbweb3.eth");

console.log("Sending ETH to", dgbweb3Address);

const tx = await rinkebySigner.sendTransaction({
    to: dgbweb3Address,
    value: myBalance.div(ethers.BigNumber.from("10")),
});

console.log("TX SENT!", tx.hash);

await tx.wait();

console.log("TX MINED!");