require("@nomiclabs/hardhat-waffle");
const { privateKey } = require("./secret.json");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${projectId}`,
    //   accounts: [privateKey]
    // }
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/KjRvdRyUg-6Y3GHuz5UOBgGrRXsTKiZH",
      accounts: [privateKey],
    },
  },
};
