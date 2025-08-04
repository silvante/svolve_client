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
import { useDispatch } from "react-redux";
import {
  pushOrganization,
  setLoading,
} from "@/app/store/slices/organizationSlice";
import { BannerData, Organization } from "@/app/types/User";
import { useRouter } from "next/navigation";
import uploadService from "@/app/api/services/uploadsService";
import { origins } from "@/app/global/data";

export default function NewOrganizationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  // form data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pincode, setPincode] = useState("");
  const [origin, setOrigin] = useState(origins[0].name);

  // upload data
  const [logoBase64, setLogoBase64] = useState<string | null>(null);
  const [bannerBase64, setBannerBase64] = useState<string | null>(null);

  const [logo, setlogo] = useState<File | null>(null);
  const [banner, setbanner] = useState<File | null>(null);

  // converter
  function ConvertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function HandleChangeBanner(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setbanner(file);
      const base64 = await ConvertImageToBase64(file);
      setBannerBase64(base64);
    }
  }

  async function HandleChangeLogo(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setlogo(file);
      const base64 = await ConvertImageToBase64(file);
      setLogoBase64(base64);
    }
  }

  async function HandleCreateOrg(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Prepare data for organization creation
      let bannerData: BannerData | undefined = undefined;
      let logoData: string | undefined = undefined;

      // upload banner if we have it
      if (banner) {
        const BannerformData = new FormData();
        BannerformData.append("file", banner);
        try {
          const res: any = await uploadService.uploadBanner(BannerformData);
          const new_banner: BannerData = res;
          bannerData = new_banner;
        } catch (error) {
          setError("error while uploading banner");
          setIsLoading(false);
          return;
        }
      }

      // upload logo if it is present
      if (logo) {
        const LogoformData = new FormData();
        LogoformData.append("file", logo);
        try {
          const res: any = await uploadService.uploadLogo(LogoformData);
          logoData = String(res);
        } catch (error) {
          setError("error while uploading logo");
          setIsLoading(false);
          return;
        }
      }

      // Build the createData object
      const createData: any = {
        name,
        description,
        pincode,
        origin,
        ...(bannerData && { banner: bannerData }),
        ...(logoData && { logo: logoData }),
      };

      console.log(createData);

      const res: any = await organizationService.create(createData);
      console.log(res);

      const organization: Organization = res;
      dispatch(setLoading());
      dispatch(pushOrganization(organization));
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

  // clear banner data
  function ClearBannerData(e: any) {
    e.preventDefault();
    setBannerBase64(null);
    setbanner(null);
  }

  function ClearLogoData(e: any) {
    e.preventDefault();
    setLogoBase64(null);
    setlogo(null);
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
          Organization Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="global_input w-full"
          placeholder="Enter organization name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
        />
      </div>

      {/* desctiprion */}
      <div className="space-y-1">
        <label htmlFor="description" className="block">
          Organization Description*
        </label>
        <textarea
          rows={3}
          maxLength={500}
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="global_input w-full resize-none"
          placeholder="Enter organization description"
          required
        />
        <p className="text-sm text-gray-500">Max 500 characters</p>
      </div>

      {/* Banner */}
      <div className="space-y-1">
        <label
          htmlFor="banner"
          className="flex items-center justify-center overflow-hidden bg-gray-100 border border-gray-500 border-dashed rounded-md cursor-pointer hover:bg-gray-200 transition-colors w-full h-64"
        >
          {!bannerBase64 ? (
            <div className="flex flex-col items-center gap-2 text-gray-700">
              <FileImage />
              Upload Banner Image (optional)
            </div>
          ) : (
            <div className="w-full h-full relative">
              <button
                type="button"
                className="bg-white p-2 rounded-full text-black hover:text-violet-600 transition-all absolute top-5 right-5"
                onClick={ClearBannerData}
              >
                <Trash2 />
              </button>
              <img
                src={bannerBase64}
                alt="You banner"
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </label>
        <input
          type="file"
          name="banner"
          id="banner"
          className="hidden"
          onChange={HandleChangeBanner}
        />
      </div>

      {/* logo */}
      <div className="space-y-1">
        <label
          htmlFor="logo"
          className="flex items-center justify-center bg-gray-100 border border-gray-500 border-dashed rounded-md cursor-pointer hover:bg-gray-200 transition-colors w-80 h-40"
        >
          {!logoBase64 ? (
            <div className="flex flex-col items-center gap-2 text-gray-700">
              <FileImage />
              Upload Logo Image (optional)
            </div>
          ) : (
            <img
              src={logoBase64}
              alt="your logo"
              className="w-full max-h-full object-cover"
            />
          )}
        </label>
        {logoBase64 && (
          <button
            type="button"
            className="mt-3 py-2 px-4 rounded-full hover:text-violet-600 border border-gray-400 bg-white flex gap-1 items-center transition-all cursor-pointer"
            onClick={ClearLogoData}
          >
            <Trash2 /> Delete Logo
          </button>
        )}
        <input
          type="file"
          name="logo"
          id="logo"
          className="hidden"
          onChange={HandleChangeLogo}
        />
      </div>

      {/* origin */}
      <div className="space-y-1">
        <label htmlFor="origin" className="block">
          Where is your organization?*
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
        <label htmlFor="pincode" className="block">
          Pincode*
        </label>
        <InputOTP
          maxLength={6}
          id="pincode"
          pattern={REGEXP_ONLY_DIGITS}
          value={pincode}
          onChange={(value) => setPincode(value)}
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

      {/* warning */}
      <p className="text_color">One created, organizations can not be deleted, you can just freez them or pay for them for monthly bill!</p>

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
