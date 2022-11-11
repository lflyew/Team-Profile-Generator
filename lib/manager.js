//importing employee constructor

const employee = require("./employee.js");

//manager constructor extends employee constructor

class manager extends employee {
    constructor (name, id, email, OfficeNum) {
        super (name, id, email)

        this.OfficeNum = OfficeNum;
    }
    getOfficeNum() {
        return this.OfficeNum;
    }
    getrole() {
        return "manager";
    }
}

module.exports = manager

