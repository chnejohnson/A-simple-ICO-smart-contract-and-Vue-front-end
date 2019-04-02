pragma solidity ^0.5.2;

contract Pausable {
  bool private _paused;
  address private owner;

  constructor() public {
    _paused = false;
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  modifier isPaused {
    require(_paused);
    _;
  }

  modifier isNotPaused {
    require(!_paused);
    _;
  }

  event Pause(address indexed account);
  event Unpause(address indexed account);

  function pause() isNotPaused public onlyOwner returns (bool) {
    _paused = true;
    emit Pause(msg.sender);
    return true;
  }

  function unpause() isPaused public onlyOwner returns (bool) {
    _paused = false;
    emit Unpause(msg.sender);
    return true;
  }
}