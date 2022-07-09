import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {

    window.ethereum.request({ method: "eth_requestAccounts" });

    web3 = new Web3(window.ethereum);
} else {
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/e74aebcb315d408089b16cb32f4e5f69"
      );
      web3 = new Web3(provider);
    }
     
export default web3;

//   // A Web3Provider wraps a standard Web3 provider, which is
// // what MetaMask injects as window.ethereum into each page
// const provider = new ethers.providers.Web3Provider(window.ethereum)

// // MetaMask requires requesting permission to connect users accounts
// await provider.send("eth_requestAccounts", []);

// // The MetaMask plugin also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, you need the account signer...
// const signer = provider.getSigner()