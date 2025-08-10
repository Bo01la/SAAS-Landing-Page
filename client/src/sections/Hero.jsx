import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:bt-52 max-lg:pb-36 mas-md:bt-36 max-md:pb-32 border-2">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-[388px]">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 lg:h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 md:mb-4 md:text-5xl md:leading-10 ">
              amazingly simple
            </h1>
            <p className="max-w-[440px] body-1 max-md:10 ">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg" classes={"mt-8"}>
                Try it now
              </Button>
            </LinkScroll>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
