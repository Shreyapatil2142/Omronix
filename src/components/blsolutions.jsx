import { useState } from "react";
import Logo1 from "/BlockchainImage/bl1.png";
import Logo2 from "/BlockchainImage/bl2.jpg";
import Logo3 from "/BlockchainImage/bl3.jpg";
import Logo4 from "/BlockchainImage/bl4.jpg";
import Logo5 from "/BlockchainImage/bl5.png";

const BlockchainSolutions = () => {
  // State for the left container content
  const [leftContent, setLeftContent] = useState({
    image: Logo1,
    title: "Blockchain Development",
    description:
      "Public Blockchains, Private Blockchains, Consortium Blockchains",
  });

  // Clickable containers' content
  const [clickableContent, setClickableContent] = useState([
    {
      image: Logo2,
      title: "Tokenization Solutions",
      description:
        "Asset Tokenization: Convert real estate, art, or commodities into digital tokens.",
    },
    {
      image: Logo3,
      title: "Smart Contract Services",
      description:
        "Development, auditing, and deployment of self-executing contracts. Industries: DeFi, insurance, supply chain.",
    },
    {
      image: Logo4,
      title: "Enterprise Solutions",
      description:
        "Supply Chain Management: Track goods from source to shelf with immutable logs.",
    },
    {
      image: Logo5,
      title: "Blockchain As A Service",
      description:
        "BaaS enables businesses to develop, host, and deploy blockchain applications without managing the underlying infrastructure.",
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
      <h1 className="text-2xl font-bold text-white  md:mt-10 mt-10">Blockchain Solutions</h1>

      <div className="left_container  md:p-10 md:m-7 m-2 bg-white md:w-3/4 md:h-3/4 rounded-2xl text-black flex md:flex-row flex-col ">
        <div className="md:w-1/2 flex flex-col p-5">
          <img src={leftContent.image} alt="img" className="w-94 md:h-60 rounded-2xl object-fit" />
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
              <div className="leading-6 flex flex-col gap-2">
                <span className="font-bold md:text-base text-sm">{content.title}</span>
                <p className="text-textColor text-sm font-semibold">{content.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainSolutions;
