import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const estedad = localFont({
  src: [
    {
      path: "../../public/fonts/Estedad-Black.ttf",
      weight: "900",
      style: "black",
    },
    {
      path: "../../public/fonts/Estedad-ExtraBold.ttf",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "../../public/fonts/estedad-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/estedad-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/estedad-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/estedad-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/estedad-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/estedad-ExtraLight.ttf",
      weight: "200",
      style: "extralight",
    },
    {
      path: "../../public/fonts/estedad-Thin.ttf",
      weight: "100",
      style: "thin",
    },
  ],
  variable: "--font-estedad",
});

export const metadata: Metadata = {
  title: "Tarkhineh",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className={`${estedad.variable}`}>
      <body>{children}</body>
    </html>
  );
}
