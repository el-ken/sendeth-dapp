
require("@nomiclabs/hardhat-waffle");

//** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/JgDkUtvn9Dgt-nVxGpWn1hZSOcPb2D8J', 
      accounts: ['9d53f279ede30b8c7928b31d0d3dad9c9f4e7d253f1dc1a21c2ff19825ee066a'] 
    }
  },
};
