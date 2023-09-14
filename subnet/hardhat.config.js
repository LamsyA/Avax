require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
const { API_URL, PRIVATE_KEY ,PRIVATE_KEY_2, API_KEY} = process.env;
module.exports = {
  solidity: "0.8.18",
  networks: {
    subnet: {
      url: 'http://127.0.0.1:9650/ext/bc/2LvX2RePLbG3BYtw3ArPyLVsEGV72AppuNuyHCnTnGbVUMhvhs/rpc',  
        chainId: 12345567,
        accounts: [`0x${PRIVATE_KEY}`]
      },
      fuji: {
        url: 'https://api.avax-test.network/ext/bc/C/rpc',
        gasPrice: 225000000000,
        chainId: 43113,
        accounts: [`0x${PRIVATE_KEY_2}`
         
        ]
      },
  }
}