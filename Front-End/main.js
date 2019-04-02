//Connect to the Ganachi
const web3 = new Web3("http://localhost:8545");

//ICO contract address created by Ganachi
const address = "0xD94732aFc339E8Da66186303Df315C5990EDB1bD";
//ICO and ERC20 ABI created by Truffle
const abi = [
  {
    constant: true,
    inputs: [],
    name: "tokenAddress",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x9d76ea58"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    constant: true,
    inputs: [],
    name: "Fund",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6ce1417e"
  },
  {
    constant: false,
    inputs: [],
    name: "startICO",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x7fa8c158"
  },
  {
    constant: false,
    inputs: [],
    name: "endICO",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x4f248409"
  },
  {
    constant: true,
    inputs: [],
    name: "stage",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xc040e6b8"
  }
];
const tokenAbi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbel",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "pName",
        type: "string"
      },
      {
        name: "pDecimals",
        type: "uint8"
      },
      {
        name: "pSymbel",
        type: "string"
      },
      {
        name: "pTotalSupply",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "who",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address"
      },
      {
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

//initialize contract
const myICO = new web3.eth.Contract(abi, address);

console.log(web3);

const vm = new Vue({
  el: "#app",
  data: {
    address: "not found",
    symbel: null,
    name: null,
    //ERC20
    tokenContract: null,
    //the second address created by Ganache
    userAccount: "0x7b959175f9bd9c79d25192Ce573FfDa49c91aE09",
    userBalance: "no address",
    //the first address created by Ganache
    ownerAddress: "0x8025E32ADe235cF4aAcB021E249211e307C9dF65",
    stageNum: 0,
    nodes: null,
    //fallback
    value: null,
    fund: 0,
    //Transfer
    transferValue: null,
    toAddress: null
  },
  computed: {
    stage() {
      if (this.stageNum == 1) {
        return "ICO started";
      } else if (this.stageNum == 2) {
        return "ICO ended";
      } else if (this.stageNum == 0) {
        return "before ICO";
      }
    }
  },
  async created() {
    this.address = await myICO.methods.tokenAddress().call();
    this.tokenContract = new web3.eth.Contract(tokenAbi, this.address);
    this.name = await this.tokenContract.methods.name().call();
    this.symbel = await this.tokenContract.methods.symbel().call();
    this.getStage();

    this.nodes = await web3.eth.getAccounts();
  },
  methods: {
    startICO() {
      myICO.methods
        .startICO()
        .send({
          from: this.ownerAddress,
          gas: 3000000
        })
        .on("receipt", res => {
          console.log(res);
        })
        .on("error", err => {
          console.log("you can't start it, watch out your stage.");
        });
      this.getStage();
    },
    endICO() {
      myICO.methods
        .endICO()
        .send({ from: this.ownerAddress })
        .on("receipt", res => {
          console.log(res);
        })
        .on("error", err => {
          console.log("you can't end it, watch out your stage.");
        });
      this.getStage();
    },
    async getStage() {
      //why I should reload so that stageNum changed by this getting
      this.stageNum = await myICO.methods.stage().call();
    },
    async balanceOf() {
      try {
        let balanceOf = await this.tokenContract.methods
          .balanceOf(this.userAccount)
          .call();
        this.userBalance = new Decimal(balanceOf / 10 ** 18);
      } catch (err) {
        console.log(err);
      }
    },
    async fallback() {
      //value can't be 0
      try {
        let res = await web3.eth.sendTransaction({
          from: this.userAccount,
          to: address,
          value: this.value * 10 ** 18
        });
        console.log(res);
      } catch (err) {
        console.log("fallback error", err);
      }
    },
    async getFund() {
      let currentFund = await myICO.methods.Fund().call();
      this.fund = currentFund / 10 ** 18;
    },
    //transfer
    transferTo() {
      //contract argument of value must be string.
      let value = (this.transferValue * 10 ** 18).toString();

      this.tokenContract.methods
        .transfer(this.toAddress, value)
        .send({
          from: this.userAccount,
          gas: 3000000
        })
        .on("receipt", res => {
          console.log(res);
        })
        .on("error", err => {
          console.log(err);
        });
    }
  }
});
