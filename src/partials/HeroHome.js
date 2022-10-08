import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import hero1 from "../assests/images/hero1.png";
import hero2 from "../assests/images/hero2.png";
import hero3 from "../assests/images/hero3.png";

const bgArray = [hero1, hero2, hero3];

function HeroHome() {
  const [bgIndx, setBgIndx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (bgIndx < bgArray.length - 1) {
        setBgIndx((x) => x + 1);
      } else {
        setBgIndx(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [bgIndx]);

  return (
    <section className="relative">
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          transition: "all 500ms ease-in 0s",
          backgroundImage: `url(${bgArray[bgIndx]})`,
        }}
        className="absolute top-0 left-0 right-0 bottom-0"
      ></div>
      <Container>
        <div className="pt-[12rem] pb-10 md:pt-[14rem] md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1
                className="h3 lg:text-4xl mb-4 font-red-hat-display font-extrabold"
                data-aos="fade-down"
              >
                Every Trader deserves a chance to be successful
              </h1>
              <p
                className="text-xl text-gray-600 mb-4"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Trade up to $50,000 of our company's capital and get paid up to
                80% of the profit weekly or monthly. No challenges. No risk for
                you, we take the losses. Join the team of our successful Traders
                now.
              </p>
              <button
                className="btn bg-[#f77e27] text-white"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                {" "}
                Start Trading
              </button>
            </div>

            {/* Mobile mockup */}
            <div
              className="md:col-span-5 lg:col-span-5 text-center md:text-right"
              data-aos="fade-up"
              data-aos-delay="450"
            ></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroHome;
