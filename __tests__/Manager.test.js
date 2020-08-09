const Manager = require(`../lib/Manager`);

describe(`creates manager object`, () => {
    test(`should return back the manager name, id, and email and github username`, () => {
        const manager = new Manager(`Jessica Hill`, 3471, `jesshill@gmail.com`, 204);

        expect(manager.name).toBe(`Jessica Hill`);
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(`jesshill@gmail.com`);
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });

    test(`Employee Methods along with the new manager specific calls should return back the correct data`, () => {
        const manager = new Manager(`Yohan Murillo`, 4927, `sipke@gmail.com`,);

        expect(manager.getName()).toEqual(expect.stringContaining(`Yohan Murillo`));
        expect(manager.getId()).toEqual(manager.id.toString());
        expect(manager.getEmail()).toEqual(expect.stringContaining(`sipke@gmail.com`));
        expect(manager.getRole()).toEqual(expect.stringContaining(`Manager`));
    });
});