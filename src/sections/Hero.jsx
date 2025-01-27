import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-10 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">About me</div>
            <h1 className="mb-4 h1 text-p1 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12">
              LEIDENSCHAFTLICH, INNOVATIV
            </h1>

            {/* Bild nur in der mobilen Ansicht */}
            <div className="my-6 md:hidden">
              <img
                src="/images/Fabrice_autumn.png"
                className="w-full h-auto max-w-full rounded-md"
                alt="Foto von Fabrice Nadal im Herbst"
              />
            </div>

            <p className="max-w-440 mb-9 body-1 max-md:mb-10">
              "Als Junior Full Stack Entwickler verbinde ich technische
              Expertise mit strategischem Verständnis, um digitale Lösungen zu
              schaffen, die Menschen begeistern.
              <br />
              <br />
              Mit großer Wissbegierde und Motivation entwickle ich mich
              kontinuierlich weiter und bleibe stets auf dem neuesten Stand der
              Technologie."
              <br />
              <br />
              Lassen Sie uns sprechen und nehmen Sie gerne Kontakt mit mir auf!
            </p>
            <LinkScroll to="features" offset={-100} spy smooth></LinkScroll>
          </div>

          {/* Bild für größere Bildschirme */}
          <div className="flex-2 ml-2 absolute left-[calc(81.5%-600px)] top-[calc(74.5%-400px)] w-full my-11 hidden md:block">
            <img
              src="/images/Fabrice_autumn.png"
              className="w-full h-auto max-w-full md:max-w-[550px] rounded-md"
              alt="Foto von Fabrice Nadal im Herbst"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
