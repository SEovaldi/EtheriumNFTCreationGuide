// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, artifacts } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Nobles = await ethers.getContractFactory("Nobles");
  const nobles = await Nobles.deploy();

  await nobles.deployed();

  // saveABI();
  saveDataToFrontEnd(nobles.address);
  // saveContractAddress(nobles.address);

  console.log("Nobles deployed to:", nobles.address);
  //0x1602B388C7a7Cf971579200FC880a804842fe54B
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

function saveDataToFrontEnd(address: string) {
  const fs = require("fs");

  const abiDir = __dirname +  process.env.FRONTEND_ABI_STORAGE_PATH;
  const contractAddressDir = __dirname +  process.env.FRONTEND_CONTRACT_ADDRESS_PATH;

  if (!fs.existsSync(abiDir)) {
    fs.mkdirSync(abiDir);
  }

  if (!fs.existsSync(contractAddressDir)) {
    fs.mkdirSync(contractAddressDir);
  }

  const artifact = artifacts.readArtifactSync("Nobles");

  fs.writeFileSync(
    abiDir + "/Nobles.json",
    JSON.stringify(artifact, null, 2)
  );

  const contractAddresses = {
    address: address
  };

  fs.writeFileSync(
    contractAddressDir + "/contractAddresses.json",
    JSON.stringify(contractAddresses, null, 2)
  );
}
