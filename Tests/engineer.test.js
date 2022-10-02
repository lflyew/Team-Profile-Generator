const engineer = require('../lib/engineer');

//engineer object created
test('creates an engineer object', () => {
    const engineer = new engineer('Hailey', 123, 'hailey@gmail.com', 'hailey23');
    expect(engineer.github) .toEqual(expect.any(String));
});


test('gets github value for engineer', () => {
    const engineer = new engineer('Hailey', 123, 'hailey@gmail.com', 'hailey23');
    expect(engineer.getgithub()) .toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new engineer('Hailey', 123, 'hailey@gmail.com', 'hailey23');
    expect(engineer.getrole()) .toEqual("engineer");
});