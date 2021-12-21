export interface ILogger {
  log(message: string): void;
  error(message: string): void;
}

// Add contract names there to support autocomplete
export type ContractNames = "CgsToken";
