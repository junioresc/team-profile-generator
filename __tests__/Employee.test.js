const Employee = require(`../lib/Employee`);

describe(`creates Employee object`, () => {
    test(`should return back the Employee name, id, and email`, () => {
        const employee = new Employee(`Jessica Hill`, 3471, `jesshill@gmail.com`);

        expect(employee.name).toBe(`Jessica Hill`);
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(`jesshill@gmail.com`);
    });

    test(`Employee Methods should return back the correct data`, () => {
        const employee = new Employee(`Yohan Murillo`, 4927, `sipke@gmail.com`);

        expect(employee.getName()).toEqual(expect.stringContaining(`Yohan Murillo`));
        expect(employee.getId()).toEqual(employee.id.toString());
        expect(employee.getEmail()).toEqual(expect.stringContaining(`sipke@gmail.com`));
        expect(employee.getRole()).toEqual(expect.stringContaining(`Employee`));
    });
});