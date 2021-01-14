pragma solidity >=0.5.0 <0.6.0;

import "./SafeMath.sol";
import "./Context.sol";
import "./MultiOwnable.sol";
import "./ERC20.sol";
import "./LP.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

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

    // 0. Requirement : pre-defined commission rate β, pre-deployed governance token GOV, pre-defined liquidity lock-up period T
	function addLiquidity(uint256 liquidity) public view returns (bool) {
	    _liquidity.add(liquidity);
        /* Called when LP(Liquidity Provider) provides liquidity to the pool
            1. Receive selected amount of token from LP
            2. Calculate GOV distribution amount
            3. Transfer (1-β)% to LP, β% to pool manager
            4. Save lock-up finish time, GOV distribution amount to LP

            * GOV distribution amount calculation formula *
            ( GOV_max_supply - GOV_cur_supply ) * { VAL_new_liquidity / ( VAL_new_liquidity + VAL_cur_liquidity ) }
            
            cf. PPT 11p
        */


		return true;
	}

    function removeLiquidity(uint256 liquidity) public view returns (bool) {
        _liquidity.sub(liquidity);
        /* Called when LP tries to remove liquidity from the pool
            1. Check if LP's lock-up period is over
            2. Check if LP has enough GOV to return
            3. Receive GOV from LP
            4. Transfer asset (collateral) to LP
            5. Burn received GOV (TBD)
        */


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