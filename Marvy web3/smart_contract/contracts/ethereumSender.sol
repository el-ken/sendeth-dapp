//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract ethereumSender {
   
    event Transfer(
        address from, 
        address getter, 
        uint amount, 
        string word, 
        uint256 timestamp, 
        string assign
    );

    struct senderStruct{
        address from;
        address getter;
        uint amount;
        string word;
        uint256 timestamp;
        string assign;
    }
    // Array of transactions
    senderStruct[] transactions;

    
    function addToBlockchain(
            address payable getter, 
            uint amount, 
            string memory word, 
            string memory assign
        ) public {
        transactions.push(senderStruct(msg.sender, getter, amount, word, block.timestamp, assign));
        emit Transfer(
            msg.sender, 
            getter, 
            amount, 
            word, 
            block.timestamp,
            assign
        );
    }

    //gets all transactions
    function getAllTransactions() public view returns(senderStruct[] memory) {
       return transactions;
    }

}
