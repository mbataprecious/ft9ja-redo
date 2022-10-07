import React from "react";
import Container from "../components/Container";
import img1 from "../assests/images/img1.jpg";
import { Link } from "react-router-dom";
const TradeSucessSection = () => {
  return (
    <section className="relative md:py-24 py-16">
      <Container>
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img src={img1} className="shadow rounded-md" alt="" />
                  <img
                    src="https://shreethemes.in/techwind/layouts/assets/images/about/ab02.jpg"
                    className="shadow rounded-md"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img
                    src="https://shreethemes.in/techwind/layouts/assets/images/about/ab03.jpg"
                    className="shadow rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 md:col-span-6">
            <div className="lg:ml-5">
              <h3 className="mb-6 md:text-3xl text-2xl leading-normal font-bold">
                Trade using our funded accounts and Earn{" "}
                <span className="text-[#f77e27]">50X</span> in return.
              </h3>

              <p className="text-xl text-gray-600 mb-4 max-w-xl">
                You can stop risking your money today, let us cover your loses.
                Earn <span>50X</span> in return while trading with experts
                world-class support.
              </p>

              <div className="mt-6">
                <Link to="/" className="btn text-white bg-[#f77e27]">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end grid--> */}
      </Container>
      {/* <!--end container--> */}
    </section>
  );
};

export default TradeSucessSection;
