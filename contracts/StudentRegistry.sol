// Solidity Smart Contract (StudentRegistry.sol)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    struct Student {
        uint id;
        string name;
        string surname;
        uint yearOfAdmission;
        string contacts;
        string village;
    }
    
    address public owner;
    mapping(uint => Student) public students;
    uint public studentCount;
    
    event StudentAdded(uint id, string name);
    event StudentUpdated(uint id, string name);
    event StudentDeleted(uint id);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function addStudent(string memory _name, string memory _surname, uint _yearOfAdmission, string memory _contacts, string memory _village) public onlyOwner {
        studentCount++;
        students[studentCount] = Student(studentCount, _name, _surname, _yearOfAdmission, _contacts, _village);
        emit StudentAdded(studentCount, _name);
    }
    
    function updateStudent(uint _id, string memory _name, string memory _surname, uint _yearOfAdmission, string memory _contacts, string memory _village) public onlyOwner {
        require(_id > 0 && _id <= studentCount, "Student does not exist");
        students[_id] = Student(_id, _name, _surname, _yearOfAdmission, _contacts, _village);
        emit StudentUpdated(_id, _name);
    }
    
    function deleteStudent(uint _id) public onlyOwner {
        require(_id > 0 && _id <= studentCount, "Student does not exist");
        delete students[_id];
        emit StudentDeleted(_id);
    }
    
    function getStudent(uint _id) public view returns (Student memory) {
        require(_id > 0 && _id <= studentCount, "Student does not exist");
        return students[_id];
    }
}
