const Blockchain = require('./blockchain');


const bitcoin = new Blockchain();

bitcoin.createNewBlock("123456", "shfvysyyfsfsffsfs", "dhsssssvgsgvsgvsg");

bitcoin.createNewTransaction("10$","ALEXghghghghg","JENNgsggssgsg");

bitcoin.createNewBlock("654321", "ghghghghghghghghg", "kjkjkjkjkjkjkj");

console.log(bitcoin.chain[1]);