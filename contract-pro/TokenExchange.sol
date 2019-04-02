pragma solidity ^0.5.2;

import "./IERC20.sol";

contract TokenExchange {
  address fromAddress;
  address fromToken;
  uint fromAmount;

  address toToken;
  uint toAmount;

  function CreateExchange(address _fromToken, uint _fromAmount, address _toToken, uint _toAmount) public {
    //確認from有授權token給這份合約
    require(IERC20(_fromToken).transferFrom(msg.sender, address(this), _fromAmount));
    fromAddress = msg.sender;
    fromToken = _fromToken;
    fromAmount = _fromAmount;
    toToken = _toToken;
    toAmount = _toAmount;
  }

  function DoChange() public {
    require(IERC20(toToken).transferFrom(msg.sender, address(this), toAmount));
    IERC20(fromToken).transfer(msg.sender, fromAmount);
    IERC20(toToken).transfer(fromAddress, toAmount);
  }
}