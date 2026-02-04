import { Outfit, Inter, Poppins } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-outfit",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable} ${poppins.variable}`}>
            <head>
                <link rel="preload" href="/assets/background-splash.svg" as="image" />
            </head>
            <body>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}