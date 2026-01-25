import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "LibreMind – AI Mental Health Companion",
  description: "An AI-powered 3D mental health chatbot to support your well-being",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="  bg-gray-950 text-gray-100 antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
