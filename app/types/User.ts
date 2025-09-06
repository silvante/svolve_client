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
  owner: User;
  owner_id: number;
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
    attached_workers: number;
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
  organization_id: number;
  organization: Organization;
  attached_types: WorkerAttachedTypes[];
  created_at: Date;
}

export interface WorkerAttachedTypes {
  id: number;
  type: Type;
  type_id: number;
}

export interface ClientsByDay {
  day: string;
  count: number;
}

export interface ClientsByMonth {
  month: string;
  count: number;
}

export interface ClientsByType {
  type_id: number;
  _count: {
    id: number;
  };
}

export interface ClientStats {
  clientsByMonth: ClientsByMonth[];
  clientsByDay: ClientsByDay[];
  clientsByType: ClientsByType[];
}

export interface RevenueByDay {
  day: string;
  total: number;
}

export interface RevenueByMonth {
  month: string;
  total: number;
}

export interface RevenueByType {
  type_id: number;
  type_name: string;
  revenue: number;
}

export interface RevenueStats {
  revenueByDay: RevenueByDay[];
  revenueByMonth: RevenueByMonth[];
  revenueByType: RevenueByType[];
}
