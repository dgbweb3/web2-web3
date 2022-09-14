import "dotenv/config";
import { ethers } from "ethers";

// 1. Create a new wallet

// const wallet = ethers.Wallet.createRandom();

// console.log("address:", wallet.address);
// console.log("private key:", wallet.privateKey);
// console.log("mneonic:", wallet.mnemonic.phrase);

//------------------------------------------------------------------------------

// 2. Create 10 wallets from the same seed phrase

// let path, myWallet;

// for (let i=0; i<10; i++) {
//     path = `m/44'/60'/0'/0/${i}`;
//     myWallet = ethers.Wallet.fromMnemonic(wallet.mnemonic.phrase, path);
//     console.log("address", i, myWallet.address);
//     console.log("private key", i, myWallet.privateKey);
// }

//------------------------------------------------------------------------------

// 3. Create wallet from private key

// const wallet = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY);
// console.log("My wallet address (from private key)", wallet.address);

//------------------------------------------------------------------------------

// 4. 

// const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
// const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// const wallet = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY);
// // wallet.connect(provider);
// console.log("Is signer?", wallet._isSigner);

//------------------------------------------------------------------------------

// 5. 

// const infuraUrl = `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`;
// const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// const wallet = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY);
// // wallet.connect(provider);
// const signature = await wallet.signMessage("Hola!");
// console.log("Signed message", signature);

// const signerAddress = ethers.utils.verifyMessage("Hola", signature);
// console.log("signerAddress", signerAddress);

//------------------------------------------------------------------------------

// 6. Connect to Rinkeby and request faucet funds

// const rinkebyInfuraUrl = `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`;
// const provider = new ethers.providers.JsonRpcProvider(rinkebyInfuraUrl);

// const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY);
// await signer.connect(provider);

// console.log("Wallet Address", signer.address)

// console.log(
//     "Rinkeby balance",
//     ethers.utils.formatEther(await provider.getBalance(signer.address))
// );

//------------------------------------------------------------------------------

// 7.

// const rinkebyInfuraUrl = `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`;
// const mainnetInfuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
// const rinkebyProvider = new ethers.providers.JsonRpcProvider(rinkebyInfuraUrl);
// const mainnetProvider = new ethers.providers.JsonRpcProvider(mainnetInfuraUrl);


// const signer = new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, rinkebyProvider);
// const myBalance = await rinkebyProvider.getBalance(signer.address);

// console.log("Rinkeby balance", ethers.utils.formatEther(myBalance));

// const dgbweb3Address = await mainnetProvider.resolveName("dgbweb3.eth");

// console.log("Sending ETH to", dgbweb3Address);

// const tx = await signer.sendTransaction({
//     to: dgbweb3Address,
//     value: myBalance.div(ethers.BigNumber.from("10")),
// });

// console.log("TX SENT!", tx);

// await tx.wait();

// console.log("TX CONFIRMED!");