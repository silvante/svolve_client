import Google from "./(providers)/Google";

export default function Socials() {
  return (
    <div className="text-center">
      <p>OR</p>
      <div className="space-y-2">
        <Google />
      </div>
    </div>
  );
}
