// src/core/apiTester.ts
import axios, { AxiosResponse } from "axios";
import { Scenario } from "../types/scenario.interface";

export class ApiTester {
  static async test(scenario: Scenario): Promise<boolean> {
    try {
      // Send API request
      const response: AxiosResponse = await axios.post(
        "/api/endpoint",
        scenario.inputs
      );

      // Validate response
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("API test failed:", error);
      return false;
    }
  }
}
