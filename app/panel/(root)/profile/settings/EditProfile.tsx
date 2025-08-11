"use client";
import Heading from "@/app/(global_components)/Heading";
import uploadService from "@/app/api/services/uploadsService";
import userService from "@/app/api/services/userService";
import { updateUser } from "@/app/store/slices/userSlice";
import { User } from "@/app/types/User";
import { FileImage } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function EditProfile() {
  const { currentUser } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // phone number formatter
  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, ""); // faqat raqamlar
    if (!digits.startsWith("998")) {
      digits = "998" + digits; // avtomatik 998 boshida bo'lishi
    }
    digits = digits.slice(0, 12); // 998 + 9 raqam
    let formatted = "+998 ";
    if (digits.length > 3) formatted += digits.slice(3, 5);
    if (digits.length >= 5) formatted += " " + digits.slice(5, 8);
    if (digits.length >= 8) formatted += " " + digits.slice(8, 10);
    if (digits.length >= 10) formatted += " " + digits.slice(10, 12);
    return formatted;
  };

  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarBase64, setAvatarBase64] = useState<string | null>(
    currentUser.avatar
  );

  const [name, setName] = useState(currentUser.name);
  const [bio, setBio] = useState(currentUser.bio);
  const [contact, setContact] = useState(
    currentUser.contact ? formatPhone(currentUser.contact) : ""
  );

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

  async function HandleChangeAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      const base64 = await ConvertImageToBase64(file);
      setAvatarBase64(base64);
    }
  }

  async function HandleUpdateProfile(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Prepare data for organization creation
      let AvatarData: string | undefined = undefined;

      // upload logo if it is present
      if (avatar) {
        const AvatarFormData = new FormData();
        AvatarFormData.append("file", avatar);
        try {
          const res: any = await uploadService.uploadAvatar(AvatarFormData);
          AvatarData = String(res);
        } catch (error) {
          setError("error while uploading avatar, try again later");
          setIsLoading(false);
          return;
        }
      }

      // Build the createData object
      const update: any = {
        name,
        bio,
        contact: `${contact}`,
        ...(AvatarData && { avatar: AvatarData }),
      };

      const res: any = await userService.update(update);
      const updated_user: User = res;
      dispatch(updateUser(updated_user));
      router.push("/panel/profile");
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
    <div className="w-full rounded-2xl p-10 special_shadowing space-y-5">
      <Heading text="Update you profile" />
      <form className="space-y-5" onSubmit={HandleUpdateProfile}>
        {error !== "" && (
          <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
            {error}
          </p>
        )}

        {/* logo */}
        <div className="space-y-1">
          <label
            htmlFor="logo"
            className="flex overflow-hidden items-center justify-center bg-gray-100 border border-gray-500 border-dashed rounded-full cursor-pointer hover:bg-gray-200 transition-colors w-64 h-64"
          >
            {!avatarBase64 ? (
              <div className="flex flex-col items-center gap-2 text-gray-700">
                <FileImage />
                Upload Avatar Image
              </div>
            ) : (
              <img
                src={avatarBase64}
                alt="your logo"
                className="w-full max-h-full object-cover"
              />
            )}
          </label>
          {/* {avatarBase64 && (
          <button
            type="button"
            className="mt-3 py-2 px-4 rounded-full hover:text-violet-600 border border-gray-400 bg-white flex gap-1 items-center transition-all cursor-pointer"
            onClick={ClearLogoData}
          >
            <Trash2 /> Delete Logo
          </button>
        )} */}
          <input
            type="file"
            name="logo"
            id="logo"
            className="hidden"
            onChange={HandleChangeAvatar}
          />
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
          />
        </div>

        {/* bio */}
        <div className="space-y-1">
          <label htmlFor="bio" className="block">
            Enter Bio (optional)
          </label>
          <input
            type="text"
            id="bio"
            name="bio"
            className="global_input w-full"
            placeholder="Cool Bio"
            value={bio ? bio : ""}
            onChange={(e) => setBio(e.target.value)}
            maxLength={100}
          />
        </div>

        {/* contact */}
        <label className="block mb-3">
          <span className="text-sm text-gray-700">Telefon raqam</span>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(formatPhone(e.target.value))}
            placeholder="+998 00-000-00-00"
            className={"global_input w-full"}
          />
        </label>
        {/* submit */}
        <div>
          <button
            type="submit"
            className="bg-violet-600 text-white py-2 px-5 rounded-md hover:bg-violet-700 transition-colors cursor-pointer"
          >
            {isLoading ? "updating..." : "Update profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
