"use client";
import { useState } from "react";
import Logo from "/ProductImage/sol1.jpeg";
import Logo2 from "/ProductImage/sol2.jpg";
import Logo3 from "/ProductImage/sol3.png";
import Logo4 from "/ProductImage/sol4.jpeg";
import Logo5 from "/ProductImage/sol5.png";

const productSolutions = () => {
  // State to manage the left container content
  const [leftContent, setLeftContent] = useState({
    image: Logo,
    title: "SMS SOLUTIONS",
    description:
      "Deliver secure, real-time communication with OTPs, transactional updates, and personalized promotional messages.",
  });

  // Clickable container content data
  const [clickableContent, setClickableContent] = useState([
    {
      image: Logo2,
      title: "VOICE SERVICES",
      description:
        "Boost customer engagement with voice services like outbound calling, IVR, and missed call alerts.",
    },
    {
      image: Logo3,
      title: "Whatsapp Business API",
      description:
        "Leverage WhatsApp Business API for rich, interactive customer engagement with branded messaging.",
    },
    {
      image: Logo4,
      title: "Email Solutions",
      description:
        "Email services offer secure transactional emails for vital updates and personalized promotional campaigns to drive engagement.",
    },
    {
      image: Logo5,
      title: "Customer Engagement",
      description:
        "Customer engagement is elevated through a unified dashboard, offering real-time insights and analytics across all campaigns.",
    },
  ]);

  // Swap function
  const handleSwap = (index) => {
    const newClickableContent = [...clickableContent];
    const temp = leftContent;
    setLeftContent(newClickableContent[index]);
    newClickableContent[index] = temp;
    setClickableContent(newClickableContent);
  };

  return (
    <div className="main_container w-full min-h-screen bg-gradient-to-b from-black to-blue-950 flex flex-col gap-10 justify-center items-center">
      <h1 className="text-2xl font-bold text-white md:mt-10 mt-10">Communication Solutions</h1>

      <div className="left_container md:p-10 md:m-7 m-2 bg-white md:w-3/4 md:h-3/4 rounded-2xl text-black flex md:flex-row flex-col ">
        <div className="md:w-1/2 flex flex-col p-5">
          <img src={leftContent.image} alt="img" className=" w-94 md:h-60 rounded-2xl object-fit" />
          <span className="font-bold text-xl p-2 mt-2">{leftContent.title}</span>
          <p className="text-textColor font-semibold ml-2">{leftContent.description}</p>
        </div>

        <div className="right_container md:w-1/2 flex md:flex-col flex-wrap md:flex-nowrap ">
          {clickableContent.map((content, index) => (
            <div
              key={index}
              className="clickable_container flex  p-4 gap-4 cursor-pointer hover:bg-gray-200 transition md:flex-row flex-col flex-wrap md:flex-nowrap  md:w-full w-1/2"
              onClick={() => handleSwap(index)}
            >
              <img src={content.image} alt="img" className="w-50 h-35 rounded-2xl object-fit p-2" />
              <div className="leading-6 flex  flex-col gap-2">
                <span className="font-bold md:text-base text-sm">{content.title}</span>
                <p className="text-textColor text-sm font-semibold ">{content.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default productSolutions;
