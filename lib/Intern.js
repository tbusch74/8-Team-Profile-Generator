const Employee = require('./Employee')

function Intern (school) {
    this.school = school
};

Intern.prototype = Object.create(Employee.prototype);

Intern.prototype.getRole = function() {
    return 'Intern'
};

Intern.prototype.getSchool = function() {
    return this.school
};

module.exports = Intern