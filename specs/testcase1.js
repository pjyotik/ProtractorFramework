let homepage = require('../pages/homepage');

describe('Super Calculator Application Demo', function() {

    function addNumber(a, b) {
        homepage.enterFirstNumber(a);
        homepage.enterSecondNumber(b);
        homepage.clickGo();
    }


    beforeEach(function() {
        homepage.getApplication('http://juliemr.github.io/protractor-demo/');
    });


    it('Verify Page Title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('Add Two Numbers - Positive', function() {

        addNumber(5, 5);
        homepage.verifyResult('10');
        homepage.verifyHistory(1);
        browser.sleep(2000);
    });

    it('Add Two Numbers - Negative', function() {

        addNumber(5, 5);
        homepage.verifyResult('10');
        homepage.verifyHistory(5); // Failure Scenario
        browser.sleep(2000);
    });

});