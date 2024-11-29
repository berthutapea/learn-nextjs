import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "Home - Gilbert Hutapea",
  description: "Aplikasi untuk belajar Next JS",
  authors: [{ name: "Gilbert Hutapea", url: "http://localhost:3000" }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Home - Gilbert Hutapea",
  },
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello World
    </div>
  );
}
