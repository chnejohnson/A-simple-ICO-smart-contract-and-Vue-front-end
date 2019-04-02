pragma solidity ^0.5.2;

import "./ERC20.sol";

contract Mintable is ERC20 {
  address private owner;
  mapping(address => bool) minters;

  //constructor只會在合約被創立時執行一次，所以部署合約的人，就是owner
  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  modifier onlyMinter {
    require(minters[msg.sender]);
    _;
  }

  function addMinter(address newMinter) public onlyOwner returns (bool) {
    minters[newMinter] = true;
    return true;
  }

  function mint(address to, uint value) public onlyMinter returns (bool) {
    _totalSupply = _totalSupply.add(value);
    _balances[to] = _balances[to].add(value);

    emit Transfer(address(0), to, value);
    return true;
  }
}