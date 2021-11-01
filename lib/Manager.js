const Employee = require('./Employee')

function Manager (name, id, email, officeNumber) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getRole = function() {
    return 'Manager'
}

module.exports = Manager