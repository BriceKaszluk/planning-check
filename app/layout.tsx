import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./feed/loading";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Inside Water",
  description: "Reprends le contrôle de ton planning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        </main>
      </body>
    </html>
  );
}
