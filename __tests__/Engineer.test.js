const Engineer = require('../lib/Engineer')

test('test for inheritence of properties',() => {
    const engineer = new Engineer();

    expect(engineer).toHaveProperty('name');
    expect(engineer).toHaveProperty('id');
    expect(engineer).toHaveProperty('email');
    expect(engineer).toHaveProperty('github');
});

test('testing the "get" functions', () => {
    const engineer = new Engineer('Tony', 1234, 'abc@xyz.com', 'tbusch74');

    expect(engineer.getName()).toBe('Tony');
    expect(engineer.getId()).toBe(1234);
    expect(engineer.getEmail()).toBe('abc@xyz.com');
    expect(engineer.getGithub()).toBe('tbusch74');
    expect(engineer.getRole()).toBe('Engineer')
});

