export default async function ValidateOrganizationPage({
  params,
}: Readonly<{
  params: { unique_name: string };
}>) {
  const { unique_name } = await params;
  return (
    <div className="w-full flex items-center justify-center">
      <div className="main_body py-5">
        <h1 className="text-xl">
          Pay for <span className="font-semibold">@{unique_name}</span>
        </h1>
      </div>
    </div>
  );
}
