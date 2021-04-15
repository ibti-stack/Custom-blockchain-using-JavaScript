function Blockchain() {
    this.chain = [];              // All blocks will be stored in this array.
    this.newTransactions = [];    // Placed all the transactions into this array before they are mine.
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transaction: this.newTransactions,
        nonce: nonce,              // Nonce comes from POW and it could be any number.
        hash: hash,                //Hash of the new block. We will pass the new transactions into a hashing function.
        previousBlockHash: previousBlockHash
    }

    this.newTransactions = [];            // Clear the array so that we can do the process again.
    this.chain.push(newBlock);

    return newBlock;
}