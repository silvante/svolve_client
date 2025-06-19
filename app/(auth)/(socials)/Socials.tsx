"use client"
import Github from "./(providers)/Github";
import Google from "./(providers)/Google";

export default function Socials() {
  return (
    <div className="text-center space-y-3">
      <p>OR</p>
      <div className="space-y-3">
        <Google />
        <Github />
      </div>
    </div>
  );
}
