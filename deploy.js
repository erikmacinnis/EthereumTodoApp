const HDwalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDwalletProvider(
    'exercise uncover canal feel post merry ski stairs awake giggle mixture engage',
    'https://rinkeby.infura.io/v3/e74aebcb315d408089b16cb32f4e5f69'
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

