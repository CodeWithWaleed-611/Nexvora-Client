import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import Stats from "./Stats.jsx";
import TodaySellsProperty from "./TodaySellsProperty.jsx";
import ServicesSection from "./ServicesSection.jsx";
import FeaturedListings from "./FeaturedListings.jsx";
import ApartmentsSection from "./ApartmentsSection.jsx";
import AminitiesSection from "./AminitiesSection.jsx";
import TestimonialsSection from "./TestimonialsSection.jsx";
import NewsSection from "./NewsSection.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Stats></Stats>
      <TodaySellsProperty />
      <ServicesSection />
      <FeaturedListings />
      <ApartmentsSection />
      <AminitiesSection />
      <TestimonialsSection />
      <NewsSection />
    </>
  );
};

export default Home;
