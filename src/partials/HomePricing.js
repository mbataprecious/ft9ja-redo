import React, { useState } from "react";
import Container from "../components/Container";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const HomePricing = () => {
  const [priceSummary, setPriceSummary] = useState([
    {
      title: "profit Split",
      opened: false,
      features: ["Up to 80% to the Trader"],
      details: `Grow your Zuma Account to 25% of your starting Account Size to qualify for Aso Account.
    80% Profit Split: if you qualify for the Aso Account within 3 months of placing your first trade.
    65% Profit Split: if you qualify for the Aso Account within 3-6 months.
    50% Profit Split: if you qualify for the Aso Account after 6 months.`,
    },
    {
      title: "Talent Bonus",
      opened: false,
      features: ["5% weekly or 10% monthly to the Trader"],
      details: `While you earn a Profit Split on the Aso Account, you earn a Talent Bonus on the Zuma Account.
      You can choose between the weekly or monthly payout plans.
      You get paid 5% of the profit at the end of the week as the Talent Bonus.
      Or if you choose the monthly payout plan, you get paid 10% at the end of month.`,
    },
    {
      title: "Avaliable Leverage",
      opened: false,
      features: ["1: 100"],
      details: `100 is the maximum leverage. You can use a lower leverage.`,
    },
    {
      title: "Max. Daily DrawDown",
      opened: false,
      features: ["5%"],
      details: `You are allowed a maximum daily drawdown of 5%. Daily drawdown is calculated using the equity at 00:00 WAT. As such, it's not fixed like Account Drawdown. Drawdown refers to the equity not balance. It takes into account the closed trades and the floating trades.`,
    },
    {
      title: "Max. Account DrawDown",
      opened: false,
      features: ["10%"],
      details: `You are allowed a maximum overall account drawdown of 10%. That's $2,700 for a $3,000 account, $4,500 for a $5,000 account, and $22,500 for a $25,000 account Drawdown refers to the equity not balance. It takes into account the closed trades and the floating trades.`,
    },
    {
      title: "Min. Trading Days",
      opened: false,
      features: ["2 days per week and 10 days per month"],
    },
    {
      title: "Second Chance Account",
      opened: false,
      features: ["1 free account in case you blow your first account"],
      details: `Bad network? ‘down NEPA’? stuck in traffic and can’t place that trade? We can relate. If you blow your first Zuma Account, just request for a Second Chance Account. It’s FREE.`,
    },
    {
      title: "One-Time Fee",
      opened: false,
      features: ["N30,000", "N45,000", "N180,000"],
      details: `Bad network? ‘down NEPA’? stuck in traffic and can’t place that trade? We can relate. If you blow your first Zuma Account, just request for a Second Chance Account. It’s FREE.`,
    },
  ]);

  const handleClick = (index) => {
    const newPriceSummary = [...priceSummary];
    let openedSummary = newPriceSummary[index];
    newPriceSummary[index] = {
      ...openedSummary,
      opened: !openedSummary.opened,
    };
    setPriceSummary(newPriceSummary);
  };

  return (
    <div className="py-6">
      <Container>
        <div className="flex flex-col items-center mt-24">
          <h3 className="mb-6 md:text-3xl text-2xl leading-normal font-bold text-center max-w-[42rem]">
            Get The Account Size Required To Become A Successful Trader
          </h3>
          <p className="text-xl text-gray-600 mb-4 max-w-xl text-center">
            Sign Up To Start Trading Using Our Funds.How much funding do you
            want in your account?
          </p>
        </div>
        <section className="py-1 bg-blueGray-50">
          <div className="w-full mb-12 xl:mb-0 px-4 mx-auto ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-[6px_7px_0px_#1d4353] border border-solid border-blueGray-100 rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className=" text-center font-poppins text-xl font-bold text-blueGray-700 py-3">
                      Price Table
                    </h3>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent border-collapse w-full">
                  <thead>
                    <tr>
                      {" "}
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-6 uppercase border-l-0 border-r-0   font-bold text-left bg-[#4b45b4]"></th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-6 uppercase border-l-0 border-r-0   font-bold text-left">
                        $3,000 (N2.1M)
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-6 uppercase border-l-0 border-r-0   font-bold text-left">
                        $5,000 (N3.5M)
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-6 uppercase border-l-0 border-r-0   font-bold text-left">
                        $25,000 (N17.5M)
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {priceSummary.map(
                      ({ title, features, opened, details }, index) => (
                        <React.Fragment key={title}>
                          <tr
                            className=" cursor-pointer"
                            onClick={() => handleClick(index)}
                          >
                            <th className="flex items-center border border-t-0 px-6 align-middle border-l-0 border-r-0   p-4 text-left bg-[#4b45b4] overflow-hidden text-white">
                              {details && (
                                <span>
                                  <BiChevronDown
                                    height={32}
                                    width={32}
                                    className="mr-3"
                                  />
                                </span>
                              )}
                              {title}
                            </th>
                            {features.map((feature) => (
                              <td
                                key={feature}
                                colSpan={3 / features.length}
                                className="border-t-0 px-6 align-middle border border-l-0 text-center border-r-0   p-4"
                              >
                                {feature}
                              </td>
                            ))}
                          </tr>
                          {opened && details && (
                            <tr>
                              <td
                                colSpan={4}
                                className="border-t-0 px-6 bg-gray-200 border border-l-0 border-r-0   p-4"
                              >
                                {details}
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      )
                    )}
                    <tr>
                      <td
                        colSpan={4}
                        className="border-t-0 px-6 border border-l-0 border-r-0   p-4"
                      >
                        <Link
                          to="/"
                          className="btn text-white bg-[#f77e27] w-full"
                        >
                          Start Trading Now
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomePricing;
