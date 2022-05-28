# EtheriumNFTCreationGuide
A step by step on the creation of NFTS as well as some answers to common development questions

There are a million guides out there. Writting my own to cement my own understanding

## Questions
- How to create a new project
- How to unit test
- How to deploy to a test network
- How to deploy to the main net
- How to integrate a web application with our contract
- How to run the entire workflow locally
- How to create a metamask account, and why?
- What are Etherium protocals, which one should I choose
- How much will this cost? An explanation of Gas

## Learning Resources
### Etherium Devlopment
- Offical Documentation: https://ethereum.org/en/developers/docs/

### Solidity
- Offical Documentation: https://docs.soliditylang.org/en/v0.8.14/#
- Best Tutorial: https://cryptozombies.io/

## Tooling
### Frameworks
Most common Frameworks are **Truffle** and **Hardhat**

Both are libraries that can be installed globally on your computer via package managers. See included .md files with Truffle and Hardhat guides.

### IDEs
- Remix
    - [Link To Page](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js)
    - Very user friendly and great for beginners
    - Supported right in your web browser so no additional tools needed
    - can compile and deploy to test nets and main net!

- Visual Studio Code

### Steps to getting contract on the block chain
 1. Write code
 2. Compile code
 3. Compiled code is stored in Project Artifacts
 4. Test Code, unit tests reference compiled code in Artifacts

