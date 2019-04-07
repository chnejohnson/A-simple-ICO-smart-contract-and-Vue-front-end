## ICO front-end Interface

### Introduction

The repo presents a simple combination of solidity and javascript.
It's composed of ERC20 for a Initial Coin Offering (ICO) smart contract in solidity and front-end html page with web3.js and Vue.js. Besides, my CSS framework uses Bulma, which is suitable for me to complete the small project like this.

To create a virtual blockchain nodes environment, I use Ganachi UI version to test the demo, using Tuffle to compile the smart contract and then migrate to the server from Ganache. Finally you can open html file and make sure you connecting to the localhost in main.js. Have fun to play and see how ICO works on the blockchain with this front-end interface!

### Get Started

To run this demo, you should download and install...

1. [node.js](https://nodejs.org/en/)
2. [Ganache CLI](https://truffleframework.com/ganache)
3. run `npm install -g truffle` on your terminal to install Truffle globally.

Then I would tell you how to run virtual nodes on your computer so that you can operate the demo on the front-end. First of all, open up Ganachi so that you have 10 virtual nodes on your machine, and then you should compile the contracts and migrate  to the Ganache server by Truffle. Open up terminal in the project and run

`truffle compile` , 

if you succeed, you would see the folder named "build" in the project, and then you can run...

`truffle migrate` or `truffle migrate --reset` (if you have had folder named 'build')

This code would migrate the contract to the Ganache nodes server, deploying the contract on the blockchain.

Finally, the first address of Ganache would be the owner of myICO contract. Now in the Front-End folder, you can open up index.html on the browser, and use address on the Ganache to buy the token, transfer to others, or explore what function approve (or transferFrom) do. Have a fun!

