const manager = require('../lib/manager');
;

test ('creates manager object', () => {
    const manager = new manager('Hailey', 123, 'hailey@gmail.com', 7);

    expect(manager.officeNum).toEqual(expect.any(Number));

});

test('gets role of employee', () => {
    const manager = new manager('Hailey', 123, 'hailey@gmail.com');

    expect(manager.getrole()).toEqual("manager");
});