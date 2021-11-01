const Manager = require('../lib/Manager')

test('test for inheritence of properties',() => {
    const manager = new Manager();

    expect(manager).toHaveProperty('name');
    expect(manager).toHaveProperty('id');
    expect(manager).toHaveProperty('email');
    expect(manager).toHaveProperty('officeNumber');
});

test('testing the "get" functions', () => {
    const manager = new Manager('Tony', 1234, 'abc@xyz.com', '1234567890');

    expect(manager.getName()).toBe('Tony');
    expect(manager.getId()).toBe(1234);
    expect(manager.getEmail()).toBe('abc@xyz.com');
    expect(manager.getRole()).toBe('Manager')
});

