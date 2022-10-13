import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { BiChevronDown } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import { FAQs } from "../utils/landingUtils";

const CustomizedAccordion = styled(Accordion)`
  &.Mui-expanded {
    background: rgba(255, 255, 255, 0.19) !important;
    border-bottom: 2px;
    border: 2px solid white;
    box-shadow: none;

    margin: 0;
  }
  &.MuiAccordion-root {
    border-left: solid 0.5rem #ffffff;
    box-shadow: none;
    background: transparent;
    border-bottom: none;
    border-top: none;
    border-radius: 0;
    margin: 1.5rem 0;
    &:hover {
    }
  }
  &.MuiAccordion-root:before {
    content: none;
  }
`;

function HomeFAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div id="faqs" className="relative bg-[#27a945] text-white">
      <div className="max-w-[48rem] mx-auto px-5 md:px-0  py-16 mb-20 ">
        <div className="text-center mb-9 px-5">
          <h3 className="mb-6 md:text-3xl text-2xl leading-normal font-bold text-center">
            FAQs
          </h3>
          <h5 className="mb-4">Frequently Asked Questions</h5>
        </div>
        <div>
          {FAQs.map(({ title, answer }, index) => (
            <CustomizedAccordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                className="!py-4 text-white"
                expandIcon={<BiChevronDown className="text-white" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <h6 className="text-[#ffffff] opacity-90">{title}</h6>
                <p className=" font-poppins text-lg font-semibold hidden"></p>
                <ul className="pl-4 list-disc hidden"></ul>
              </AccordionSummary>
              <AccordionDetails
                dangerouslySetInnerHTML={{ __html: answer }}
              ></AccordionDetails>
            </CustomizedAccordion>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeFAQ;
