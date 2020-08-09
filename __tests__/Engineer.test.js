const Engineer = require(`../lib/Engineer`);

describe(`creates Engineer object`, () => {
    test(`should return back the Engineer name, id, and email and github username`, () => {
        const engineer = new Engineer(`Jessica Hill`, 3471, `jesshill@gmail.com`, `jessicah@github.com`);

        expect(engineer.name).toBe(`Jessica Hill`);
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(`jesshill@gmail.com`);
        expect(engineer.github).toEqual(expect.any(String));
    });

    test(`Employee Methods along with the new Engineer specific calls should return back the correct data`, () => {
        const engineer = new Engineer(`Yohan Murillo`, 4927, `sipke@gmail.com`, `sipke@github.com`);

        expect(engineer.getName()).toEqual(expect.stringContaining(`Yohan Murillo`));
        expect(engineer.getId()).toEqual(engineer.id.toString());
        expect(engineer.getEmail()).toEqual(expect.stringContaining(`sipke@gmail.com`));
        expect(engineer.getRole()).toEqual(expect.stringContaining(`Engineer`));
        expect(engineer.getGithub()).toEqual(expect.stringContaining(`sipke@github.com`))
    });
});