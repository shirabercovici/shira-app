import Footer from "../../lib/components/Footer";
import NavBar from "../../lib/components/Navbar";
import "./styles/global.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
