import "./globals.css";

import { Providers } from "./redux/Provider";

import localFont from "next/font/local";

const iranSansFont = localFont({
  src: "./fonts/IRANSans/woff/IRANSansWeb(FaNum).woff",
});

export const metadata = {
  title: "Vendors List",
  description: "Created by Sina Moraddar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={iranSansFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
