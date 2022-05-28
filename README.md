# EtheriumNFTCreationGuide
A step by step on the creation of NFTS as well as some answers to common development questions

There are a million guides out there. Writting my own to cement my own understanding

## Questions to answer
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
Most common Frameworks are **Truffle**, **Hardhat**, and **Remix**

Truffle and Hardhat are libraries that can be installed globally on your computer via package managers. **See included .md files with Truffle and Hardhat guides.**

Remix is an all in one framework delivered through an internet browser.

The community's difficulty curve consensus from easiest to hardest seems to be
 - Remix => Truffle => Hardhat

Where Remix is great for quickly prototyping out a smart contract or for new people learning to explore concepts

And Truffle/Hardhat are better when building out more complex contracts as they include useful tools that allow for debugging, the ever powerful **console.log()**, and more. Although all three have plugin support that can fill in the holes of missing functionality.

- Heres a good [article](https://theblockchainguy.dev/hardhat-vs-truffle-vs-remix) that outlines the differences further

All three have roughly the same user popularity percentages and all three can be used for most use cases so it really comes down to preference.

### IDEs
- Remix
    - [Link To Page](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js)
    - [Solid Tutorial](https://www.youtube.com/watch?v=bZKVfXmzRDw&ab_channel=ArturChmaro)
    - Very user friendly and great for beginners
    - Supported right in your web browser so no additional tools needed
    - can compile and deploy to test nets and main net!

- Visual Studio Code

### Steps to getting contract on the block chain
 1. Write code
 2. Compile code
 3. Compiled code is stored in Project Artifacts
 4. Test Code, unit tests reference compiled code in Artifacts
 5. Deploy code to actual test networks such as Rinkeby and validate
 6. Finally Deploy to Main net

 ### View your contract on the block chain
 You can view important details about deployed Smart Contracts or even individual Wallet Accounts such as Ether balances and transaction histories through tools. This includes Test Networks! The most popular for the Ethereum network is Etherscan.
 - Etherscan
    - Main Net: https://etherscan.io/
    - Rinkeby Test Network: https://rinkeby.etherscan.io/

