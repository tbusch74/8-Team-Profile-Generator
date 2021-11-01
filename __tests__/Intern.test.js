const Intern = require('../lib/Intern')

test('test for inheritence of properties',() => {
    const intern = new Intern();

    expect(intern).toHaveProperty('name');
    expect(intern).toHaveProperty('id');
    expect(intern).toHaveProperty('email');
    expect(intern).toHaveProperty('school');
});

test('testing the "get" functions', () => {
    const intern = new Intern('Tony', 1234, 'abc@xyz.com', 'U of M');

    expect(intern.getName()).toBe('Tony');
    expect(intern.getId()).toBe(1234);
    expect(intern.getEmail()).toBe('abc@xyz.com');
    expect(intern.getSchool()).toBe('U of M');
    expect(intern.getRole()).toBe('Intern')
});
