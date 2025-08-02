export interface AvaliacaoInfo {
  status: number;
  fqdn: string;
  fqdnace: string;
  exempt: boolean;
  hosts: string[];
  "publication-status": string;
  "expires-at": string;
  suggestions: string[];
}
