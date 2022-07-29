import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter'
import {node_url, accounts} from './utils/network';
// require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
  },
  networks: {
    rinkeby: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
    polygon: {
      url: node_url('polygon'), 
      gasPrice: 50000000000,
      accounts: accounts('polygon'),
    },
    mumbai: {
      url: node_url('mumbai'),
      gasPrice: 50000000000,
      accounts: accounts('mumbai'),
    },
  },
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },
  paths: {
    sources: 'contracts',
    deploy: 'deploy',
    deployments: 'deployments',
    imports: 'imports',
  },
  etherscan: {
    // apiKey: process.env.ETHERSCAN_API_KEY,
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false, //enable disable gasReporter
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY
    // gasPrice: 40
  },
};
export default config;
