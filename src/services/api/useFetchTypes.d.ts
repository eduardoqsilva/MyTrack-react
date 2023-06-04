export interface Response {
  codigo: string;
  host: string;
  eventos: {
    data: string;
    hora: string;
    local: string;
    status: string;
    subStatus: string[];
  }[];
  time: number;
  quantidade: number;
  servico: string;
  ultimo: string;
}
