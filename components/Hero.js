const HeroSection = () => {
  return (
    <section>
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Easy send and Request Crypto
        </h1>
        <p className="text-xl font-thin mb-8 max-w-xl ">
          Bring blockchain to the people. Solana supports experience for power
          users, new customers, and everyone in between.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
