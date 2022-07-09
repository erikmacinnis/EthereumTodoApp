import web3 from './web3';
import todo from './Todo.json';

const instance = new web3.eth.Contract(todo.abi, '0x4fb09d60ec8F90de241e5f746984F29B2D09bAb9');

export default instance;