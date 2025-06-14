import Link from "next/link";

export default function SigninForm() {
  return (
    <form className="text_color space-y-3">
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
      <p className="inline-block">
        welcome back!
      </p>
      <button
        type="submit"
        className="bg-violet-600 text-white font-medium py-2 rounded-xl cursor-pointer w-full"
      >
        Sign in
      </button>
    </form>
  );
}
