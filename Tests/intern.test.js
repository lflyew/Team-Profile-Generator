const intern = require('../lib/intern');


//creating intern object
test('creates an intern object',() => {
    const intern = new intern('Hailey', 123, 'hailey@gmail.com', 'UGA');

    expect(intern.school) .toEqual(expect.any(String));
});

test('gets school of employee', () => {
    const intern = new intern('Hailey', 123, 'hailey@gmail.com', 'UGA');

    expect(intern.getschool()).toEqual(expect.stringContaining(intern.school.toString()));

});

test('gets employee role', () => {
    const intern = new intern('Hailey', 123, 'hailey@gmail.com', 'UGA');

    expect(intern.getrole()).toEqual("intern");

});

