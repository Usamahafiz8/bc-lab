import AssetsSection from '@/components/AssetsSection';
import Header from '@/components/Header';
import HeroSection from '@/components/Hero';
import Swap from '@/components/Swap';

const HomePage = () => {
  return (
    <div className="bg-black relative pb-28">
      <div className="bg-cover bg-no-repeat bg-center h-screen" style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Header />
        <div className=" relative z-10">
          <section className="container mx-auto mt-40 mb-20">
            <HeroSection />
          </section>

          <section className="container mx-auto mt-20 mb-20">
            <AssetsSection />
          </section>

          <section className="container mx-auto mt-20 mb-20">
            <Swap />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
