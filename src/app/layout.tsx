import "~/styles/globals.css";

import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "ACM-VIT",
  description: "Association for Computing Machinery, VIT Vellore",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className}`}>{children}</body>
    </html>
  );
}
