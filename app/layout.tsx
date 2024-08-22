import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DriveLine",
  description: "Discover the best deals on new and used cars with AutoConnect. Whether you're buying or selling, our app makes it easy to find the perfect match. Enjoy a seamless, hassle-free experience with detailed listings, real-time notifications, and trusted dealer reviews. Start your car journey today with AutoConnect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="bg-white shadow ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">DriveLine</h1>
        </div>
      </header>
        {children}</body>
    </html>
  );
}
