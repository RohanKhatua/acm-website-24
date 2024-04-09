import "~/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "~/components/theme-provider";

export const metadata = {
  title: "ACM-VIT",
  description: "Association for Computing Machinery, VIT Vellore",
  icons: [{ rel: "icon", url: "/ACM-Favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${GeistMono.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>

    </html>
  );
}
