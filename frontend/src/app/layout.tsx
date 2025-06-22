import "@/components/shared/globals.css";
import Navbar from "@/components/ui/navbar";
import { Inter, Poppins, Raleway } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins"
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway"
});

export const metadata = {
  title: "Cyber",
  description: "Best way to buy a new eletronic"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} ${poppins.variable} ${raleway.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
