"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const mkdirp = __importStar(require("mkdirp"));
const reporter = __importStar(require("cucumber-html-reporter"));
const report = __importStar(require("cucumber-html-report"));
const htmlReports = process.cwd() + "/reports/html";
const targetJson = process.cwd() + "/reports/json/cucumber_report.json";
const cucumberReportOptions = {
    source: targetJson,
    dest: htmlReports,
    name: "cucumber_report.html",
    title: "Cucumber Report"
};
const cucumberReporteroptions = {
    theme: "bootstrap",
    launchReport: true,
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true
};
class Reporter {
    static createDirectory(dirName) {
        //Check if the directory exist
        if (!fs.existsSync(dirName)) {
            mkdirp.sync(dirName);
        }
    }
    static createHTMLReport() {
        try {
            reporter.generate(cucumberReporteroptions); //invoke cucumber-html-reporter
            report
                .create(cucumberReportOptions)
                .then(function () {
                //invoke cucumber-html-report
                // creating two reports(optional) here, cucumber-html-report gives directory already exists as cucumber-html-reporter already creates the html dir!
                // suggestion- use either one of the reports based on your needs
                console.log("cucumber_report.html created successfully!");
            })
                .catch(function (err) {
                if (err) {
                    console.error(err);
                }
            });
        }
        catch (err) {
            if (err) {
                console.log("Failed to save cucumber test results to json file.");
                console.log(err);
            }
        }
    }
    /**
     * Allure reports method, would work only with cucumber 1.3.x & less versions
     * Currently incompatible with latest cucumber 3.x version
     */
    static createAllureXML() {
        const allureReporter = require("cucumberjs-allure-reporter");
        const xmlReports = process.cwd() + "/reports/xml";
        Reporter.createDirectory(xmlReports);
        allureReporter.config({
            targetDir: xmlReports
        });
    }
}
exports.Reporter = Reporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcmVwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDQUF5QjtBQUN6QiwrQ0FBa0M7QUFFbEMsaUVBQW1EO0FBQ25ELDZEQUFnRDtBQUNoRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsZUFBZSxDQUFDO0FBQ3BELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxvQ0FBb0MsQ0FBQztBQUV4RSxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxzQkFBc0I7SUFDNUIsS0FBSyxFQUFFLGlCQUFpQjtDQUN6QixDQUFDO0FBQ0YsTUFBTSx1QkFBdUIsR0FBRztJQUM5QixLQUFLLEVBQUUsV0FBVztJQUNsQixZQUFZLEVBQUUsSUFBSTtJQUNsQixRQUFRLEVBQUUsVUFBVTtJQUNwQixNQUFNLEVBQUUsV0FBVyxHQUFHLHlCQUF5QjtJQUMvQyxzQkFBc0IsRUFBRSxJQUFJO0NBQzdCLENBQUM7QUFFRixNQUFhLFFBQVE7SUFFbkIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPO1FBQzVCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RCO0lBQ0QsQ0FBQztJQUVILE1BQU0sQ0FBQyxnQkFBZ0I7UUFFckIsSUFBSTtZQUNGLFFBQVEsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLCtCQUErQjtZQUMzRSxNQUFNO2lCQUNILE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztpQkFDN0IsSUFBSSxDQUFDO2dCQUNKLDZCQUE2QjtnQkFDN0IsbUpBQW1KO2dCQUNuSixnRUFBZ0U7Z0JBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQVMsR0FBRztnQkFDakIsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7Z0JBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7U0FDRjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFFSCxNQUFNLENBQUMsZUFBZTtRQUNwQixNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUM3RCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUNwQixTQUFTLEVBQUUsVUFBVTtTQUN0QixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUEvQ0QsNEJBK0NDIn0=