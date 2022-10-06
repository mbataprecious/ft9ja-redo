import React from "react";
import Container from "../components/Container";

const FeaturesStrip = () => {
  return (
    <section className="relative py-8 bg-gray-50 dark:bg-slate-800">
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="flex">
            <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
              <i className="uil uil-water"></i>
            </div>

            <div className="content ml-6">
              <h6 className="text-lg font-medium hover:text-indigo-600">
                No Challenges
              </h6>
              <p className="text-slate-400 mt-3">
                We believe you have what it takes to be successful. Sign up,
                choose an account size, and start trading to earn as soon as a
                week.
              </p>
            </div>
          </div>
          {/* <!--end feature content--> */}

          <div className="flex">
            <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
              <i className="uil uil-dropbox"></i>
            </div>

            <div className="content ml-6">
              <h6 className="text-lg font-medium hover:text-indigo-600">
                One-time Fee
              </h6>
              <p className="text-slate-400 mt-3">
                No monthly charges or other hidden fees. What’s more, will be
                reimbursed to you once you become our AsoRock AccountTM Trader.
              </p>
            </div>
          </div>
          {/* <!--end feature content--> */}

          <div className="flex">
            <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
              <i className="uil uil-focus-target"></i>
            </div>

            <div className="content ml-6">
              <h6 className="text-lg font-medium hover:text-indigo-600">
                Fast Payout
              </h6>
              <p className="text-slate-400 mt-3">
                Fast payout systems allow you to get paid promptly and
                consistently. Receive payments monthly or weekly!
              </p>
            </div>
          </div>
          {/* <!--end feature content--> */}
        </div>
        {/* <!--end grid--> */}
      </Container>
      {/* <!--end container--> */}
    </section>
  );
};

export default FeaturesStrip;
