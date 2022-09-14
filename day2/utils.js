import "dotenv/config";
import { ethers } from "ethers"

const getProvider = (mainnet = false) => {
    const providerUrl = mainnet
        ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
        : `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`;

    return new ethers.providers.JsonRpcProvider(providerUrl);
};

const generateNewWallet = () => {
    // 0x0291c6a2202CA59cFC21EE10cf31E4525434cFe8
    const wallet = ethers.Wallet.createRandom();

    console.log("address:", wallet.address);
    console.log("private key:", wallet.privateKey);
    console.log("mneonic:", wallet.mnemonic.phrase);
};

const getSigner = (mainnet = false) => {
    const provider = getProvider(mainnet);

    return new ethers.Wallet(process.env.MY_WALLET_PRIVATE_KEY, provider)
};

// es6 module syntax
export { getProvider, getSigner, generateNewWallet };

// const signer = getSigner();
// console.log("signer", await signer.getAddress());

// generateNewWallet();

// const provider = getProvider();
// console.log("Provider", await provider.getNetwork());
