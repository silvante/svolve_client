"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FileImage, Trash2 } from "lucide-react";
import { useState } from "react";
import organizationService from "@/app/api/services/organizationService";
import { useDispatch, useSelector } from "react-redux";
import {
  pushOrganization,
  setLoading,
} from "@/app/store/slices/organizationSlice";
import { BannerData, Organization, Vacancy } from "@/app/types/User";
import { useRouter } from "next/navigation";
import uploadService from "@/app/api/services/uploadsService";
import vacancyService from "@/app/api/services/vacancyService";

export default function NewVacancyForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSelector((state: any) => state.user);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  // form data
  const [name, setName] = useState(currentUser.name);
  const [age, setAge] = useState("");
  const [origin, setOrigin] = useState("");
  const [about, setAbout] = useState("");

  async function HandleCreateOrg(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const createData: any = {
        name,
        age,
        about,
        origin,
      };

      const res: any = await vacancyService.create(createData);
      const vacancy: Vacancy = res;
      //   dispatch(setLoading());
      //   dispatch(pushOrganization(organization));
      //   router.push("/panel/organizations");
      //   setIsLoading(false);
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
    <form className="space-y-5" onSubmit={HandleCreateOrg}>
      {error !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
          {error}
        </p>
      )}
      {/* name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block">
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="global_input w-full"
          placeholder="Enter organization name"
          readOnly
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
        />
      </div>

      {/* desctiprion */}
      <div className="space-y-1">
        <label htmlFor="about" className="block">
          Tell us about yourself*
        </label>
        <textarea
          rows={3}
          maxLength={500}
          id="about"
          name="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="global_input w-full resize-none"
          placeholder="Simple description"
          required
        />
        <p className="text-sm text-gray-500">Max 500 characters</p>
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
          value={age}
          onChange={(value) => setAge(value)}
          required
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} className="border-gray-400" />
            <InputOTPSlot index={1} className="border-gray-400" />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-gray-500">Numbers only</p>
      </div>

      {/* submit */}
      <div>
        <button
          type="submit"
          className="bg-violet-600 text-white py-2 px-5 rounded-md hover:bg-violet-700 transition-colors cursor-pointer"
        >
          {isLoading ? "creating..." : "Create Organization"}
        </button>
      </div>
    </form>
  );
}
