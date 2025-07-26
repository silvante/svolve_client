"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FileImage } from "lucide-react";
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

export default function NewOrganizationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  // form data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pincode, setPincode] = useState("");

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
    console.log(file);
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
          const new_banner: BannerData = res.data;
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
        ...(bannerData && { banner: bannerData }),
        ...(logoData && { logo: logoData }),
      };

      const res: any = await organizationService.create(createData);
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
            <img
              src={bannerBase64}
              alt="You banner"
              className="object-cover w-full h-full"
            />
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
        <input
          type="file"
          name="logo"
          id="logo"
          className="hidden"
          onChange={HandleChangeLogo}
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
