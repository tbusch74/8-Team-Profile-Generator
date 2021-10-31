const Employee = require('./Employee')

function Engineer (github) {
    this.github = github
};

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype.getRole = function() {
    return 'Engineer'
};

Engineer.prototype.getGithub = function() {
    return this.github
};

module.exports = Engineer