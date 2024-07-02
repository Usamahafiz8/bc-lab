import AssetsSection from '@/components/AssetsSection';
import Header from '@/components/Header';
import HeroSection from '@/components/Hero';
import Swap from '@/components/Swap';

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen">
      <div
        className="bg-cover bg-center "
        style={{
          backgroundImage: 'url(/assets/hero-bg.jpg)',
          height: '60vh',
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <Header />
        <HeroSection />

        <section className="container mx-auto mt-40 mb-20">
          <AssetsSection />
        </section>
        <section className="container mx-auto mt-40 mb-20">
          <Swap />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
