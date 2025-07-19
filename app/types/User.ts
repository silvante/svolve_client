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

export interface Type {
  id: number;
  name: string;
  description: string;
  price: number;
  client_count: number;
  _count: {
    clients: number;
  };
  created_at: Date;
}

export interface Client {
  id: number;
  name: string;
  born_in: number;
  surname: string;
  origin: string;
  type: Type;
  is_checked: boolean;
  price: number;
  created_at: Date;
}
