import { Config } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    '../FeatureFile/login.feature' // accepts a glob
  ],
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  cucumberOpts: {
    // require step definitions
    tags: "@JustTesting",// which tag of feature file should excute
    format: 'json:./reports/cucumberReport.json',// what type formate report need and loaction 
    
    require: [
      './StepDef/*.js' // accepts a glob
    ]
  },
  //Below step is used to covert  the cucumber Json report to cucmber HTML Report
  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: './reports/cucumberReport.json',
      output: './reports/cucumber_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome 77.0.3865.90",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };

    reporter.generate(options);
  },
};