"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function NewOrganisationForm() {
  return (
    <form className="space-y-5">
      {/* name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block">
          Organisation Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="global_input w-full"
          placeholder="Enter organisation name"
          required
        />
      </div>

      {/* pincode */}
      <div className="space-y-1">
        <label htmlFor="pincode" className="block">
          Pincode*
        </label>
        <InputOTP
          maxLength={6}
          id="pincode"
          pattern={REGEXP_ONLY_DIGITS}
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
          Create Organisation
        </button>
      </div>
    </form>
  );
}
