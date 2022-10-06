const manager = require('../lib/manager');

describe('manager', () => {
    const testManager = new manager('Hailey', 123, 'hailey@gmail.com', 227)
    describe('tests constructor', () => {
        test('should create new manager', () => {
            expect(testManager).toBeInstanceOf(manager);
        });
        test('should create new manager with name, id, email, officenum', () => {
            expect(testManager).toEqual({
                name: 'Hailey',
                id: 123,
                email: 'hailey@gmail.com',
                officeNum: 227,
            });
        });
    });
    describe('get tests', () => {
        test('should return name when called', () => {
            expect(testManager.getName()).toEqual('Hailey');

        });
        test('should return id when called', () => {
            expect(testManager.getid()).toEqual(123);

        });

        test('should return email when called', () => {
            expect(testManager.getemail()).toEqual('hailey@gmail.com');

        });
        test('should return office number when called', () => {
            expect(testManager.getofficNum()).toEqual(227);

        });
        test('should return role when called', () => {
            expect(testManager.getrole()).toEqual('manager');

        });
    });
});

// test ('creates manager object', () => {
//     const manager = new manager('Hailey', 123, 'hailey@gmail.com', 7);

//     expect(manager.officeNum).toEqual(expect.any(Number));

// });

// test('gets role of employee', () => {
//     const manager = new manager('Hailey', 123, 'hailey@gmail.com');

//     expect(manager.getrole()).toEqual("manager");
// });