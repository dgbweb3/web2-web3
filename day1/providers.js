import "dotenv/config";
import { ethers } from "ethers";


const infuraUrl = `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// 1.

// console.log("Current block number" , await provider.getBlockNumber());

// 2.

// console.log("dgbweb3.eth is" , await provider.resolveName("dgbweb3.eth"));

// 3.

// console.log(
//     "0x893d57464C8FcF1fb6DE20276d9e3A6376DBB9c6 is" ,
//     await provider.lookupAddress("0x893d57464C8FcF1fb6DE20276d9e3A6376DBB9c6")
//     );

// 4.

// console.log(
//     "dgbweb3.eth has",
//     (await provider.getBalance("dgbweb3.eth")).toString()
// );

// 5.

// console.log(
//     "1.5 ETH is",
//     ethers.utils.formatEther(ethers.utils.parseEther("1.5"))
// );


// const dgbweb3Balance = await provider.getBalance("dgbweb3.eth");
// let sanfordBalance = await provider.getBalance("sanfordstout.eth");

// sanfordBalance = sanfordBalance.add(ethers.utils.parseEther("5000"));

// console.log("sanford balance", ethers.utils.formatEther(sanfordBalance));
// console.log("dgbweb3 balance", ethers.utils.formatEther(dgbweb3Balance));

// if(dgbweb3Balance.gt(sanfordBalance)) {
//     console.log("Dgbweb3 has more ETH than Sanford");
// } else {
//     console.log("Sanford has more ETH than Dgbweb3");
// }


