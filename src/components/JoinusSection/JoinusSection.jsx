import React from "react";
import img from "../JoinusSection/Group 86.svg";
import img1 from "../JoinusSection/Group 85.svg";
const JoinusSection = () => {
  return (
    <>
      <div>
        <div className=" sm:m-14 m-4 pt-[12px] pb-12 md:pb-0">
          <div className="text-center sm:mb-14">
            <h1 className="text-[25px] md:text-[35px] font-bold text-black md:mx-auto pb-4 md:p-0">
              Join AstraGrove School
            </h1>

            <p className="text-[17px] lg:text-[25px] font-[400] text-black-600 md:mt-4 lg:max-w-6xl lg:mx-auto">
              Thank you for considering AstraGrove School for your child’s
              educational journey. We look forward to welcoming new students who
              share our values and commitment to learning.
            </p>
          </div>
          {/* ---       Admission Process-- */}
          <div className="m-[16px] sm:m-[52px] xl:p-8">
            <div className="pb-6">
              <section className="">addmission goes here</section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinusSection;
