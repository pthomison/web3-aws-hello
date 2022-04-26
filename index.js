const Web3 = require('web3');
const AWSHttpProvider = require('@aws/web3-http-provider');

ENDPOINT = "https://xxxxxxxxxxxxx.ethereum.managedblockchain.us-east-1.amazonaws.com"

// var web3 = new Web3('http://127.0.0.1:8545')	
var web3 = new Web3(new AWSHttpProvider(ENDPOINT))


async function main(exitCallback) {

	let block = await web3.eth.getBlock("latest")
	console.log(block);

	console.log(await web3.eth.getNodeInfo());

	exitCallback()
}

main(function(){
	process.exit(0);
})