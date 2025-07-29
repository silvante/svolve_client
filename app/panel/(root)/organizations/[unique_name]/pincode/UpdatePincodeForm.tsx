"use client";
import { useState } from "react";
import organizationService from "@/app/api/services/organizationService";
import { useDispatch, useSelector } from "react-redux";
import { replaceOrganization } from "@/app/store/slices/organizationSlice";
import { Organization } from "@/app/types/User";
import { useParams, useRouter } from "next/navigation";
import Spinner from "@/app/(global_components)/Spinner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export default function UpdatePincodeForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { unique_name } = useParams();
  const { organizations, loading } = useSelector(
    (state: any) => state.organizations
  );

  if (loading) {
    return (
      <div className="w-full py-10 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const org = organizations.find(
    (org: Organization) => org.unique_name === String(unique_name)
  );

  const [error, setError] = useState("");
  const [oldPincode, setOldPincode] = useState("");
  const [newPincode, setNewPincode] = useState("");
  const [pincodeConfirmation, setPincodeConfirmation] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  async function HandleUpdateOrg(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = {
        old_pincode: oldPincode,
        new_pincode: newPincode,
        pincode_confirmation: pincodeConfirmation,
      };
      const res: any = await organizationService.updatePincode(
        org.unique_name,
        formData
      );
      const organization: Organization = res;
      dispatch(replaceOrganization(organization));
      router.push("/panel/organizations");
      setIsLoading(false);
    } catch (error: any) {
      if (!error.response) {
        setError("Make sure that you filled all fields correct!");
      } else {
        setError(error.response.data.message);
      }
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={HandleUpdateOrg}>
      {error !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
          {error}
        </p>
      )}
      {/* old pincode */}
      <div className="space-y-1">
        <label htmlFor="old_pincode" className="block">
          Old Pincode*
        </label>
        <InputOTP
          maxLength={6}
          id="old_pincode"
          pattern={REGEXP_ONLY_DIGITS}
          value={oldPincode}
          onChange={(value) => setOldPincode(value)}
          required
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
        <p className="text-sm text-gray-500">Number only</p>
      </div>

      <div className="w-full border-b border-gray-200"></div>

      {/* Banner */}
      <div className="space-y-1">
        <label htmlFor="new_pincode" className="block">
          New Pincode*
        </label>
        <InputOTP
          maxLength={6}
          id="new_pincode"
          pattern={REGEXP_ONLY_DIGITS}
          value={newPincode}
          onChange={(value) => setNewPincode(value)}
          required
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
        <p className="text-sm text-gray-500">Number only</p>
      </div>

      {/* logo */}
      <div className="space-y-1">
        <label htmlFor="pincode_contifmation" className="block">
          Confirm Pincode*
        </label>
        <InputOTP
          maxLength={6}
          id="pincode_contifmation"
          pattern={REGEXP_ONLY_DIGITS}
          value={pincodeConfirmation}
          onChange={(value) => setPincodeConfirmation(value)}
          required
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
        <p className="text-sm text-gray-500">Number only</p>
      </div>

      {/* submit */}
      <div>
        <button
          type="submit"
          className="bg-violet-600 text-white py-2 px-5 rounded-md hover:bg-violet-700 transition-colors cursor-pointer"
        >
          {isLoading ? "updating..." : "Update Organization"}
        </button>
      </div>
    </form>
  );
}
