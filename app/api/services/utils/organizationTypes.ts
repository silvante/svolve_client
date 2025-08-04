export type createData = {
  name: string;
  pincode: string;
  description: string;
  origin: string;
  banner?: string;
  logo?: string;
};

export type validateData = {
  pincode: string;
};

export type updateData = {
  name: string;
  description: string;
  banner?: string;
  origin: string;
  logo?: string;
};

export type updatePincodeData = {
  old_pincode: string;
  new_pincode: string;
  pincode_confirmation: string;
};
