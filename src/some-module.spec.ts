describe('SomeModule', function(){
    it('has to set some data', function () {
        let someModule = new SomeModule();
        let dataToSet = 1;
        someModule.setSomeData(dataToSet);
        expect(someModule['someData']).toBe(dataToSet);
    });

    it('has to get some data', function () {
        let someModule = new SomeModule();
        expect(someModule.getSomeData()).toBe(undefined);
        someModule['someData'] = 1;
        expect(someModule.getSomeData()).toBe(1);
    });
});