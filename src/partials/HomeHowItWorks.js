import Container from "../components/Container";
import React from "react";
import { Link } from "react-router-dom";

const HomeHowItWorks = () => {
  return (
    <div className="bg-[rgba(58,168,0,0.08)] py-6">
      <Container>
        <div className="flex justify-center">
          <h3 className="mb-6 md:text-3xl text-2xl leading-normal font-bold text-center text-[#1d4353] after:content-[''] relative after:w-[125px] after:h-[30px] after:absolute after:bottom-[-25px] after:right-[-30px] after:bg-no-repeat after:bg-[url(https://f004.backblazeb2.com/file/pipsville-bucket/markerOrange.svg)]">
            How It Works
          </h3>
        </div>

        <div className="flex justify-between flex-col md:flex-row md:items-end mt-12">
          <div className="group p-6 rounded-lg bg-white hover:-translate-y-2 transition-all  duration-500 ease-in-out md:w-[31%] mb-8 shadow-[6px_7px_0px_#1d4353]">
            <h3 className="md:text-3xl text-2xl leading-normal font-bold font-poppins text-[#c6c6c6] mb-6">
              01.
            </h3>

            {/* <div className="w-20 h-20 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm transition-all duration-500 ease-in-out">
              <h3 className="md:text-3xl text-2xl leading-normal font-bold font-poppins">
                01.
              </h3>
            </div> */}
            <div>
              <h4 className="pb-4 text-2xl font-bold">Sign Up</h4>
              <p>
                We provide three account sizes for Traders to start with:
                $3,000, $5,000 and $25,000. Choose your account size, select a
                broker, and you’ll receive login details to a ZumaRock AccountTM
                within 24 hours of purchase! This is the account you’ll begin
                trading. Learn more{" "}
                <a className="text-[#3aa800]" href="">
                  here
                </a>
                .
              </p>
            </div>
          </div>
          <div className="group p-6 rounded-lg bg-white hover:-translate-y-2 transition-all  duration-500 ease-in-out md:w-[31%] mb-8 shadow-[6px_7px_0px_#1d4353]">
            <h3 className="md:text-3xl text-2xl leading-normal font-bold font-poppins text-[#c6c6c6] mb-6">
              02.
            </h3>

            {/* <div className="w-20 h-20 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm transition-all duration-500 ease-in-out">
              <h3 className="md:text-3xl text-2xl leading-normal font-bold font-poppins">
                01.
              </h3>
            </div> */}
            <div>
              <h4 className="pb-4 text-2xl font-bold">Start Trading</h4>
              <p>
                Trade the Zuma Account and receive payouts as soon as 10 days.
                Choose between 5% weekly or 10% monthly Talent Bonus. When you
                grow your Zuma Account to 25% (no time limit), you move to the
                Aso Account and you start earning up to 80% Profit Split. Just
                abide by the rules. See our rules{" "}
                <a className="text-[#3aa800]" href="">
                  here
                </a>
                .
              </p>
            </div>
          </div>
          <div className="group p-6 rounded-lg bg-white hover:-translate-y-2 transition-all  duration-500 ease-in-out md:w-[31%] mb-8 shadow-[6px_7px_0px_#1d4353]">
            <Link to="/" className="btn text-white bg-[#f77e27] w-full mb-4">
              Get Started
            </Link>
            <h3 className="md:text-3xl text-2xl leading-normal font-bold font-poppins text-[#f77e27] mb-6">
              03.
            </h3>

            {/* <div className="w-20 h-20 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm transition-all duration-500 ease-in-out">
              <h3 className="md:text-3xl text-2xl leading-normal font-bold font-poppins">
                01.
              </h3>
            </div> */}
            <div>
              <h4 className="pb-4 text-2xl font-bold">Get Paid</h4>
              <p className="mb-14">
                You choose your medium of getting paid: bank account or Paypal.
                You choose between weekly or monthly payouts. It is as simple as
                this getting paid with FT9ja! .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHowItWorks;
