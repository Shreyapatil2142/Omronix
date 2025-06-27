const WhyOmronix = () => {
  return (
    <div className="AboutSection w-full min-h-screen flex flex-col justify-center items-center  bg-gradient-to-bl from-blue-900 to-blue-950 gap-10 px-6 py-10">
      <h1 className=" text-xl md:text-xl font-bold text-white">WHY CHOOSE OMRONIX?</h1>

      <div className="grid grid-cols-1 pt-7 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="choose_container flex gap-6 bg-white rounded-xl p-4 hover:shadow-2xl shadow-blue-200">
          <img src="/ProductImage/img1.png" alt="" className="w-28 h-24 rounded-xl" />
          <div className="choose_content flex flex-col gap-2">
            <h2 className="text-lg font-bold">Compliance</h2>
            <p className="text-sm text-textColor font-semibold">GDPR, TCPA, and local regulatory adherence.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="choose_container flex gap-6 bg-white rounded-xl p-4 hover:shadow-2xl shadow-blue-200 ">
          <img src="/ProductImage/img2.png" alt="" className="w-28 h-24 rounded-xl" />
          <div className="choose_content flex flex-col gap-2">
            <h2 className="text-lg font-bold">Integration</h2>
            <p className="text-sm text-textColor font-semibold">APIs to connect with CRM, ERP or Agentic AI System.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="choose_container flex gap-6 bg-white rounded-xl p-4 hover:shadow-2xl shadow-blue-200">
          <img src="/ProductImage/img3.png" alt="" className="w-28 h-24 rounded-xl" />
          <div className="choose_content flex flex-col gap-2">
            <h2 className="text-lg font-bold">Customization</h2>
            <p className="text-sm text-textColor font-semibold">Tailored services that align with your specific business needs and objectives.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="choose_container flex gap-6 bg-white rounded-xl p-4 hover:shadow-2xl shadow-blue-200">
          <img src="/ProductImage/img4.png" alt="" className="w-28 h-24 rounded-xl" />
          <div className="choose_content flex flex-col gap-2">
            <h2 className="text-lg font-bold">Expertise</h2>
            <p className="text-sm text-textColor font-semibold">A team of seasoned professionals with extensive experience in blockchain technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOmronix;
