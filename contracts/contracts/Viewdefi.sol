pragma solidity >=0.5.0 <0.6.0;

import "./SafeMath.sol";
import "./Context.sol";
import "./MultiOwnable.sol";
import "./ERC20.sol";
import "./LP.sol";

contract ViewdefiFactory {
	event PoolCreated(address contractAddress, address owner, string name);

	function createPool(string calldata name) external {
		Viewdefi pool = new Viewdefi(name, msg.sender);
		emit PoolCreated(address(pool), msg.sender, name);
	}
}

contract Viewdefi is MultiOwnable {
	uint8 private constant POOL_OWNER = 4;
	uint8 private constant POOL_MANAGER = 3;

	using SafeMath for uint256;

    string _poolName;
	address private _LPTokenAddress;
	uint256 private _liquidity;

	constructor(string memory poolName, address owner) public {
	    _poolName = poolName;
		_addOwnership(owner, POOL_OWNER);
	}

	function addLiquidity(uint256 liquidity) public view returns (bool) {
	    _liquidity.add(liquidity);
		return true;
	}

    function removeLiquidity(uint256 liquidity) public view returns (bool) {
        _liquidity.sub(liquidity);
		return true;
	}

	function addPoolIndex(uint256 index) public onlyOwner(POOL_MANAGER) view returns (bool) {
		return true;
	}

    function addOwnership(
        address account,
        uint8 level
    ) public onlyOwner(POOL_OWNER) returns (bool) {
        _addOwnership(account, level);

        return true;
    }

    function deleteOwnership(
        address account
    ) public onlyOwner(POOL_OWNER) returns (bool) {
        _deleteOwnership(account);
        return true;
    }

    function transferOwnership(
        address oldOwner,
        address newOwner
    ) public onlyOwner(POOL_MANAGER) returns (bool) {
        _transferOwnership(oldOwner, newOwner);
        return true;
    }
}