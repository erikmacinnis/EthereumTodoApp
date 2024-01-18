const HDwalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDwalletProvider(
    '<seed phrase>',
    'https://rinkeby.infura.io/v3/<Add your api key>'
)

const Web3 = require('web3'); // this is the web3 module, not the web3.js file
const web3 = new Web3(provider);
const {abi, bytecode} = require('./src/ethereum/Todo.json');

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy contract from account ', accounts[0]);

    const todo = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode, arguments: ['This is an Exampele Task'] })
        .send({ from: accounts[0], gas: '10000000'})

    console.log('Todo contract deployed at address ', todo.options.address);
}

deploy();

