import EmptyBox from "../lottie/EmptyBox";
import Heading from "./Heading";

export default function ErrorMessage({
  text,
  desc,
}: {
  text: string;
  desc: string;
}) {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <EmptyBox />
      <div className="space-y-2 text-center text_color">
        <Heading text={text} />
        <p>{desc}</p>
      </div>
    </div>
  );
}
