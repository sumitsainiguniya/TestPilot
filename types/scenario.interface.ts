export interface Scenario {
  inputs: Record<string, any>;
  actions: string[];
  expectedOutcome: Record<string, any>;
}
