"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FileImage } from "lucide-react";

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

      {/* desctiprion */}
      <div className="space-y-1">
        <label htmlFor="description" className="block">
          Organisation Description*
        </label>
        <textarea
          rows={3}
          maxLength={500}
          id="description"
          name="description"
          className="global_input w-full resize-none"
          placeholder="Enter organisation description"
          required
        />
        <p className="text-sm text-gray-500">Max 500 characters</p>
      </div>

      {/* Banner */}
      <div className="space-y-1">
        <label
          htmlFor="banner"
          className="flex items-center justify-center p-10 bg-gray-100 border border-gray-500 border-dashed rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <div className="flex flex-col items-center gap-2 text-gray-700">
            <FileImage />
            Upload Banner Image (optional)
          </div>
        </label>
        <input type="file" name="banner" id="banner" className="hidden" />
      </div>

      {/* logo */}
      <div className="space-y-1">
        <label
          htmlFor="logo"
          className="flex items-center justify-center p-5 bg-gray-100 border border-gray-500 border-dashed rounded-md cursor-pointer hover:bg-gray-200 transition-colors w-64"
        >
          <div className="flex flex-col items-center gap-2 text-gray-700">
            <FileImage />
            Upload Logo Image (optional)
          </div>
        </label>
        <input type="file" name="logo" id="logo" className="hidden" />
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
