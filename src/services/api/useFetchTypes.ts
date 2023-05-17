interface Company {
  id: number;
  sk_company: string;
  name: string;
  is_active: number;
  jobs_frequency: string;
  created_at: string;
  updated_at: string | null;
}

export interface Event {
  events: string;
  tag: string;
  local: string;
  date: string;
  city: string | null;
  uf: string | null;
  destination_local: string | null;
  destination_city: string | null;
  destination_uf: string | null;
  comment: string | null;
}

export interface Response {
  success: boolean;
  data: {
    company: Company;
    tracking_code: string;
    status: string;
    events: Event[];
  }
}
