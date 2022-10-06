const engineer = require('../lib/engineer');

describe('engineer', () =>{
const testEngineer = new engineer ('Hailey', 123, 'hailey@gmail.com', 'www.github.com/hailey23')
describe ("engineer constructor test", () => {
    test ('new engineer constructed', () => {
        expect(testEngineer).toBeInstanceOf(engineer);
    });
    test('new engineer with name, id, email, and github', () => {
        expect(testEngineer).toEqual({
            name: 'Hailey',
            id: 123,
            email: 'hailey@gmail.com',
            github: "www.github.com/hailey23",

    });
    
});
});

describe('get tests', () => {
   
    test('should return name', () => {
        expect(testEngineer.getName()).toEqual("Hailey");

    });
    test('should return id', () => {
        expect(testEngineer.getid()).toEqual(123);
    });
    test('should return email when called', () => {
        expect(testEngineer.getemail()).toEqual('hailey@gmail.com');

    });
    test('should return githib profile when called', () => {
        expect(testEngineer.getgithub()).toEqual('www.github.com/hailey23');

    });
    test('should return role when called', () => {
        expect(testEngineer.getrole()).toEqual('engineer');
    });
});
});

//engineer object created
// test('creates an engineer object', () => {
//     const engineer = new engineer('Hailey', 123, 'hailey@gmail.com', 'hailey23');
//     expect(engineer.github) .toEqual(expect.any(String));
// });


// test('gets github value for engineer', () => {
//     const engineer = new engineer('Hailey', 123, 'hailey@gmail.com', 'hailey23');
//     expect(engineer.getgithub()) .toEqual(expect.stringContaining(engineer.github.toString()));
// });

// test('gets role of employee', () => {
//     const engineer = new engineer('Hailey', 123, 'hailey@gmail.com', 'hailey23');
//     expect(engineer.getrole()) .toEqual("engineer");
// });