"use client";

import Button from "@/components/Button";
import Link from "next/link";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Something went wrong!</h2>
          <p className="text-gray-600 mb-4">
            We're sorry for the inconvenience. Please try one of the following:
          </p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </body>
    </html>
  );
}
