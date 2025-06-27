import AboutUsImg from "../../assets/AboutUs.gif"


const AboutUsSection = () => {
    return (
        <div className="AboutSection w-full min-h-screen flex md:flex-row-reverse flex-col-reverse justify-center items-center relative gap-10 bg-blue-200">
            <div className="left w-full font-sans md:p-10 p-5">
                <h1 className="text-xl md:text-xl font-bold">ABOUT US</h1>

                <p className="mt-4 md:w-3/4 text-sm md:text-base text-textColor font-semibold">Omronix is transforming CPaaS with secure, scalable communication solutions. Founded in 2024, we simplify complex communications. Launching in 2025, our platform includes bulk messaging, voice, email, and AI tools. We strive to be the most trusted partner in digital communication. Our mission: enhance customer interactions with secure, user-friendly solutions. Driven by innovation, reliability, and transparency, our expert team builds lasting relationships.</p>

               
            </div>

            <div className="right w-full bg-blue relative flex justify-center">
                <img src={AboutUsImg} alt="" className="w-500 mt-4 md:mt-0" />
                {/* //md:w-96 w-72  */}
            </div>

        </div>
    )
}

export default AboutUsSection