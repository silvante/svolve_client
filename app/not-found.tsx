import Animation404 from "./lottie/404";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Animation404 />
      <p className="mt-2 text-2xl font-semibold text_color">Page Not Found</p>
      <a href="/" className="mt-4 text-blue-500">
        Go back home
      </a>
    </div>
  );
}
