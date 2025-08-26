export default function DateShower() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="py-2 px-4 rounded-lg border border-gray-300">
      <h2 className="text-base font-medium">{formattedDate}</h2>
    </div>
  );
}
