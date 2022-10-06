const intern = require('../lib/intern');

describe('intern', () => {
    const testIntern = new intern('Hailey', 123, 'hailey@gmail.com', 'UGA')
    describe("test constructor", () => {
        test('should create new intern class', () => {
            expect(testIntern).toBeInstanceOf(intern);

        });
        test('should create new intern with name,id, eamil, school', () => {
            expect(testIntern).toEqual({
                name: 'Hailey',
                id: 123,
                email: 'hailey@gmail.com',
                school: 'UGA',
            });
        });
    });

    describe('get tests', () => {
        test('should return name when called', () => {
            expect(testIntern.getName()).toEqual("Hailey");

        });
        test('should return id when called', () => {
            expect(testIntern.getid()).toEqual(123);
        });
        test('should return email when called', () => {
            expect(testIntern.getemail()).toEqual('hailey@gmail.com');
        });
        test('should return school when called', () => {
            expect(testIntern.getschool()).toEqual('UGA');
        });
        test('should return role when called', () => {
            expect(testIntern.getrole()).toEqual('intern');
        });
    });
});

// //creating intern object
// test('creates an intern object',() => {
//     const intern = new intern('Hailey', 123, 'hailey@gmail.com', 'UGA');

//     expect(intern.school) .toEqual(expect.any(String));
// });

// test('gets school of employee', () => {
//     const intern = new intern('Hailey', 123, 'hailey@gmail.com', 'UGA');

//     expect(intern.getschool()).toEqual(expect.stringContaining(intern.school.toString()));

// });

// test('gets employee role', () => {
//     const intern = new intern('Hailey', 123, 'hailey@gmail.com', 'UGA');

//     expect(intern.getrole()).toEqual("intern");

// });

