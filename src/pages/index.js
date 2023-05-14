import Header from '../components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import ArtCollectiveSection from '@/components/ArtCollectiveSection';
import OurServicesSection from '@/components/ServiceSection';
import ContactUsSection from '@/components/ContactUsSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <ArtCollectiveSection />
      <OurServicesSection />
      <ContactUsSection />
    </>
  );
}