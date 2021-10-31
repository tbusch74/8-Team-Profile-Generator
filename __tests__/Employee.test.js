const Employee = require('../lib/Employee')

test('test for creation of employee object', () => {
    const employee = new Employee();

    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('id');
    expect(employee).toHaveProperty('email');
});

test('testing the "get" functions', () => {
    const employee = new Employee('Tony', 1234, 'abc@xyz.com');

    expect(employee.getName()).toBe('Tony');
    expect(employee.getId()).toBe(1234);
    expect(employee.getEmail()).toBe('abc@xyz.com');
    expect(employee.getRole()).toBe('Employee')
});