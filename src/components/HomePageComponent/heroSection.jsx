import HeroSectionImg from "../../assets/HeroSection.png"
//#00246B, #CADCFC
// bg-gradient-to-bl from-blue-50 to-blue-200

const HeroSection = () => {
  return (
    <div className="HeroSection w-full min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 bg-blue-200/50">

      <div className="left w-full md:p-10 p-4 relative bottom-10">
        <h1 className="text-xl md:text-4xl font-bold">Empowering Your Business with Next-Generation Decentralized Communication Solutions</h1>

        <p className="mt-4 md:w-3/4 text-sm md:text-lg text-textColor font-semibold">Omronix delivers an integrated CPaaS platform that unites bulk messaging, voice, email, WhatsApp, and advanced customer engagement tools into one seamless experience.</p>

        <div className="buttonSection flex md:gap-10 gap-5 mt-6">

          <button className=" h-12 p-2 px-3 py-2 md:px-5 md:py-2  cursor-pointer rounded-full bg-blue-900 hover:bg-blue-600 text-white transition flex items-center justify-center text-black text-sm">
            <a href="/contact">GET STARTED TODAY</a>
          </button>

          <button className=" h-12 p-2 px-3 py-2 md:px-5 md:py-2  cursor-pointer rounded-full bg-blue-900 hover:bg-blue-600 text-white transition flex items-center justify-center text-black text-sm">
            <a href="/contact">
              CONTACT US
            </a></button>
        </div>

      </div>

      <div className="right w-full flex justify-center relative bottom-10">
        <img src={HeroSectionImg} alt="" className="md:w-96 w-72 " />
      </div>

    </div>
  )
}

export default HeroSection