//Pull in the manager.js
const Manager = require("../lib/Manager");


//Tests the manager objedt
test('can instantiate manager instance', () => {
    const manager = new Manager("Tomeeka", 1, "tlillysibley@gmail.com", 1);
    expect(manager.officeNumber).toBe(1);
});

//Grab office number from getofficeNumber()
test('can get officeNumber input', () => {
    const manager = new Manager("Tomeeka", 1, "tlillysibley@gmail.com", 1);
    expect(manager.getofficeNumber()).toBe(1);
});
//Grab the role from getRole()
test('can get role of manager', () => {
    const manager = new Manager("Tomeeka", 1, "tlillysibley@gmail.com", 1);
    expect(manager.getRole()).toBe("Manager");
});
