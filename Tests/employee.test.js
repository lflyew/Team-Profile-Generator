const employee = require('../lib/employee');

//employee object created

test ('creates an employee object', () => {
    const employee = new employee('Hailey', 123, 'hailey@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number)); 
    expect(employee.email).toEqual(expect.any(String)); 


});

//retrieve name from getname

test('gets employee name', () => {
    const employee = new employee('Hailey', 123, 'hailey@gmail.com');
    expect(employee.getname()).toEqual(expect.any(String));

});

//gets id from getID
test('gets employee id', () => {
    const employee = new employee('Hailey', 123, 'hailey@gmail.com');
    expect(employee.getid()).toEqual(expect.any(Number));

});
//gets email from getemail
test('gets employee email', () => {
    const employee = new employee('Hailey', 123, 'hailey@gmail.com');
    expect(employee.getemail()).toEqual(expect.stringContaining(employee.email.toString()));

});
//gets role from getrole
test('gets employee role', () => {
    const employee = new employee('Hailey', 123, 'hailey@gmail.com');
    expect(employee.getrole()).toEqual("employee");

});