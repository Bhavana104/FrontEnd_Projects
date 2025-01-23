import "@/app/globals.css";
import ClientLayout from "@/app/layout.client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilt",
};

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <ClientLayout>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClientLayout>
  );
}
