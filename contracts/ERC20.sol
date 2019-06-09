pragma solidity ^0.5.0;

import "./IERC20.sol";
import "./SafeMath.sol";

contract ERC20 is IERC20 {
  //Library
  using SafeMath for uint256;

  //Options
  string public name = "NTPU Token";
  uint8 public decimals = 18;
  string public symbel = "TPT";

  //State Variables
  uint internal _totalSupply;
  mapping(address => uint) _balances;
  mapping(address => mapping(address => uint)) _approve;

  //Constructor for myICO to construct this contract
  constructor(
    string memory pName,
    uint8 pDecimals,
    string memory pSymbel,
    uint pTotalSupply
  ) public {
    name = pName;
    decimals = pDecimals;
    symbel = pSymbel;
    _totalSupply = pTotalSupply;
    //when constructing, this contract would transfer totalSupply set by
    //myICO to myICO contract.
    //Therefore, myICO contract have all of the token at first.
    _balances[msg.sender] = _balances[msg.sender].add(_totalSupply);
    emit Transfer(address(this), msg.sender, _totalSupply);
  }
  
  function totalSupply() external view returns (uint256) {
    return _totalSupply;
  }

  function balanceOf(address who) external view returns (uint256) {
    return _balances[who];
  }

  function transfer(address to, uint256 value) external returns (bool){
    _balances[msg.sender] = _balances[msg.sender].sub(value);
    _balances[to] = _balances[to].add(value);

    emit Transfer(msg.sender, to, value);
    return true;
  }

  function allowance(address owner, address spender) external view returns (uint256){
    return _approve[owner][spender];
  }

  function approve(address spender, uint256 value) external returns (bool){
    //the user(msg.sender) approve spender who can spend how much token(value)
    _approve[msg.sender][spender] = value;
    emit Approval(msg.sender, spender, value);
    return true;
  }

  function transferFrom(address from, address to, uint256 value) external returns (bool){
    //the user(msg.sender) is spender, so how do you use your allowance?
    //you can use transferFrom to transfer allowance from owner to yourself,
    //therefore the to address is yourself.
    //Or you can transfer allowance from owner to another,
    //so that the to address is another address.
    _approve[from][msg.sender] = _approve[from][msg.sender].sub(value);

    _balances[from] = _balances[from].sub(value);
    _balances[to] = _balances[to].add(value);

    emit Transfer(from, to, value);
    return true;
  }

}