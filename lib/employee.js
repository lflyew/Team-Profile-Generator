//Constructor

class employee {
    constructor(name, id, email) 
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName () {
    return this.name;
}

getid (){
    return this.id;
}

getemail () {
    return this.email;
}

getrole () {
    return 'employee';
}



};
module.exports = employee;