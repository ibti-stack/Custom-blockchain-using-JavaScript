const sha256 = require('sha256');

function Blockchain() {
    this.chain = [];              // All blocks will be stored in this array.
    this.pendingTransactions = [];    // Placed all the transactions into this array before they are mine.
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
        recipent: recipent
    }

    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock()['index'] + 1;         
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

module.exports = Blockchain;