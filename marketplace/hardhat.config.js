require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = "34035eb2f003cff237158e4b1e8e9e15e9d75d7343dc2eabc066ea7dab4d1e13";

module.exports = {
  solidity: "0.8.4",
  polygonscan: {
    apiKey: "GE4V3SUS98BZR1146IN6X91EWJ16HA59IZ",
  },

  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  networks: {
    amoy: {
      chainId: 80002,
      url: `https://polygon-amoy.g.alchemy.com/v2/7EtZEaQrQfVCU8oQ26d7gTSGwz_WqU_I`,
      accounts: [PRIVATE_KEY],
    },
    polygonpos: {
      chainId: 137,
      url: `https://polygon-mainnet.g.alchemy.com/v2/7EtZEaQrQfVCU8oQ26d7gTSGwz_WqU_I`,
      accounts: [PRIVATE_KEY],
    },
    hardhat: {
      chainId: 1337 // Hardhat default chain ID for local network
    },
    localhost: {
      url: "http://127.0.0.1:8545", // URL for local Hardhat node
      chainId: 1337
    },
    // If you plan to deploy to Infura testnets later:
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID`,
    //   accounts: [`0x${YOUR_PRIVATE_KEY}`]
    // }
  },
};
