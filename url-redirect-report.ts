import {
  Reporter,
  FullResult,
  TestCase,
  TestResult,
  Suite,
  FullConfig,
} from "@playwright/test/reporter";
import fs from "fs";

class CustomMarkdownReporter implements Reporter {
  onBegin(config: FullConfig, suite: Suite) {
    let report = `# Test Results Report\n\n`;
    report += `Starting the run with ${suite.allTests().length} tests\n\n`;
    console.log(report);

    // Overwrite at the beginning to create a fresh report
    fs.writeFileSync("test-results.md", report);
  }


  onTestEnd(test: TestCase, result: TestResult) {
    let report = `**Finished test:** ${test.title}\n`;
    report += `**Status:** ${result.status}\n`;
    report += `\n---\n`;
    console.log(report);

    // Append result
    fs.appendFileSync("test-results.md", report);
  }

  onEnd(result: FullResult) {
    let report = `\n## Finished the run: ${result.status}\n`;
    console.log(report);

    // Append final summary
    fs.appendFileSync("test-results.md", report);
  }
}

export default CustomMarkdownReporter;
