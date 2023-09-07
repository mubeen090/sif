import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const pricingData = [
    {
      imageSrc: "/assets/Free.png",
      title: "Free Plan",
      features: [
        "Demo sessions",
        "In-app learning",
        "Dashboard access",
        "Works on all devices",
      ],
      price: "Free",
    },
    {
      imageSrc: "/assets/Standard.png",
      title: "Standard Plan",
      features: [
        "120+ recorded and live sessions",
        "Live doubt clearing sessions",
        "3 certificates with QR code",
        "Works on all devices",
        "Connect anywhere",
      ],
      price: "7,000/- per ",
    },
    {
      imageSrc: "/assets/Premium.png",
      title: "Premium Plan",
      features: [
        "150+ hours of live and recorded classes",
        "In-app learning",
        "Live doubt clearing sessions",
        "Stipend-based internship",
        "Connect anywhere",
        "Get new features",
      ],
      price: "12,000/- ",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose the package that is best for you and explore
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {pricingData.map((item, index) => (
              <ScrollAnimationWrapper key={index} className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                    <Image src={item.imageSrc} width={145} height={165} alt={item.title} />
                  </div>
                  <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                    {item.title}
                  </p>
                  <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                    {item.features.map((feature, i) => (
                      <li key={i} className="relative check custom-list my-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                    <p className="text-2xl text-black-600 text-center mb-4 ">
                      {item.price}
                    </p>
                    <ButtonOutline>Select</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
        {/* Rest of your code */}
      </div>
    </div>
  );
};

export default Pricing;
