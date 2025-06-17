import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientProvider from "@/hoc/ClientProvider";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styles
import { TrendingUpDownIcon } from "lucide-react";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ['latin'] })   



export const metadata: Metadata = {
  title: "SeaView Immigration Services Ltd.",
  description: "Your trusted partner for immigration solutions",
  icons: {
    icon: [
      { url: "/favicon1.png"},
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}> 
      <ClientProvider>
          {children}
         <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar
  closeOnClick
  pauseOnHover
  draggable
  toastClassName="custom-toast" 
  bodyClassName="custom-toast-body"
  style={{textAlign: 'center'}}
/>

        </ClientProvider>
      </body>
    </html>
  );
}
