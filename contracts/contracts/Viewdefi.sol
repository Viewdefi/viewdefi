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

    /*
        -----Updatelist-----
        2021-01-14 15:47 * IMPORTANT CHANGE - GOV -> LPT (Liquidity Pool Token) (about GOV is TBD)

        -----Checklist-----
        pre-defined commission rate β
        pre-defined liquidity lock-up period T
    */

	function addLiquidity(uint256 liquidity) public view returns (bool) {
	    _liquidity.add(liquidity);
        /* Called when LP(Liquidity Provider) provides liquidity to the pool
            1. Receive collateral asset from LP (say, ETH)
            2. Calculate LPT distribution amount
            3. Transfer (1-β)% to LP, β% to pool manager
            4. Save lock-up finish time, LPT distribution amount to LP

            * LPT distribution amount calculation formula *
            ( LPT_max_supply - LPT_cur_supply ) * { POOL_new_liquidity / ( POOL_new_liquidity + POOL_cur_liquidity ) }
            
            cf. PPT 11p
        */


		return true;
	}

    function removeLiquidity(uint256 liquidity) public view returns (bool) {
        _liquidity.sub(liquidity);
        /* Called when LP tries to remove liquidity from the pool
            1. Check if LP's lock-up period is over
            2. Check if LP has enough LPT to return
            3. Receive LPT from LP
            4. Transfer collateral asset back to LP
            5. Burn received LPT (Burn rate TBD)
        */


		return true;
	}

    /*
        Future Work
        func addExtraLiquidity
        func removePartialLiquidity
    */

	function addPoolIndex(uint256 index) public onlyOwner(POOL_MANAGER) view returns (bool) {
        /*  Called when PM (Pool Manager) tries to update Pool Index
            The array maintains the last N indices
        */


		return true;
	}

    function enterInsurance(uint256 claimAmount, uint256 targetIndex, uint256 expiryDate) public view returns (bool) {
        /*
            Insurance Taker can set 3 parameters - Insurance Money, Target Index, Expiry Date
        */


        return true;
    }

    function renewInsurance(uint256 claimAmount, uint256 targetIndex, uint256 expiryDate) public view returns (bool) {
        /*
            Insurance Taker can renew the Insurance before the Expiry Date comes
        */


        return true;
    }

    function claimInsurance(uint256 ifneeded) public view returns (bool) {
        /*
            Insurance Taker can claim Insurance Money if the Pool Index reaches the Target Index before the Expiry Date comes
        */


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