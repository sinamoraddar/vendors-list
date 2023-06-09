import "./globals.css";
import "../styles/fonts.css";
import { Inter } from "next/font/google";
import { Providers } from "./redux/Provider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
