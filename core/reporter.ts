// src/core/reporter.ts
export class Reporter {
  static report(result: boolean): void {
    if (result) {
      console.log("Test passed!");
    } else {
      console.log("Test failed!");
    }
  }
}
