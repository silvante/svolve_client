"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Vacancy } from "@/app/types/User";
import { useRouter } from "next/navigation";
import vacancyService from "@/app/api/services/vacancyService";
import { origins } from "@/app/global/data";
import { UserCircle } from "lucide-react";

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
  const [contact, setContact] = useState("");

  async function HandleCreateOrg(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const createData: any = {
        name,
        age: +age,
        about,
        origin,
        contact,
      };

      const res: any = await vacancyService.create(createData);
      const vacancy: Vacancy = res;
      //   dispatch(setLoading());
      //   dispatch(pushOrganization(organization));
        router.push("/panel/vacanciesI");
      setIsLoading(false);
      setError("");
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

      {/* account */}
      <div className="space-y-1 flex items-start flex-col">
        <p className="block">Account*</p>
        <div className="p-1 border-gray-300 border-1 rounded-full pr-3 flex gap-2 items-center cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden flex justify-center items-center text-gray-500">
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt="Your avatar"
                className="w-full h-full aspect-square object-cover"
              />
            ) : (
              <UserCircle />
            )}
          </div>
          <p>{currentUser.name}</p>
        </div>
        <p className="text-sm text-gray-500">
          This accaunt will be attached to your vacancy, if you want to change
          it, switch account or customize it.{" "}
        </p>
      </div>

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

      {/* contact */}
      <div className="space-y-1">
        <label htmlFor="contact" className="block">
          Your contact*
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          className="global_input w-full"
          placeholder="Enter your contacts"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          maxLength={100}
          required
        />
      </div>

      {/* origin */}
      <div className="space-y-1">
        <label htmlFor="origin" className="block">
          Where are you from?*
        </label>
        <select
          id="origin"
          name="origin"
          className="global_input w-full none"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
        >
          {origins.map((origin) => {
            return (
              <option key={origin.id} value={origin.name}>
                {origin.name}
              </option>
            );
          })}
        </select>
      </div>

      {/* pincode */}
      <div className="space-y-1">
        <label htmlFor="age" className="block">
          Your age*
        </label>
        <InputOTP
          maxLength={6}
          id="age"
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
