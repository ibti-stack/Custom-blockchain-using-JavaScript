const Blockchain = require('./blockchain');


const bitcoin = new Blockchain();            //Instance of our Blockchain

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1619349405908,
    "transaction": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1619349587256,
    "transaction": [],
    "nonce": 4445,
    "hash": "00004d8ad45f22c6d493db97b8cb86940088f0f796d978906d05550538abda05",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1619349648379,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipent": "1baae2de21884e08aef873454e222bb5",
    "transactionId": "c0c824d4afaa4c0388efc0dd70e20c48"
    },
    {
    "amount": 1000,
    "sender": "GeneratedTransactionthroughpostman",
    "recipent": "Recipentaddresszzzzzzccssssddeee",
    "transactionId": "97f7339a8336446b94d52c8ce4144d26"
    }
    ],
    "nonce": 82347,
    "hash": "00005f076223ef5652316125230fdeadfa41708eccc8138abaaf8c404b9689a9",
    "previousBlockHash": "00004d8ad45f22c6d493db97b8cb86940088f0f796d978906d05550538abda05"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipent": "1baae2de21884e08aef873454e222bb5",
    "transactionId": "c7fa6afdbb5840989c94e5d2a8f64a4e"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };

    console.log(bitcoin.chainIsValid(bc1.chain));

