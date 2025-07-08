export type createData = {
  name: string;
  pincode: string;
  description: string;
  banner?: string;
  logo?: string;
};

export type validateData = {
  pincode: string;
};