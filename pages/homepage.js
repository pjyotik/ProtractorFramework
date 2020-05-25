let homepage = function() {

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.id('gobutton'));
    let output = element(by.className('ng-binding'));
    let outputHistory = element.all(by.repeater('result in memory'));

    this.getApplication = function(url) {
        browser.get(url);
        browser.manage().window().maximize();
    }

    this.enterFirstNumber = function(firstNo) {
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo) {
        secondNumber_input.sendKeys(secondNo);
    };

    this.clickGo = function() {
        goButton.click();
    };

    this.verifyResult = function(result) {
        expect(output.getText()).toEqual(result);
    };

    this.verifyHistory = function(resultCount) {
        expect(outputHistory.count()).toEqual(resultCount);
    }

};

module.exports = new homepage();