pragma solidity ^0.5.2;

import "./ERC20.sol";

contract Burnable is ERC20 {
  event Burn(address indexed account, uint value);

  function burn(uint value) public returns (bool) {
    require(_balances[msg.sender] >= value);
    _totalSupply = _totalSupply.sub(value);
    _balances[msg.sender] = _balances[msg.sender].sub(value);

    emit Burn(msg.sender, value); 
    emit Transfer(msg.sender, address(0), value);
  }
}