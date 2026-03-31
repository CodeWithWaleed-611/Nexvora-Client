import { FaHome } from "react-icons/fa";
import PageHeader from "./PageHeader";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import NewsSection from "./NewsSection";
import Team from "./Team"

export default function About() {
  return (
    <>
      <PageHeader title={"About Us"} showDivider={true} />
      <AboutSection />
      <ServicesSection />
      <Team />
      <TestimonialsSection />
      <NewsSection />
    </>
  );
}
