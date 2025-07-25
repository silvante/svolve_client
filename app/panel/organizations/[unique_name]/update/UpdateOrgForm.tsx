"use client";
import { FileImage } from "lucide-react";
import { useState } from "react";
import organizationService from "@/app/api/services/organizationService";
import { useDispatch, useSelector } from "react-redux";
import { replaceOrganization } from "@/app/store/slices/organizationSlice";
import { Organization } from "@/app/types/User";
import { useParams, useRouter } from "next/navigation";
import Spinner from "@/app/(global_components)/Spinner";

export default function UpdatezrganisationForm() {
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
  const [name, setName] = useState(org.name);
  const [description, setDescription] = useState(org.description);
  const dispatch = useDispatch();
  const router = useRouter();

  async function HandleUpdateOrg(e: any) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = {
        name,
        description,
      };
      const res: any = await organizationService.update(
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
