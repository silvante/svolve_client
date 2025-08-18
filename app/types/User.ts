export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  bio: string;
  contact: string;
  provider: string;
  provider_id: string;
  avatar: string;
  default_organization: DefaultOrganization;
  created_at: Date;
  _count: {
    organizations: number;
  };
}

export interface Organization {
  id: number;
  name: string;
  description: string;
  unique_name: string;
  origin: string;
  banner: BannerData;
  logo: string;
  created_at: Date;
  _count: {
    workers: number;
    types: number;
    clients: number;
  };
}

export interface DefaultOrganization {
  id: number;
  organization: Organization;
}

export interface Type {
  id: number;
  name: string;
  description: string;
  price: number;
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

export type BannerData = {
  original: string;
  thumbnail: string;
};

export interface Vacancy {
  id: number;
  name: string;
  age: number;
  about: string;
  origin: string;
  job: string;
  contact: string;
  user: User;
  created_at: Date;
}

export interface Worker {
  id: number;
  worker_id: number;
  worker: User;
  role: string;
  attached_types: WorkerAttachedTypes[];
  created_at: Date;
}

export interface WorkerAttachedTypes {
  id: number;
  type: Type;
  type_id: number;
}
