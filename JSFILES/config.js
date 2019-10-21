"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
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
        tags: "@JustTesting",
        format: 'json:./reports/cucumberReport.json',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLGlFQUFtRDtBQUV4QyxRQUFBLE1BQU0sR0FBVztJQUMxQix1Q0FBdUM7SUFDdkMsU0FBUyxFQUFFLFFBQVE7SUFFbkIsMkNBQTJDO0lBQzNDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELHdCQUF3QjtJQUN4QixLQUFLLEVBQUU7UUFDTCw4QkFBOEIsQ0FBQyxpQkFBaUI7S0FDakQ7SUFDRCxrREFBa0Q7SUFFbEQsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtJQUVmLFlBQVksRUFBRTtRQUNaLDJCQUEyQjtRQUMzQixJQUFJLEVBQUUsY0FBYztRQUNwQixNQUFNLEVBQUUsb0NBQW9DO1FBRTVDLE9BQU8sRUFBRTtZQUNQLGdCQUFnQixDQUFDLGlCQUFpQjtTQUNuQztLQUNGO0lBQ0QsK0VBQStFO0lBQy9FLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsTUFBTSxFQUFFLGdDQUFnQztZQUN4QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNSLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3JCO1NBQ0YsQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUMifQ==