import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Counter } from "@/components/Counter";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { StickyFooter } from "@/components/StickyFooter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Counter />
      <Services />
      <Contact />
      <StickyFooter />
      <Footer />
    </div>
  );
};

export default Index;
