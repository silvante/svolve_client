"use client";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import organizationService from "@/app/api/services/organizationService";
import { useDispatch } from "react-redux";
import {
  clearValidation,
  updateValidation,
  updateValidationOrg,
} from "@/app/store/slices/validatorSlice";
import { useRouter } from "next/navigation";
import Spinner from "@/app/(global_components)/Spinner";

export default function PincodeForm({ unique_name }: { unique_name: string | null }) {
  if (!unique_name || unique_name === null) {
    return;
  }
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [pincode, setPincode] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearValidation());
  }, []);

  const handlePincodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setErrorMessage("");
      setLoading(true);
      if (pincode.length !== 6) {
        setErrorMessage("Pincode must be 6 digits long.");
        setLoading(false);
        return;
      }

      const res: any = await organizationService.validate(unique_name, {
        pincode,
      });

      if (!res.validation) {
        setErrorMessage("Invalid pincode. Please try again.");
        setLoading(false);
        return;
      }
      setErrorMessage("");
      dispatch(updateValidation(res.validation));
      dispatch(updateValidationOrg(res.organization));
      router.push(`/org/${unique_name}`);
    } catch (error: any) {
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.message ||
          "An error occurred while validating the pincode."
        );
      }
      const res = error?.response?.data || error?.response;

      if (
        res?.statusCode === 407 &&
        res?.message === "organization_is_not_subscribed"
      ) {
        router.push(`/org/${unique_name}/subscription`);
      }
    } finally {
      setLoading(false);
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
        {loading && (
          <div className="w-full flex justify-center items-center">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}
