pragma solidity >=0.5.0 <0.6.0;

import "./SafeMath.sol";
import "./Context.sol";
import "./ERC20.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract ViewdefiFactory {
	event PoolCreated(address contractAddress);

	function createPool() external {
		Viewdefi pool = new Viewdefi();
		emit PoolCreated(address(pool));
	}
}

contract Viewdefi {
	using SafeMath for uint256;

	address private LPTokenAddress;
	uint256 private liquidity;

	constructor() public {
		
	}
}