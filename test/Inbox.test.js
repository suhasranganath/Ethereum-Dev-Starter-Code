const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = "Hi There!";

beforeEach(async () => {
    //Get a list of accounts
    accounts = await web3.eth.getAccounts();
    //Use one of those accounts to deploy a contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy( {data: bytecode, arguments:[INITIAL_STRING]})
    .send({ from: accounts[0], gas: '1000000'});
});

describe('Inbox', ()=>{

    //Test to see if contract is deployed.
    it('deploys a contract',()=>{
       assert.ok(inbox.options.address);
    });

    //Test to verify the default value.
    it('has a default value', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING)
    }); 

    it('can change the message', async () => {
        await inbox.methods.setMessage('bye').send({from: accounts[1]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});