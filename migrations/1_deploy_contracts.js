// script use for deploy smartcontract on bloackchain

const ABC1 = artifacts.require("ABC1");
const ABC2 = artifacts.require("ABC2");

module.exports = function(deployer) {
  deployer.deploy(ABC1);
  deployer.deploy(ABC2);
};
