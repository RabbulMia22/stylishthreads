import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
        <Navbar />
       <div className="bg-gray-50"> {children}</div>
        <Footer />
    </main>
  )
}