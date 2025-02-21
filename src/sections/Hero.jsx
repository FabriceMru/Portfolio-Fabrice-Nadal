import { Element } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative  pt-32 pb-20">
      <Element name="hero">
        <div className="container mx-auto px-4">
          <span className="mt-22 mb-8 block text-sm font-medium uppercase tracking-[0.2em] caption small-2 text-p3">
            About me
          </span>
          <div className="flex flex-col items-start lg:flex-row lg:items-start lg:justify-between lg:space-x-8">
            <div className="w-full lg:w-1/2">
              <h1 className="text-5xl font-bold h0 text-p1 lg:text-6xl xl:text-7xl ">
                INNOVATION
                <br />
                DURCH
                <br />
                ENTWICKLUNG
              </h1>
              <div className="mt-8 space-y-6 text-gray-300">
                <p className="text-xl font-medium leading-relaxed">
                  Als Junior Full Stack Entwickler am Anfang meiner Karriere
                  bringe ich frische Perspektiven in die Technologiebranche.
                  Meine Stärke liegt in der Verbindung von technischer Präzision
                  und innovativem Denken, sowie das zusammenspiel neuster
                  Technologien.
                </p>
                <p className="text-xl font-medium leading-relaxed">
                  Ich lebe für die Entwicklung digitaler Lösungen, die neue
                  Standards setzen!
                </p>
              </div>
            </div>

            <div className="mt-12 w-full lg:mt-0 lg:w-1/2">
              <div className="relative mx-auto lg:mx-0">
                <img
                  src="/images/Fabrice_autumn.png"
                  alt="Fabrice Nadal im Herbst"
                  className="h-auto w-full max-w-lg object-cover rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
