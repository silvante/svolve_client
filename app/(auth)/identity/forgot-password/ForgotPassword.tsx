"use client";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

export default function ForgotPasswordForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form className="text_color space-y-3">
      {errorMessage !== "" && (
        <p className="text-red-600 bg-red-600/10 rounded-xl px-4 py-2">
          {errorMessage}
        </p>
      )}
      <p>
        We will send <span className="font-semibold">verification email</span>{" "}
        that helps you to change your password
      </p>
      <div className="flex flex-col space-x-0.5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="global_input"
          required
        />
      </div>
      <p>Continue</p>
      <button
        type="submit"
        className="bg-violet-600 text-white font-medium py-2 rounded-xl cursor-pointer w-full"
      >
        {!loading ? (
          "Send verification"
        ) : (
          <BeatLoader color="#ffffff" size={10} />
        )}
      </button>
    </form>
  );
}
