const contractAddress = "0xEfaf2AcACa1E67fb5e94Bc7E51A448f8D40219C4";

const contractAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "StudentAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "StudentDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "StudentUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_surname",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_yearOfAdmission",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_contacts",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_village",
          "type": "string"
        }
      ],
      "name": "addStudent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "deleteStudent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getStudent",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "surname",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "yearOfAdmission",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "contacts",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "village",
              "type": "string"
            }
          ],
          "internalType": "struct StudentRegistry.Student",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "studentCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "students",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "surname",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "yearOfAdmission",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "contacts",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "village",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_surname",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_yearOfAdmission",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_contacts",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_village",
          "type": "string"
        }
      ],
      "name": "updateStudent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

export {contractAbi, contractAddress};