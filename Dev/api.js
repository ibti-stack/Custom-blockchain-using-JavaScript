const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain.js');

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
  
});


app.listen(3000, function(){
    console.log('LIstening on port 3000....');
}); 