// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require('fs')

async function main() {


  const erc20 = await hre.ethers.deployContract("ERC20");

  await erc20.waitForDeployment();

  const address = JSON.stringify({ address: erc20.target }, null, 4)
fs.writeFileSync('./contractAddress.json', address, 'utf8', (err) => {
  if (err) {
    console.error(err)
    return
  }
})
console.log('Deployed contract address', erc20.target)
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});