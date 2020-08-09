const Intern = require(`../lib/Intern`);

describe(`creates Intern object`, () => {
    test(`should return back the intern name, id, and email and github username`, () => {
        const intern = new Intern(`Jessica Hill`, 3471, `jesshill@gmail.com`, `Wellington High School`);

        expect(intern.name).toBe(`Jessica Hill`);
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(`jesshill@gmail.com`);
        expect(intern.school).toEqual(expect.any(String));
    });

    test(`Employee Methods along with the new intern specific calls should return back the correct data`, () => {
        const intern = new Intern(`Yohan Murillo`, 4927, `sipke@gmail.com`, `University of Central Florida`);

        expect(intern.getName()).toEqual(expect.stringContaining(`Yohan Murillo`));
        expect(intern.getId()).toEqual(intern.id.toString());
        expect(intern.getEmail()).toEqual(expect.stringContaining(`sipke@gmail.com`));
        expect(intern.getRole()).toEqual(expect.stringContaining(`Intern`));
        expect(intern.getSchool()).toEqual(expect.stringContaining(`University of Central Florida`))
    });
});