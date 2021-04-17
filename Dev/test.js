const Blockchain = require('./blockchain');


const bitcoin = new Blockchain();            //Instance of our Blockchain

const previousBlockHash = "OINAISDGHGHGHGHHGHGHGH";
const currentBlockData = [
    {
        amount: 10,
        sender: "SENDERRRRRRR",
        recipent: "RECIPENTTTTTTTT"
    },
    {
        amount: 30,
        sender: "SENDERRRRRRRADDRESS",
        recipent: "RECIPENTTTTTTTTADDRESD"
    }
];
console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

