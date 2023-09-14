

# AVALANCHE SUBNET
This repository contains the code for setting up your DeFi Kingdom clone on the Avalanche EVM subnet. It includes smart contracts for an ERC20 token, a vault, and basic configurations for the Avalanche EVM subnet using Hardhat.


## Prerequisites

Before you get started, make sure you have the following:

- Node.js and npm installed on your local machine.
- A text editor or integrated development environment (IDE) of your choice.
- Metamask or a similar Ethereum wallet extension for your web browser.
- Solidity smart contract development knowledge.

## Compatibility
Avalanche-CLI runs on Linux and Mac. Windows is currently not supported.

For Windows user:

Install WSL (it works fine on WSL)



## nstall the Avalanche CLI tool


The fastest way to install the latest Avalanche-CLI binary is by running the install script:


```
curl -sSfL https://raw.githubusercontent.com/ava-labs/avalanche-cli/main/scripts/install.sh | sh -s

```



windows user should run WSL Ubuntu as adminstrator before 

running the above synthax 

## Checking Your Installation
You can test your installation by running

``` avalanche --version.``` The tool should print the running version.



## Create a new subnet

Once you have the Avalanche CLI installed, you can create a new subnet by running the command avalanche subnet create tokenSubnet (you can name it anything) in your terminal. 

This will create a new subnet with the name ```"tokenSubnet"  ```on your local machine.


## Select the EVM Subnet option and configure

 When creating a new subnet, you will be prompted to select a subnet type. Choose the SubnetEVM option to create an EVM Subnet on your local machine and follow the steps in the image below:


```
avalanche subnet create tokenSubnet
Attempted to check if a new version is available, but couldn't find the currently running version information
Make sure to follow official instructions, or automatic updates won't be available for you
✔ Subnet-EVM
creating subnet tokenSubnet
Enter your subnet's ChainId. It can be any positive integer.
ChainId: 12345567
Select a symbol for your subnet's native token
Token symbol: TSN
✔ Use latest version
✔ Low disk use    / Low Throughput    1.5 mil gas/s (C-Chain's setting)
✔ Airdrop 1 million tokens to the default address (do not use in production)
✔ No
```



## Deploy the subnet

 After selecting the EVM Subnet option, you can deploy the subnet by running the command
 ``` avalanche subnet deploy tokenSubnet``` 
 and selecting to deploy your subnet on your local network. This will deploy your new EVM Subnet on your local machine.


 ## View subnet details
  Once your EVM Subnet is deployed, the console will display all the details about the subnet you just created. You can use this information to interact with the subnet and start building your smart-contract protocol.
  
# Connecting to Metamask



Open Metamask on your web browser.

Go to Networks > Add a network > Add a network manually.



Enter the details provided by the Avalanche CLI.

  ```
  
  Browser Extension connection details (any node URL from above works):
RPC URL:          http://127.0.0.1:9650/ext/bc/2LvX2RePLbG3BYtw3ArPyLVsEGV72AppuNuyHCnTnGbVUMhvhs/rpc
Funded address:   0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC with 1000000 (10^18) - private key: 56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027
Network name:     tokenSubnet
Chain ID:         12345567
Currency Symbol:  TSN 

```

Click on "Save" to add the subnet to Metamask.












## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/LamsyA/Avax.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Avax
   cd subnet
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and add the following environment variables:

   ```
   API_URL=<Avalanche API URL>
   PRIVATE_KEY=<Your Private Key for Subnet>
   PRIVATE_KEY_2=<Your Private Key for Fuji Testnet>
   
   ```

   Make sure to replace the placeholders with your actual Avalanche API URL, private keys, and API key.

## Configuration

In the `hardhat.config.js` file, you can find the network configurations for the Avalanche EVM subnet and the Fuji Testnet. Ensure that the network URLs, gas prices, and chain IDs are correctly set according to your requirements.

## Usage

- To deploy your ERC20 token and vault contracts, you can use Avalanch and Remix for smart contract development.

- To interact with your contracts and test your application, you can use Remix 

- Make sure to connect your Metamask wallet to the Avalanche EVM subnet by following the setup steps mentioned in the project documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Avalanche Documentation](https://docs.avax.network/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/4.x/)

## Resources

- [Avalanche Official Website](https://www.avax.network/)
- [Hardhat Documentation](https://hardhat.org/)
- [Remix Ethereum IDE](https://remix.ethereum.org/)

---
