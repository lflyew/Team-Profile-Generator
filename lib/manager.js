//importing employee constructor

const employee = require("./employee");

//manager constructor extends employee constructor

class manager extends employee {
    constructor (name, id, email, officeNum) {
        super (name, id, email);

        this.officeNum = officeNum;
    }
    getrole () {
        return "manager";
    }
}

module.exports = manager;

