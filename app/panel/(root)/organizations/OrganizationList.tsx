"use client";
import Spinner from "@/app/(global_components)/Spinner";
import organizationService from "@/app/api/services/organizationService";
import { updateOrganizations } from "@/app/store/slices/organizationSlice";
import { Organization } from "@/app/types/User";
import { Check, Eye, LockKeyhole, Menu, PenBox, Pin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ErrorMessage from "@/app/(global_components)/ErrorMessage";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import { ShieldAlert } from "lucide-react";

export default function OrganizationList() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { organizations, loading } = useSelector(
    (state: any) => state.organizations
  );

  const dispatch = useDispatch();
  async function getOrganizations() {
    try {
      if (organizations) {
        return;
      } else {
        const response: any = await organizationService.getAll();
        const organizationsData: Organization[] = response;
        dispatch(updateOrganizations(organizationsData));
      }
    } catch (error) {
      console.error("Error fetching organizations:", error);
    }
  }

  useEffect(() => {
    getOrganizations();
  }, []);

  async function MakeItDefault(unique_name: string) {
    setIsLoading(true);
    try {
      const res: any = await organizationService.setAsDefault(unique_name);
      console.log(res);
      if (res && res.success == true) {
        setError("");
        setSuccess("The organization has set as default!");
      }
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

  if (loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="space-y-5">
        {error !== "" && (
          <Alert variant="destructive">
            <ShieldAlert />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success !== "" && (
          <Alert variant="default" className="text-green-600">
            <Check />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription className="text-green-600/70">
              {success}
            </AlertDescription>
          </Alert>
        )}
        {isLoading && (
          <div className="flex gap-2 items-center">
            <p>Setting as default</p>
            <Spinner />
          </div>
        )}
        {organizations && organizations.length > 0 ? (
          organizations.map((organization: Organization) => (
            <div
              key={organization.id}
              className="bg-white shadow-md rounded-md transition-colors border border-gray-300 flex flex-col border-b-2 border-b-transparent hover:border-b-violet-600"
            >
              <Link
                className=""
                href={`/org/${organization.unique_name}/validation`}
              >
                {organization.logo && (
                  <div className="border-b border-gray-300 p-4 flex flex-col gap-3 items-start">
                    <Image
                      src={organization.logo}
                      alt={organization.description}
                      width={0}
                      height={0}
                      className="w-auto h-10"
                    />
                  </div>
                )}
                <div className="p-4 flex flex-col gap-1 items-start">
                  <h3 className="text-xl font-semibold">{organization.name}</h3>
                  <p className="text-sm text-gray-600">
                    <span className="text-black">Uniquename: </span>@
                    {organization.unique_name}
                  </p>
                </div>
              </Link>
              <div className="border-t border-gray-300 p-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  <span className="text-black">created at:</span>{" "}
                  {new Date(organization.created_at).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
                <p className="text-sm text-green-600">
                  <span className="text-black">status:</span> active
                </p>
                <p className="text-sm text-gray-500">
                  <span className="text-black">pincode:</span> present
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex gap-2 bg-violet-600 px-1 py-1 text-white font-semibold rounded-md hover:bg-violet-700 transition-colors">
                    <Menu />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <Link
                      href={`/panel/organizations/${organization.unique_name}`}
                    >
                      <DropdownMenuItem>
                        <Eye /> Review
                      </DropdownMenuItem>
                    </Link>
                    <Link
                      href={`/panel/organizations/${organization.unique_name}/update`}
                    >
                      <DropdownMenuItem>
                        <PenBox /> Update
                      </DropdownMenuItem>
                    </Link>
                    <Link
                      href={`/panel/organizations/${organization.unique_name}/pincode`}
                    >
                      <DropdownMenuItem>
                        <LockKeyhole /> Update Pincode
                      </DropdownMenuItem>
                    </Link>
                    <button
                      onClick={() => MakeItDefault(organization.unique_name)}
                    >
                      <DropdownMenuItem>
                        <Pin /> Set as default
                      </DropdownMenuItem>
                    </button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))
        ) : (
          <ErrorMessage
            text="You have no organizations"
            desc="you can create one now"
          />
        )}
      </div>
    );
  }
}
