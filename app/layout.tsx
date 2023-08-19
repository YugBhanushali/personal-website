
import Navbar from "@/components/Navbar";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { URL_OF_WEBSITE } from "@/utils/Constants";
import { Analytics } from '@vercel/analytics/react';
const JetBrains = JetBrains_Mono({
  weight:["400","800"],
  display:"swap",
  subsets:["latin"]
})


const TITLE = "Yug Bhanushali";
const DESCRIPTION = "Hi, I'm Yug Bhanushali. I'm a full-stack developer and I love to build things on the internet.";

export const metadata = {
  title: {TITLE},
  description: {DESCRIPTION},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="viewport" href="width=device-width, initial-scale=1.0" />

        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="Yug Bhanushali, Yug, Bhanushali, yug, bhanushali, yugbhanushali, yug bhanushali portfolio, yug bhanushali website, yug bhanushali developer, yug bhanushali developer portfolio, yug bhanushali developer website, yug bhanushali developer portfolio website, yug bhanushali developer website portfolio" />

        
        {/* Open Graph */}
        <meta name="og:title" content={TITLE} />
        <meta name="og:description" content={DESCRIPTION} />
        <meta name="og:image" content={`${URL_OF_WEBSITE}/logo.png`} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={URL_OF_WEBSITE} />
        <meta name="og:site_name" content={TITLE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${URL_OF_WEBSITE}/logo.png`} />
        <meta name="twitter:url" content={URL_OF_WEBSITE} />
        <meta name="twitter:creator" content="@TheYug03" />
        <meta name="twitter:image:alt" content={TITLE} />
        <meta name="twitter:site" content="@TheYug03" />

        {/* Google */}
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESCRIPTION} />
        <meta itemProp="image" content={`${URL_OF_WEBSITE}/logo.png`} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />
        <meta name="baiduspider" content="index, follow" />
        <meta name="sosospider" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        <meta name="ia_archiver" content="index, follow" />
        <meta name="nutch" content="index, follow" />
        <meta name="spider" content="index, follow" />
        <meta name="crawler" content="index, follow" />
        <meta name="robot" content="index, follow" />
        <meta name="bot" content="index, follow" />
        <meta name="crawling" content="index, follow" />
        <meta name="crawl" content="index, follow" />
        <meta name="crawlable" content="index, follow" />
        <meta name="crawlability" content="index, follow" />
        <meta name="crawlability_rank" content="index, follow" />

      </head>
      <body className={`${JetBrains.className}`}>
        <Navbar />
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
