"use client";
import Spinner from "@/app/(global_components)/Spinner";
import organisationService from "@/app/api/services/organisationService";
import { updateOrganisations } from "@/app/store/slices/organisationSlice";
import { Organisation } from "@/app/types/User";
import { Eye, LockKeyhole, Menu, PenBox } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function OrganisationList() {
  const { organisations, loading } = useSelector(
    (state: any) => state.organisations
  );
  const dispatch = useDispatch();
  async function getOrganisations() {
    try {
      if (organisations) {
        return;
      } else {
        const response: any = await organisationService.getAll();
        const organisationsData: Organisation[] = response;
        dispatch(updateOrganisations(organisationsData));
      }
    } catch (error) {
      console.error("Error fetching organisations:", error);
    }
  }

  useEffect(() => {
    getOrganisations();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="space-y-5">
        {organisations && organisations.length > 0 ? (
          organisations.map((organisation: Organisation) => (
            <div
              key={organisation.id}
              className="bg-white shadow-md rounded-md transition-colors border border-gray-200 flex flex-col border-b-2 border-b-transparent hover:border-b-violet-600"
            >
              <Link
                className="p-4 flex flex-col gap-1"
                href={`/org/${organisation.unique_name}/validation`}
              >
                <h3 className="text-xl font-semibold">{organisation.name}</h3>
                <p className="text-sm text-gray-600">
                  <span className="text-black">Uniquename: </span>
                  {organisation.unique_name}
                </p>
              </Link>
              <div className="border-t border-gray-200 p-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  <span className="text-black">created at:</span>{" "}
                  {new Date(organisation.created_at).toLocaleDateString(
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
                      href={`/panel/organisations/${organisation.unique_name}`}
                    >
                      <DropdownMenuItem>
                        <Eye /> Review
                      </DropdownMenuItem>
                    </Link>
                    <Link
                      href={`/panel/organisations/${organisation.unique_name}/update`}
                    >
                      <DropdownMenuItem>
                        <PenBox /> Update
                      </DropdownMenuItem>
                    </Link>
                    <Link
                      href={`/panel/organisations/${organisation.unique_name}/pincode`}
                    >
                      <DropdownMenuItem>
                        <LockKeyhole /> Update Pincode
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))
        ) : (
          <p>No organisations found.</p>
        )}
      </div>
    );
  }
}
