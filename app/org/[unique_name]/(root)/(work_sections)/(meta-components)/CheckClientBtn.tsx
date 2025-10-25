// "use client";
// import clientService from "@/app/api/services/clientService";
// import { replaceClient } from "@/app/store/slices/clientSlice";
// import { Client, Organization } from "@/app/types/User";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Link from "next/link";
// import { Menu, PenBox, Trash } from "lucide-react";

// export default function ClientMenuBtn({
//   organization,
//   client,
//   currentJob,
// }: {
//   organization: Organization;
//   client: Client;
//   currentJob: any;
// }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();
  
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className="flex gap-2 bg-violet-600/10 px-1 py-1 text-black font-semibold rounded-md hover:bg-violet-700 hover:text-white transition-colors">
//         <Menu />
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="w-56">
//         <Link
//           href={
//             currentJob && currentJob.role === "receptionist"
//               ? `/job/${organization.unique_name}/clients/${client.id}`
//               : `/org/${organization.unique_name}/clients/${client.id}/update`
//           }
//           className="rounded-lg flex"
//         >
//           <DropdownMenuItem className="cursor-pointer w-full">
//             <PenBox /> Update
//           </DropdownMenuItem>
//         </Link>
//         <button
//           className="rounded-lg cursor-pointer w-full"
//           onClick={() => HandleDelete(client.id)}
//         >
//           <DropdownMenuItem className="cursor-pointer">
//             <Trash color="#e7000b" /> <p className="text-red-600">Delete</p>
//           </DropdownMenuItem>
//         </button>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
