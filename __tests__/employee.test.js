const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name by constructor arguments", () => {
  const e = new Employee("Tomeeka", 1, "tlillysibley@gmail.com");
  expect(e.name).toBe("Tomeeka");
});

test("Can set id by constructor argument", () => {
  const e = new Employee("Tomeeka", 1, "tlillysibley@gmail.com");
  expect(e.id).toBe(1);
});

test("Can set email by constructor argument", () => {
    const e = new Employee("Tomeeka", 1, "tlillysibley@gmail.com");
    expect(e.email).toBe("tlillysibley@gmail.com");
  });

  test("Can get name from getName()", () => {
    const e = new Employee("Tomeeka", 1, "tlillysibley@gmail.com");
    expect(e.getName()).toBe("Tomeeka");
  });
  
  test("Can get id by getId()", () => {
    const e = new Employee("Tomeeka", 1, "tlillysibley@gmail.com");
    expect(e.getId()).toBe(1);
  });
  
  test("Can get email by getEmail()", () => {
    const e = new Employee("Tomeeka", 1, "tlillysibley@gmail.com");
    expect(e.getEmail()).toBe("tlillysibley@gmail.com");
  });
  
  test("can get role of employee", () => {
    const e = new Employee("Tomeeka", 1, "tlillysibley@gmail.com");
    expect(e.getRole()).toBe("Employee");
  });