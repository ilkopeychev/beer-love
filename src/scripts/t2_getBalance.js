import { ethers } from "ethers";

// Connect to an existing Web3 provider (e.g. web3Instance.currentProvider).

// The network is also automatically detected if not specified;
// broken for Chrome
export const t2_getBalance = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  const account1Balance = await provider.getBalance(accounts[0]);
  return ethers.utils.formatEther(account1Balance);
};
