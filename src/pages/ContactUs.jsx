
import contactImage from "../assets/Contact-us.gif"
import ContactDropdown from "../components/contactDropdown.jsx"

const ContactUs = () => {
    return (
        <div>
            <div className="contact_container w-full gap-10 flex justify-center items-center align-middle rounded-b-2xl bg-gradient-to-tr from-white to-blue-200 ">
                <div className="contact_left w-full md:p-10 p-5">
                    <h1 className=" text-2xl md:text-xl font-bold">Contact Us</h1>
                    <form action="" className="mt-5 text-sm md:text-base">
                        <div className="name_container flex md:gap-15 gap-2 flex-wrap md:flex-nowrap">
                            <div className="input_container flex flex-col gap-2">
                                <h3 className="font-semibold">First Name</h3>
                                <input type="text" name="" id="" placeholder="eg: John" className="md:w-75 w-64 border-gray-400 border-1 " />
                            </div>
                            <div className="input_container flex flex-col gap-2">
                                <h3 className="font-semibold text-sm">Last Name</h3>
                                <input type="text" name="" id="" placeholder="eg: Doe" className="md:w-75 w-64 border-1 border-gray-400 text-sm" />
                            </div>

                        </div>

                        <div className="input_container flex flex-col md-2 gap-2">

                                <h3 className="font-semibold">Email Address</h3>
                                <input type="text" name="" id="" placeholder="eg: email@janesfakedomain.net" className="md:w-75 w-64 border-1 border-gray-400 mr-20 text-sm" />
                            </div>

                            <div className="input_container flex flex-col md-2 gap-2">
                                <h3 className="font-semibold">Company Name</h3>
                                <input type="text" name="" id="" placeholder="eg: omronix" className=" md:w-75 w-64 border-1 border-gray-400 mr-20 text-sm" />
                            </div>
                      

                        <div className="input_container flex flex-col gap-2 mt-4">
                            <h3 className="font-semibold">Product Of Intrest</h3>
                            <input type="text" name="" id="" placeholder="SMS Services" className="md:w-75 w-64 border-1 border-gray-400 mr-20 text-sm" />
                        </div>


                        <div className="input_container flex flex-col gap-2 mt-4">
                            <h3 className="font-semibold">Requirement</h3>
                            <ContactDropdown />
                        </div>

                        <div className="input_container flex flex-col gap-2 mt-4">
                            <h3 className="font-semibold">Remark</h3>
                            <input type="text" name="" id="" placeholder="How can we help you?" className="md:w-100 h-40 border-1 border-gray-400 mr-20 text-sm" />
                        </div>

                        <div className="gap-2 mt-4 bg-black text-white w-fit px-15 py-2 rounded-xl cursor-pointer">
                            Submit
                        </div>




                    </form>
                </div>
                <div className="contact_right w-full md:block hidden">
                    <img src={contactImage} alt="" />
                </div>
            </div>

        </div>
    )
}

export default ContactUs