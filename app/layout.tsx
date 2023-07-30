
import Navbar from "@/components/Navbar";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const JetBrains = JetBrains_Mono({
  weight:["400","800"],
  display:"swap",
  subsets:["latin"]
})

export const metadata = {
  title: "Yug Bhanushali",
  description: "Hi, I'm Yug Bhanushali. I'm a full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.png" type="image/png" />
      </head>
      <body className={`${JetBrains.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
