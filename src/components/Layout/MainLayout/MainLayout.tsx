import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

interface MainLayoutProps {
  children: JSX.Element;
}

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
