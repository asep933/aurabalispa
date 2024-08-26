const HeroSecond = () => {
  const handleScroll = () => {
    const servicesSection = document.getElementById("customs");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-0 xl:max-w-6xl">
        <div className="w-full h-64 lg:w-2/3 lg:h-[40rem]">
          <img
            className="h-full w-full object-cover"
            src="/bg-hero3.jpg"
            alt="image massage"
          />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase lg:text-4xl">
              Aura Bali <span className="text-fourth">Spa</span>
            </h2>
            <p className="mt-4">
              Discover serenity at Aura Bali Spa. Rejuvenate your mind, body,
              and spirit with our luxurious spa and massage treatments.
            </p>
            <div className="mt-8">
              <button
                onClick={handleScroll}
                className="inline-block w-full text-center text-lg font-medium text-primary bg-secondary py-4 px-10 hover:bg-opacity-90 hover:shadow-md md:w-48"
              >
                Get Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSecond;
