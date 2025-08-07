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
import {
  pushVacancy,
  replaceVacancy,
  setLoading,
} from "@/app/store/slices/vacancySlice";

export default function UpdateVacancyForm({ vacancy }: { vacancy: Vacancy }) {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSelector((state: any) => state.user);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  // form data
  const [name, setName] = useState(currentUser.name);
  const [age, setAge] = useState(`${vacancy.age}`);
  const [origin, setOrigin] = useState(vacancy.origin);
  const [job, setJob] = useState(vacancy.job);
  const [about, setAbout] = useState(vacancy.about);
  const [contact, setContact] = useState(vacancy.contact);

  async function HandleUpdateOrg(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const update_data: any = {
        name,
        age: +age,
        about,
        origin,
        job,
        contact,
      };

      const res: any = await vacancyService.update(vacancy.id, update_data);
      const updated_vacancy: Vacancy = res;
      console.log(updated_vacancy);

      dispatch(replaceVacancy(updated_vacancy));
      router.push("/panel/vacancies");
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
    <form className="space-y-5" onSubmit={HandleUpdateOrg}>
      {error !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
          {error}
        </p>
      )}

      {/* account */}
      <div className="space-y-1 flex items-start flex-col">
        <p className="block">Account*</p>
        <div className="p-1 border-gray-300 border-1 rounded-full pr-3 flex gap-2 items-center cursor-pointer opacity-50">
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
          account can not be changed, and if there is a problem with this,
          delete and recreate vacancy!
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
          className="global_input w-full opacity-50"
          placeholder="Enter your name"
          readOnly
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
        />
        <p className="text-sm text-gray-500">
          Name also can not be changed, because it had been attached to your
          account!
        </p>
      </div>

      {/* name */}
      <div className="space-y-1">
        <label htmlFor="job" className="block">
          What is your profession*
        </label>
        <input
          type="text"
          id="job"
          name="job"
          className="global_input w-full"
          placeholder="Your profession"
          value={job}
          onChange={(e) => setJob(e.target.value)}
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
          minLength={300}
          id="about"
          name="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="global_input w-full resize-none"
          placeholder="Simple description"
          required
        />
        {about.length > 0 && (
          <p>
            Description contains:{" "}
            <span
              className={`transition-all ${
                about.length > 300 ? "text-green-600" : "text-red-600"
              }`}
            >
              {about.length} characters
            </span>
          </p>
        )}
        <p className="text-sm text-gray-500">
          Min 300 characters, Max 500 characters
        </p>
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
          {isLoading ? "creating..." : "Create Vacancy"}
        </button>
      </div>
    </form>
  );
}
