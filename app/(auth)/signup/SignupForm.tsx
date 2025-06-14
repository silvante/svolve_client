import Link from "next/link";

export default function SignupForm() {
  return (
    <form className="text_color space-y-3">
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="global_input" />
      </div>
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="global_input" />
      </div>
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="global_input"
        />
      </div>
      <Link href={"/terms"} className=" inline-block">Read terms first</Link>
      <button type="submit" className="bg-violet-600 text-white font-medium py-2 rounded-xl cursor-pointer w-full">Sign up</button>
    </form>
  );
}
