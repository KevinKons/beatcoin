const DappToken = artifacts.require("Beatcoin");

module.exports = function (deployer) {
  deployer.deploy(DappToken, 1000000);
};
