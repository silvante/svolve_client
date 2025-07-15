export default function ErrorMessage({
  text,
  desc,
}: {
  text: string;
  desc: string;
}) {
  return (
    <div>
      <p>{text}</p>
      <p>{desc}</p>
    </div>
  );
}
