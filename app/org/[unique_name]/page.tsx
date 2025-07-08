export default function UniqueNamePage({
  params,
}: Readonly<{
  params: { unique_name: string };
}>) {
  return (
    <div>
      <h1>Unique Name Page</h1>
      <p>Unique Name: {params.unique_name}</p>
    </div>
  );
}
