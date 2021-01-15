pragma solidity >=0.5.0 <0.6.0;

import "./SafeMath.sol";
import "./Context.sol";
import "./MultiOwnable.sol";
import "./ERC20.sol";
import "./LP.sol";
import "./UniswapV2Pair.sol";

contract ViewdefiFactory is Context {
	event PoolCreated(address contractAddress, address fetchAddress, address owner, string name);
	
	uint256 public pool_length;
    address[] public pool_list;
    
    constructor() public {
        pool_length = 0;
    }

	function createPool(string calldata name, string calldata symbol, address fetchAddress) external {
	    pool_list[pool_length] = fetchAddress;
	    pool_length += 1;
	    
		Viewdefi pool = new Viewdefi(name, symbol, fetchAddress, _msgSender());
		emit PoolCreated(address(pool), fetchAddress, _msgSender(), name);
	}
}

contract Viewdefi is Context,MultiOwnable {
    uint8 private constant POOL_OWNER = 4;
    uint8 private constant POOL_MANAGER = 3;
    uint256 private MINIMUM_LIQUIDITY = 100 * (10 ** 18);
    uint256 private MAX_LIQUIDITY = 100000000 * (10 ** 18);

    using SafeMath for uint256;

    bytes4 private constant BURNFROM = bytes4(keccak256(bytes('burnFrom(address,uint256)')));
    bytes4 private constant MINT = bytes4(keccak256(bytes('mint(address,uint256)')));

    // 보험 구조체 정보
    struct Insurance {
        uint256 amount;             // 수량
        uint256 targetValue;        // 타겟 값
        uint256 protectionCost;     // 보험 비용
        uint256 issueTime;          // 보험 구매일
        uint256 endTime;            // 보험 만기일
    }

    struct LPToken {
        uint256 amount;
        uint256 issueTime;
    }

    string public name;
    string public symbol;
    address public fetchAddress;
    address public LPTokenAddress;

    // 전체 Liquidity
    uint256 totalSupply;

    // 유동성 공급자의 현재 LP 토큰
    mapping(address => LPToken) lp_tokenOf;

    // 유동성 공급자가 예치한 현재 자산
    mapping(address => uint256) balanceOf;

    constructor(string memory _name, string memory _symbol, address _fetchAddress, address _owner) public {
        name = _name;
        symbol = _symbol;
        fetchAddress = _fetchAddress;
        
        LP lp_token = new LP(name, symbol);
        LPTokenAddress = address(lp_token);
        _addOwnership(_owner, POOL_OWNER);
    }

    /*
        -----Updatelist-----
        2021-01-14 15:47 * IMPORTANT CHANGE - GOV -> LPT (Liquidity Pool Token) (about GOV is TBD)

        -----Checklist-----
        pre-defined commission rate β
        pre-defined liquidity lock-up period T
    */
    function addLiquidity() public payable returns (uint256) {
        uint256 amount = msg.value;
        require(msg.value > 0, "Viewdefi: Insufficient Amount");
        
        uint256 totalLiquidity = totalSupply;
        if(totalLiquidity > 0) {
            uint256 current_supply = address(this).balance - msg.value;
            uint256 new_supply = address(this).balance;
            uint256 liquidity_minted = (MAX_LIQUIDITY - totalLiquidity) * (new_supply / (new_supply - current_supply));
            
            lp_tokenOf[_msgSender()].amount = lp_tokenOf[_msgSender()].amount.add(liquidity_minted);
            lp_tokenOf[_msgSender()].issueTime = now;
            balanceOf[_msgSender()] = balanceOf[_msgSender()].add(amount);
            return liquidity_minted;
        } else {
            uint256 liquidity_minted = MINIMUM_LIQUIDITY;
            lp_tokenOf[_msgSender()].amount =  lp_tokenOf[_msgSender()].amount.add(liquidity_minted);
            lp_tokenOf[_msgSender()].issueTime = now;
            balanceOf[_msgSender()] = balanceOf[_msgSender()].add(amount);
            return liquidity_minted;
        }
    }

    function removeLiquidity(uint256 amount) public view returns (bool) {
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