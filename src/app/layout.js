import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Mars Web | Extraordinary Websites Engineered Beyond Earth",
  description: "Mars Web is a premium software house specializing in pixel-perfect web and mobile experiences with obsessive attention to detail and blazing performance.",
  keywords: ["Software House", "Web Development", "Mobile Apps", "SEO", "Next.js", "React Native", "Mars Web"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-space-void text-star-white">
        {children}
      </body>
    </html>
  );
}
