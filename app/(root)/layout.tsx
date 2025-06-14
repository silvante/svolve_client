import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "../(global_components)/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose what you need
  variable: "--font-roboto", // Optional: use in CSS
});

export const metadata: Metadata = {
  title: "Svolve | Payment SaaS of Uzbekistan",
  description: "Easy to use payment API for startups",
  icons: {
    icon: "/icons/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <main className="main_body">{children}</main>
      </body>
    </html>
  );
}
