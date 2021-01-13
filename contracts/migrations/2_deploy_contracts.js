const Viewdefi = artifacts.require("Viewdefi");
const ViewdefiFactory = artifacts.require("ViewdefiFactory");

module.exports = function(deployer) {
  deployer.deploy(ViewdefiFactory);
  deployer.deploy(Viewdefi);
};
