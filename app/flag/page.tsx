import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Sections/Features/Features";
import FinalCTA from "@/components/Sections/FinalCTA/FinalCTA";
import Section1 from "@/components/Sections/Section/Section1";
import UsersCloud from "@/components/Sections/Users/UsersCloud";

export default function Home() {
  return (
    <>
      <UsersCloud />
      <Section1 />
      <Features />
      <FinalCTA />
      <Footer />
    </>
  );
}
