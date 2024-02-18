import { Scenario } from "../types/scenario.interface";
import { ApiTester } from "./apiTester";

// src/core/loadTester.ts
export class LoadTester {
  static async simulateLoad(
    scenario: Scenario,
    numUsers: number
  ): Promise<void> {
    // Simulate load by sending multiple requests concurrently
    const promises = Array.from({ length: numUsers }, () =>
      ApiTester.test(scenario)
    );
    await Promise.all(promises);
    console.log(`Load test completed for ${numUsers} users.`);
  }
}
