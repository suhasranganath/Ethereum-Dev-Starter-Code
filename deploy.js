const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');


const provider = new HDWalletProvider(
    //Enter your mnemonic words here. You can get it by installing Metamask chrome extension
    'ADD YOUR MNEMONIC WORDS HERE',
    //Enter the Infura network link for the test netowork, get it on https://infura.io
    'https://kovan.infura.io/YOUR_API_KEY'
);

const web3 = new Web3(provider);

//This function is being created just to use 'async and await'.
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Account used to deploy the contract', accounts[0]);
    
   const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments:['Hi there!']})
    .send({from:accounts[0], gas:'1000000'});

    console.log('Contract is deployed at', result.options.address);
}

deploy();