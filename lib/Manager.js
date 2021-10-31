const Employee = require('./Employee')

function Manager (officeNumber) {
    this.officeNumber = officeNumber
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getRole = function() {
    return 'Manager'
}

module.exports = Manager