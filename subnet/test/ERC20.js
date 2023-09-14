const { expect } = require("chai");
const hre = require("hardhat");
// const { ethers } = require("hardhat");

describe("ERC20", function () {
  let erc20;

  // Deploy a new ERC20 token before each test
  beforeEach(async function () {
    const ERC20 = await hre.ethers.deployContract("ERC20");
    erc20 = await ERC20.waitForDeployment()
    // await erc20.waitForDeployment();
  });

  it("Should have the correct name, symbol, and decimals", async function () {
    expect(await erc20.name()).to.equal("Solidity by Example");
    expect(await erc20.symbol()).to.equal("SOLBYEX");
    expect(await erc20.decimals()).to.equal(18n);
  });

  it("Should mint tokens correctly", async function () {
    await erc20.mint(100); // Mint 100 tokens to the deployer
    const balance = await erc20.balanceOf(await ethers.provider.getSigner(0).address);
    expect(balance).to.equal(100);
  });

  it("Should burn tokens correctly", async function () {
    await erc20.mint(100); // Mint 100 tokens to the deployer
    await erc20.burn(50); // Burn 50 tokens
    const balance = await erc20.balanceOf(await ethers.provider.getSigner(0).address);
    expect(balance).to.equal(50n);
  });

  it("Should transfer tokens correctly", async function () {
    await erc20.mint(100); // Mint 100 tokens to the deployer
    const sender = await ethers.provider.getSigner(0);
    const receiver = await ethers.provider.getSigner(1);
    await erc20.connect(sender).transfer(await receiver.getAddress(), 50); // Transfer 50 tokens
    const senderBalance = await erc20.balanceOf(await sender.getAddress());
    const receiverBalance = await erc20.balanceOf(await receiver.getAddress());
    expect(senderBalance).to.equal(50);
    expect(receiverBalance).to.equal(50);
  });

  it("Should approve and transferFrom tokens correctly", async function () {
    await erc20.mint(100); // Mint 100 tokens to the deployer
    const sender = await ethers.provider.getSigner(0);
    const receiver = await ethers.provider.getSigner(1);
    await erc20.connect(sender).approve(await receiver.getAddress(), 50); // Approve 50 tokens
    await erc20.connect(receiver).transferFrom(await sender.getAddress(), await receiver.getAddress(), 50); // Transfer 50 tokens from sender to receiver
    const senderBalance = await erc20.balanceOf(await sender.getAddress());
    const receiverBalance = await erc20.balanceOf(await receiver.getAddress());
    expect(senderBalance).to.equal(50);
    expect(receiverBalance).to.equal(50);
  });

  it("Should not allow transferFrom if allowance is insufficient", async function () {
    await erc20.mint(100); // Mint 100 tokens to the deployer
    const sender = await ethers.provider.getSigner(0);
    const receiver = await ethers.provider.getSigner(1);
    await erc20.connect(sender).approve(await receiver.getAddress(), 40); // Approve 40 tokens
    await expect(
      erc20.connect(receiver).transferFrom(await sender.getAddress(), await receiver.getAddress(), 50) // Try to transfer 50 tokens from sender to receiver
    ).to.be.reverted;
    ("ERC20: transfer amount exceeds allowance");
  });
});
