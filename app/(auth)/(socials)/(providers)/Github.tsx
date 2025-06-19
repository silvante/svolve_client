"use client";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Github() {
  const handleGithubLogin = () => {
    try {
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
        if (event.data.is_ok == false) {
          toast.error(
            event.data.message
              ? event.data.message
              : "Something went wrong, please try again"
          );
        }
        console.log(event);
      };

      window.addEventListener("message", receiveMessage, false);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
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
