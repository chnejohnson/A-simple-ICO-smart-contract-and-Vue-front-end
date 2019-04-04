## ICO ecosystem

### Introduction

The repo presents a simple combination of solidity and javascript.
It's composed of ERC20 for a Initial Coin Offering (ICO) smart contract in solidity and front-end html page with web3.js and Vue.js. Besides, my CSS framework uses Bulma, which is suitable for me to complete the small project like this.

To create a virtual blockchain nodes environment, I use Ganachi UI version to test the demo, using Tuffle to compile the smart contract and then migrate to the server from Ganache. Finally you can open html file and make sure you connecting to the localhost in main.js. Have fun to play and see how ICO works on the blockchain with this front-end interface!

### Get Started

To run this demo, you should download and install...

1. [node.js](https://nodejs.org/en/)
2. [Ganache CLI](https://truffleframework.com/ganache)
3. `npm install -g truffle` to install Truffle globally.

Then I would tell you how to run virtual nodes on your computer so that you can operate the demo on the front-end. First of all, open up Ganachi so that you have a 10 virtual nodes on your machine,and then you should compile the contracts and migrate to the Ganache server by Truffle.Open terminal in this project and run

`truffle compile` , 

if you succeed, you would see the folder named "build" in the project.
