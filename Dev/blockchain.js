const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];
const { v4: uuidv4 } = require('uuid');

function Blockchain() {
    this.chain = [];              // All blocks will be stored in this array.
    this.pendingTransactions = [];    // Placed all the transactions into this array before they are mine.
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    this.createNewBlock(100, "0", "0");
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transaction: this.pendingTransactions,
        nonce: nonce,              // Nonce comes from POW and it could be any number.
        hash: hash,                //Hash of the new block. We will pass the new transactions into a hashing function.
        previousBlockHash: previousBlockHash
    }

    this.pendingTransactions = [];            // Clear the array so that we can do the process again.
    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.getLastBlock = function() {       // Why this method? Ans: We need it for previous block hash.
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipent) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipent: recipent,
        transactionId: uuidv4().split('-').join('')
    }
    
    return newTransaction;
}

Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj){
    this.pendingTransactions.push(transactionObj);
    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

    while (hash.substring(0, 4) !== "0000") {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    }
    return nonce;
}

module.exports = Blockchain;