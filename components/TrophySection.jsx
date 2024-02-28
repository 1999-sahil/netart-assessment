import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import React from "react";

const TrophySection = () => {
  return (
    <>
      {/** large screen */}
      <div className="block max-md:hidden">
        <div className="flex flex-row px-[30px] items-center gap-16">
          {/** left (trophy) */}
          <div className="mt-[150px] max-md:mt-0">
            <Image src="/1.png" alt="trophy" width={900} height={800} />
          </div>

          {/** right (image) */}
          <div className="">
            {/** logo */}
            <div className="">
              <Image src="/logo.png" alt="logo" width={400} height={40} />
            </div>

            {/** texts */}
            <div className="mt-[20px] mb-[10px]">
              <h2 className="font-extrabold text-[15px] mb-[10px] max-md:text-[12px]">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </h2>
              <h2 className="flex font-semibold ml-3 text-[14px] max-md:text-[12px] items-center gap-1">
                <GoDotFill className="mb-5 max-md:mb-8" />
                C.R.I.&apos;s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </h2>
              <h2 className="flex font-semibold ml-3 text-[14px] max-md:text-[12px] items-center gap-1">
                <GoDotFill className="mb-5 max-md:mb-8 text-lg" />
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </h2>
            </div>

            {/** image */}
            <div className="mb-3">
              <Image
                src="/2.png"
                alt="main-image"
                width={800}
                height={600}
                layout="responsive"
              />
            </div>

            {/** text */}
            <div className="font-semibold ml-2 text-[14px]">
              Government of India has awarded the{" "}
              <span className="font-extrabold">
                &quot;National Energy Conservation Award 2018&quot;
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </div>
          </div>
        </div>
      </div>

      {/** small screen */}
      <div className="hidden max-md:block">
        <div className="p-1 mx-2">
          {/** logo */}
          <div className="">
            <Image src="/logo.png" alt="logo" width={250} height={30} />
          </div>

          {/** trophy and points text */}
          <div className="flex my-4">
            <div className="w-[40%]">
              <Image src="/1.png" alt="trophy" width={180} height={300} />
            </div>

            <div className="mt-[20px] mb-[10px] w-[60%]">
              <h2 className="font-extrabold text-[13px] mb-[18px]">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </h2>
              <h2 className="flex font-semibold text-[11px] items-center gap-1">
                <GoDotFill className="mb-12 text-xl" />
                C.R.I.&apos;s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </h2>
              <h2 className="flex font-semibold text-[11px] items-center gap-1">
                <GoDotFill className="mb-16 text-2xl" />
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </h2>
            </div>
          </div>

          {/** image and award text */}
          <div className="flex items-center">
            <div className="font-semibold ml-2 text-[12px] w-[40%]">
              Government of India has awarded the{" "}
              <span className="font-extrabold">
                &quot;National Energy Conservation Award 2018&quot;
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </div>
            <div className="w-[60%]">
              <Image src="/2.png" alt="main image" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrophySection;
