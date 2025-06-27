

const Hero = () => {
    return (
        <>
            <div className="HeroSection w-full min-h-screen flex flex-col-reverse md:flex-row justify-center items-center  bg-gradient-to-br from-white to-blue-200 bg-white text-black gap-10">
                <div className="left w-full md:p-10 p-4 relative bottom-10 flex flex-col gap-2 md:block">
                    <h1 className="text-2xl md:text-4xl font-bold">Communication Solutions <br />
                        Seamlessly Connect, Engage, and Grow
                    </h1>

                    <p className="mt-4 md:w-3/4 text-base md:text-lg text-textColor font-semibold">Transform how you interact with customers and stakeholders through Omronix’s robust communication platforms.</p>

                    <div className="buttonSection flex md:gap-10 gap-5 mt-6">
                        <button className=" h-12 p-2 px-3 py-2 md:px-5 md:py-2  cursor-pointer rounded-full bg-blue-900 hover:bg-blue-600 text-white transition flex items-center justify-center text-black text-sm">
                            <a href="/contact">GET STARTED TODAY</a>
                        </button>
                    </div>
                </div>
                <div className="right w-full flex justify-center relative bottom-10">
                    <img src="/ProductImage/3.jpeg" alt="" className="md:w-96 w-72 rounded-xl" />
                </div>
            </div>

        </>
    )
}

export default Hero