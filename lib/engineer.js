// import employee constructor
const employee = require("./employee.js");


//engineer constructor extends employee constructor
class engineer extends employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getgithub() {
        return this.github;
    }

    getrole() {
        return "engineer";
    }
}

module.exports = engineer;