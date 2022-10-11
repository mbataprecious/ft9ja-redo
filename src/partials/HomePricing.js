import React from "react";
import Container from "../components/Container";
import { BiChevronDown } from "react-icons/bi";

const HomePricing = () => {
  return (
    <div className="py-6">
      <Container>
        <div className="flex flex-col items-center">
          <h3 className="mb-6 md:text-3xl text-2xl leading-normal font-bold text-center max-w-[42rem]">
            Get The Account Size Required To Become A Successful Trader
          </h3>
          <p className="text-xl text-gray-600 mb-4 max-w-xl text-center">
            Sign Up To Start Trading Using Our Funds.How much funding do you
            want in your account?
          </p>
        </div>
        <section class="py-1 bg-blueGray-50">
          <div class="w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-[6px_7px_0px_#1d4353] border border-solid border-blueGray-100 rounded ">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class=" text-center font-bold text-blueGray-700 py-3">
                      Price Table
                    </h3>
                  </div>
                </div>
              </div>

              <div class="block w-full overflow-x-auto">
                <table class="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      {" "}
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-6 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-[#4b45b4]"></th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-6 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                        $3,000 (N2.1M)
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-6 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                        $5,000 (N3.5M)
                      </th>
                      <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-6 uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                        $25,000 (N17.5M)
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th class="flex items-center border border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left bg-[#4b45b4] overflow-hidden text-white">
                        <span>
                          <BiChevronDown
                            height={32}
                            width={32}
                            className="mr-3"
                          />
                        </span>{" "}
                        Profit Split
                      </th>

                      <td
                        colSpan={3}
                        class="border-t-0 px-6 align-middle border border-l-0 text-center border-r-0 whitespace-nowrap p-4"
                      >
                        Up to 80% to the Trader
                      </td>
                    </tr>
                    <tr>
                      <th class="flex items-center border border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left bg-[#4b45b4] overflow-hidden text-white">
                        <span>
                          <BiChevronDown
                            height={32}
                            width={32}
                            className="mr-3"
                          />
                        </span>{" "}
                        Profit Split
                      </th>

                      <td
                        colSpan={3}
                        class="border-t-0 px-6 align-middle border border-l-0 text-center border-r-0 whitespace-nowrap p-4"
                      >
                        Up to 80% to the Trader
                      </td>
                    </tr>
                    <tr>
                      <th class="flex items-center border border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left bg-[#4b45b4] overflow-hidden text-white">
                        <span>
                          <BiChevronDown
                            height={32}
                            width={32}
                            className="mr-3"
                          />
                        </span>{" "}
                        Profit Split
                      </th>

                      <td
                        colSpan={3}
                        class="border-t-0 px-6 align-middle border border-l-0 text-center border-r-0 whitespace-nowrap p-4"
                      >
                        Up to 80% to the Trader
                      </td>
                    </tr>
                    <tr>
                      <th class="flex items-center border border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left bg-[#4b45b4] overflow-hidden text-white">
                        <span>
                          <BiChevronDown
                            height={32}
                            width={32}
                            className="mr-3"
                          />
                        </span>{" "}
                        Profit Split
                      </th>

                      <td
                        colSpan={3}
                        class="border-t-0 px-6 align-middle border border-l-0 text-center border-r-0 whitespace-nowrap p-4"
                      >
                        Up to 80% to the Trader
                      </td>
                    </tr>
                    <tr>
                      <th class="flex items-center border border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left bg-[#4b45b4] overflow-hidden text-white">
                        <span>
                          <BiChevronDown
                            height={32}
                            width={32}
                            className="mr-3"
                          />
                        </span>{" "}
                        Profit Split
                      </th>

                      <td
                        colSpan={3}
                        class="border-t-0 px-6 align-middle border border-l-0 text-center border-r-0 whitespace-nowrap p-4"
                      >
                        Up to 80% to the Trader
                      </td>
                    </tr>
                    <tr>
                      <th class="flex items-center border border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left bg-[#4b45b4] overflow-hidden text-white">
                        <span>
                          <BiChevronDown
                            height={32}
                            width={32}
                            className="mr-3"
                          />
                        </span>{" "}
                        Profit Split
                      </th>

                      <td
                        colSpan={3}
                        class="border-t-0 px-6 align-middle border border-l-0 text-center border-r-0 whitespace-nowrap p-4"
                      >
                        Up to 80% to the Trader
                      </td>
                    </tr>
                    <tr>
                      <th class="flex items-center border border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left bg-[#4b45b4] overflow-hidden text-white">
                        <span>
                          <BiChevronDown
                            height={32}
                            width={32}
                            className="mr-3"
                          />
                        </span>{" "}
                        Profit Split
                      </th>

                      <td
                        colSpan={3}
                        class="border-t-0 px-6 align-middle border border-l-0 text-center border-r-0 whitespace-nowrap p-4"
                      >
                        Up to 80% to the Trader
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
