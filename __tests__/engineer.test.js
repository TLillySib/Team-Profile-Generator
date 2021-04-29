//Pull in the Engineer.js
const Engineer = require("../lib/Engineer");


//Tests the engineer objedt
test('can instantiate Engineer instance', () => {
    const engineer = new Engineer("Tomeeka", 1, "tlillysibley@gmail.com", "tlillysib");
    expect(engineer.github).toBe("tlillysib");
});

//Grab github information from getGithub()
test('can get github input', () => {
    const engineer = new Engineer("Tomeeka", 1, "tlillysibley@gmail.com", "tlillysib");
    expect(engineer.getGithub()).toBe("tlillysib");
});
//Grab the role from getRole()
test('can get role of engineer', () => {
    const engineer = new Engineer("TTomeeka", 1, "tlillysibley@gmail.com", "tlillysib");
    expect(engineer.getRole()).toBe("Engineer");
});
