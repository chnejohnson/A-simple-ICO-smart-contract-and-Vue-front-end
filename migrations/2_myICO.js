const myICO = artifacts.require("myICO");

module.exports = function(deployer) {
  deployer.deploy(myICO);
};
