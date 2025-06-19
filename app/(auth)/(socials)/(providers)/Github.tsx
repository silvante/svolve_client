"use client";
import Image from "next/image";

export default function Github() {
  const handleGithubLogin = () => {
    const popup = window.open(
      "http://localhost:8080/auth/github",
      "_blank",
      "width=900,height=600"
    );

    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== "http://localhost:8080") return;
      if (event.data.reset_token && event.data.access_token) {
        localStorage.setItem("access_token", event.data.access_token);
        localStorage.setItem("reset_token", event.data.reset_token);
      }
    };

    window.addEventListener("message", receiveMessage, false);
  };

  return (
    <button
      onClick={handleGithubLogin}
      className="flex gap-3 cursor-pointer w-full border border-gray-400 p-3 rounded-xl items-center justify-center"
    >
      <Image
        src={"/social_icons/GitHub.svg"}
        alt="github icon"
        width={22}
        height={0}
      />{" "}
      Continue with Github
    </button>
  );
}
