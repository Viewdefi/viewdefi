// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.6.0;

import "./MultiOwnable.sol";
import "./ERC20.sol";


/**
 * @title LP
 * @dev Inheritance of the {ERC20} implementation and Using some
 * features of {ERC20Burnable} and {ERC20Mintable} .
 */
contract LP is MultiOwnable, ERC20 {
    uint8 private constant OWNER = 7;
    address private owner;

    /**
     * @dev Sets the values for {name} and {symbol}, initializes
     * {decimals} with a value of 0.
     *
     * The formal two of these values are immutable: they can only
     * be set once during construction.
     */
    constructor (
        string memory name,
        string memory symbol
    ) public payable ERC20(name, symbol) {
        _setupDecimals(0);
        _addOwnership(msg.sender, OWNER);
        owner = msg.sender;
    }

    /**
     * @dev Mints `amount` tokens to `account`.
     *
     * See {ERC20-_mint}.
     */
    function mint(
        address account,
        uint256 amount
    ) public onlyOwner(OWNER) returns (bool) {
        _mint(account, amount);

        return true;
    }

    /**
     * @dev Burns `amount` tokens from the caller.
     *
     * See {ERC20Burnable-burn}.
     */
    function burn(
        uint256 amount
    ) public returns (bool) {
        _burn(_msgSender(), amount);

        return true;
    }

    /**
     * @dev Burns `amount` tokens from `account`.
     *
     * See {ERC20Burnable-burnFrom}.
     */
    function burnFrom(
        address account,
        uint256 amount
    ) public onlyOwner(OWNER) returns (bool) {
        // uint256 decreasedAllowance = allowance(account, _msgSender()).sub(amount, "ERC20: burn amount exceeds allowance");
        // _approve(account, _msgSender(), decreasedAllowance);

        _burn(account, amount);

        return true;
    }
}