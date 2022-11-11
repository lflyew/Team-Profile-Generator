const manager = require("../lib/manager.js");

describe('manager', () => {
    const testmanager = new manager('Hailey', 123, 'hailey@gmail.com', 227)
    describe('tests constructor', () => {
        test('should create new manager', () => {
            expect(testmanager).toBeInstanceOf(manager);
        });
        test('should create new manager with name, id, email, office number', () => {
            expect(testmanager).toEqual({
                name: 'Hailey',
                id: 123,
                email: 'hailey@gmail.com',
                OfficeNum: 227,
            });
        });
    });
    describe("get tests", () => {
        test('should return name when called', () => {
            expect(testmanager.getname()).toEqual('Hailey');

        });
        test('should return id when called', () => {
            expect(testmanager.getid()).toEqual(123);

        });

        test('should return email when called', () => {
            expect(testmanager.getemail()).toEqual('hailey@gmail.com');

        });
        test('should return office number when called', () => {
            expect(testmanager.getOfficeNum()).toEqual(227);

        });
        test('should return role when called', () => {
            expect(testmanager.getrole()).toEqual('manager');

        });
    });
});