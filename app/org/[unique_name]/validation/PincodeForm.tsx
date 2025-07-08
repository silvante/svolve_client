"use client";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export default function PincodeForm({ unique_name }: { unique_name: string }) {
  const [pincode, setPincode] = useState("");

  return (
    <form>
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
  );
}
