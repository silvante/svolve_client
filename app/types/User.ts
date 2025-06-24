export default interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  provider: string;
  provider_id: string;
  created_at: Date;
}
