describe("Angular application - Get started", function() {

    beforeEach(function() {
        browser.get('https://angularjs.org/');
        browser.sleep(2000);
        browser.manage().window().maximize();
    });

    it("Validate APPLICATION URL", function() {

        expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');

    })

    it("Validate PAGE TITLE", function() {

        expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');

    })

});