"use client";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import organisationService from "@/app/api/services/organisationService";
import { useDispatch } from "react-redux";
import {
  clearValidation,
  updateUniqueName,
  updateValidation,
} from "@/app/store/slices/validatorSlice";
import { useRouter } from "next/navigation";

export default function PincodeForm({ unique_name }: { unique_name: string }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [pincode, setPincode] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearValidation());
  }, []);

  const handlePincodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (pincode.length !== 6) {
        setErrorMessage("Pincode must be 6 digits long.");
        return;
      }

      const res: any = await organisationService.validate(unique_name, {
        pincode,
      });

      if (!res.validation) {
        setErrorMessage("Invalid pincode. Please try again.");
        return;
      }
      setErrorMessage("");
      dispatch(updateValidation(res.validation));
      dispatch(updateUniqueName(unique_name));
      router.push(`/org/${unique_name}`);
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while validating the pincode.");
    }
  };

  return (
    <div className="max-w-2xl w-full flex flex-col items-center justify-center gap-5">
      <form onSubmit={handlePincodeSubmit}>
        <InputOTP
          maxLength={6}
          id="pincode"
          pattern={REGEXP_ONLY_DIGITS}
          value={pincode}
          onChange={(value) => setPincode(value)}
          required
          autoFocus
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} className="border-gray-400" />
            <InputOTPSlot index={1} className="border-gray-400" />
            <InputOTPSlot index={2} className="border-gray-400" />
            <InputOTPSlot index={3} className="border-gray-400" />
            <InputOTPSlot index={4} className="border-gray-400" />
            <InputOTPSlot index={5} className="border-gray-400" />
          </InputOTPGroup>
        </InputOTP>
      </form>
      <div className="p-3 w-full">
        {errorMessage !== "" && (
          <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2 text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
