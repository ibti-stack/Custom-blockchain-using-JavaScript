const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain.js');
const { v4: uuidv4 } = require('uuid');
const port = process.argv[2];
const nodeAddress = uuidv4().split('-').join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

app.post('/transaction', function(req, res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipent);
    res.json({note: `Transaction will be added in block ${blockIndex}.`})
});

app.get('/mine', function (req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];

    const currentBlockData = {
        transactons: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    }

    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

    bitcoin.createNewTransaction(12.5, "00", nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

    
    res.json({
        note: "New block mined successfully",
        block: newBlock
    });
});

//Register the node and then broadcast it to the entire network and run this endpoint any of the one node
app.post('/register-and-broadcast-node', function(req, res){
    const newNodeUrl = req.body.newNodeUrl;
    //.........
});

//This endpoint hit on other nodes that are already in the network and register the new node. 
app.post('/register-node', function(req, res){

});

//This endpoint hit on the new node and then this new register all the other nodes that are already in the network.
app.post('/register-nodes-bulk', function(req, res){

});


app.listen(port, function(){
    console.log(`LIstening on port ${port}...`);
}); 