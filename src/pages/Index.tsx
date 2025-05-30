
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { QuoteForm } from "@/components/QuoteForm";
import { Reservation } from "@/components/Reservation";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  const [isQuoteFormVisible, setIsQuoteFormVisible] = useState(false);

  const openQuoteForm = () => setIsQuoteFormVisible(true);
  const closeQuoteForm = () => setIsQuoteFormVisible(false);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar onQuoteRequest={openQuoteForm} />
      <Hero onQuoteRequest={openQuoteForm} />
      <Services />
      <WhyChooseUs />
      <Reservation />
      <Pricing onQuoteRequest={openQuoteForm} />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <QuoteForm isVisible={isQuoteFormVisible} onClose={closeQuoteForm} />
    </div>
  );
};

export default Index;
