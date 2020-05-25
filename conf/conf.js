var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    dest: 'target/Screenshots',
    filename: 'Test-Report.html',
});


exports.config = {
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // multiCapabilities: [{
    //     'browserName': 'chrome'
    // }, {
    //     'browserName': 'firefox'
    // }],

    capabilities: {
        'browserName': 'chrome',

        chromeOptions: {
            args: ["--headless"]
        }
    },
    framework: 'jasmine',
    //specs: ['..//specs//sampleTest.js', '..//specs//testcase1.js'],
    suites: {
        //Suite name and location give * to run all the specs or provide the name 
        smoke: ['..//specs//sampleTest.js'],
        endtoend: ['..//specs//testcase1.js'],
        //Futhermore you can select few test specs
        //testfew: ['./smoke/editorder.spec.js', './smoke/cancelorder.spec.js']

    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {

        //obtain results in xml file
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'target/Jasmine-Test-Results',
            filePrefix: 'xmlresults'
        }));

        // adding screenshots on failure
        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function(caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function(png) {
                            var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });


        jasmine.getEnv().addReporter(reporter);

        // Allure reports settings
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    //HTMLReport called once tests are finished
    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function(caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            var HTMLReport = require('protractor-html-reporter-2');

            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: 'target/Jasmine-Test-Results',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: 'target/Jasmine-Test-Results/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from("target/Jasmine-Test-Results/xmlresults.xml", testConfig);
        });
    }


};