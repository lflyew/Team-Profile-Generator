const employee = require("../lib/employee.js");

describe('employee', () => {
    const testEmployee = new employee('Hailey', 123, 'hailey@gmail.com')
describe('constructor test', () => {
    test('new employee object created', () => {
        expect(testEmployee).toBeInstanceOf(employee);

    });
    test('new employee class with name, id, and email', () => {
        expect(testEmployee).toEqual({
            name: 'Hailey',
            id: 123,
            email: "hailey@gmail.com",
        });
    
});
});
describe('id, name, email test', () => {
   
    test("should return name", () => {
        expect(testEmployee.getname()).toEqual('Hailey');

    });
    test('should return id', () => {
        expect(testEmployee.getid()).toEqual(123);

    });
    test('should return email', () => {
        expect(testEmployee.getemail()).toEqual('hailey@gmail.com');
    });
});
});