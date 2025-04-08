import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Barnvagnsslottet",
  description:
    "Barnvagnsslottet - Din specialist på renoverade kvalitetsbarnvagnar. Vi ger premiumvagnar nytt liv till förmånliga priser. Miljövänligt, ekonomiskt och tryggt för din familj.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="max-w-[1500px] mx-auto">{children}</main>
      <Footer />
    </>
  );
}
