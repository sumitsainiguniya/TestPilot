// src/index.ts
import { ScenarioGenerator } from "./core/scenarioGenerator";
import { ApiTester } from "./core/apiTester";
import { LoadTester } from "./core/loadTester";
import { Reporter } from "./core/reporter";

async function main() {
  const scenario = ScenarioGenerator.generate();
  const apiTestResult = await ApiTester.test(scenario);
  Reporter.report(apiTestResult);

  const numUsers = 100;
  await LoadTester.simulateLoad(scenario, numUsers);
}

main();
