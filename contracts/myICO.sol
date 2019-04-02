pragma solidity ^0.5.0;

import "./SafeMath.sol";
import "./ERC20.sol";

contract myICO {
  using SafeMath for uint;

  address payable private owner;
  //tokenAddress is the addreee of ERC20
  ERC20 public tokenAddress;
  uint caps = 0;
  uint currentFund = 0;

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  enum ICOState {PREPARE, START, END}
  ICOState icoState; 

  modifier beforeICO(){
    require(icoState == ICOState.PREPARE);
    _;
  }

  modifier whenICOStart(){
    require(icoState == ICOState.START);
    _;
  }

  modifier whenICOEnd(){
    require(icoState == ICOState.END);
    _;
  }

  constructor() public {
    owner = msg.sender;

    string memory name = "NTPU";
    uint8 decimals = 18;
    string memory symbel = "TPT";
    uint totalSupply = 1000 * (10 ** 18);

    caps = totalSupply;

    tokenAddress = new ERC20(name, decimals, symbel, totalSupply);
  }

  function Fund() external view returns(uint){
    return currentFund;
  }

  function startICO() public beforeICO onlyOwner {
    icoState = ICOState.START;
  }

  function endICO() public onlyOwner whenICOStart {
    icoState = ICOState.END;
    owner.transfer(address(this).balance);
    IERC20(tokenAddress).transfer(owner, caps.sub(currentFund));
  } 

  function stage() public view returns (ICOState){
      return icoState;
  }

  //ICO的核心
  function() external payable whenICOStart {
    require(msg.value > 0);
    require(caps.sub(currentFund) >= msg.value);
    //紀錄目前ICO累積到的金額
    currentFund = currentFund.add(msg.value); 
    //使用IERC20這個介面來發動ERC20的實作函式，將fallback收到的錢，轉給user
    IERC20(tokenAddress).transfer(msg.sender, msg.value);
  }


}