export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  provider: string;
  provider_id: string;
  created_at: Date;
}

export interface Organisation {
  id: number;
  name: string;
  description: string;
  unique_name: string;
  banner: string;
  logo: string;
  created_at: Date;
}
