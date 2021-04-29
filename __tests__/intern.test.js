//Pull in the intern.js
const Intern = require("../lib/Intern");


//Tests the intern objedt
test('can instantiate Intern instance', () => {
    const intern = new Intern("Tomeeka", 1, "tlillysibley@gmail.com", "JHU");
    expect(intern.school).toBe("JHU");
});

//Grab school information from getSchool()
test('can get school input', () => {
    const intern = new Intern("Tomeeka", 1, "tlillysibley@gmail.com", "JHU");
    expect(intern.getSchool()).toBe("JHU");
});
//Grab the role from getRole()
test('can get role of intern', () => {
    const intern = new Intern("Tomeeka", 1, "tlillysibley@gmail.com", "JHU");
    expect(intern.getRole()).toBe("Intern");
});
