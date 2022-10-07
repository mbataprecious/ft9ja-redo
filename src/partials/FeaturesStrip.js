import React from "react";
import Container from "../components/Container";
import { FaWater } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import { BsHddStackFill } from "react-icons/bs";

const FeaturesStrip = () => {
  return (
    <section className="relative py-8 bg-[#1d4353]">
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="flex">
            <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] border-2 text-[#5dcb22] border-[#2d596c] rounded-lg text-xl shadow-sm">
              <FaWater />
              {/* <i className="uil uil-water"></i> */}
            </div>

            <div className="content ml-6">
              <h6 className="text-lg font-medium text-[#3aa800] hover:text-[#5dcb22]">
                No Challenges
              </h6>
              <p className="text-slate-200 mt-3">
                We believe you have what it takes to be successful. Sign up,
                choose an account size, and start trading to earn as soon as a
                week.
              </p>
            </div>
          </div>
          {/* <!--end feature content--> */}

          <div className="flex">
            <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] border-2 text-[#5dcb22] border-[#2d596c] rounded-lg text-xl shadow-sm">
              <BsHddStackFill />
            </div>

            <div className="content ml-6">
              <h6 className="text-lg font-medium text-[#3aa800] hover:text-[#5dcb22]">
                One-time Fee
              </h6>
              <p className="text-slate-200 mt-3">
                No monthly charges or other hidden fees. What’s more, will be
                reimbursed to you once you become our AsoRock AccountTM Trader.
              </p>
            </div>
          </div>
          {/* <!--end feature content--> */}

          <div className="flex">
            <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] border-2 text-[#6dc240] border-[#2d596c] rounded-lg text-xl shadow-sm">
              <BiMoney />
            </div>

            <div className="content ml-6">
              <h6 className="text-lg font-medium text-[#3aa800] hover:text-[#5dcb22]">
                Fast Payout
              </h6>
              <p className="text-slate-200 mt-3">
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
