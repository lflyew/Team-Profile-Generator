//importing employee constuctor

const employee = require ('./employee');

//intern constructor extends employee constructor

class intern extends employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;

    }
    getschool () {
        return this.school;

    }

    getrole () {
        return "intern";
    }
}

module.exports = intern;