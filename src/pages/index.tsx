import Footer from '@/components/partials/Footer/Footer';
import HeroSection from '@/components/partials/HeroSection';
import ReadSection from '@/components/partials/ReadSection';
import DefaultLayout from '@/layouts/DefaultLayout';
import NamazSection from '@/components/partials/NamazSection';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Muslims App">
      <HeroSection />
      <ReadSection />
      <NamazSection/>
      <Footer/>
    </DefaultLayout>
  );
};

export default Home;
