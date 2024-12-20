import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">About me</div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              "LEIDENSCHAFTLICH, INNOVATIV"
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              "Als Full Stack Entwickler verbinde ich technische Expertise mit
              strategischem Verständnis, um digitale Lösungen zu schaffen, die
              Menschen begeistern."
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Qualifikationen</Button>
            </LinkScroll>
          </div>

          <div className="flex-2 ml-8 absolute left-[calc(75%-400px)] top-[calc(86%-400px)]">
            <img
              src="/images/screens-me.png"
              className="w-full max-w-[400px] h-auto rounded-md"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
