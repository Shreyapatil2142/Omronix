

const WhyOmronix = () => {
  return (
    <div className="AboutSection w-full min-h-screen flex flex-col justify-center items-center relative  bg-mid-blue gap-10">
        <h1 className="text-lg md:text-xl font-bold">Why Choose Omronix?</h1>
              <div className="flex w-full px-10 md-flex-row flex-col gap-10">
                <div className="left w-full md:p-10 p-5 flex flex-col gap-14 ">
                      <div className="choose_container max-w-3/4 flex gap-10">
                        <img src="/ProductImage/img1.png" alt="" className="w-28 rounded-xl h-24" />
                        <div className="choose_content flex flex-col gap-2">
                          <h1 className="text-lg font-bold">Compliance</h1>
                          <p className="text-sm text-textColor font-semibold  md-text-right">GDPR, TCPA, and local regulatory adherence.</p>
                        </div>
                      </div>
                      <div className="choose_container max-w-3/4 flex gap-10">
                        <img src="/ProductImage/img2.png" alt="" className="w-28 h-24 rounded-xl" />
                        <div className="choose_content flex flex-col gap-2">
                          <h1 className="text-lg font-bold">Integration</h1>
                          <p className="text-sm text-textColor font-semibold md-text-right"> APIs to connect with CRM, ERP or Agentic AI System.</p>
                        </div>
                      </div>
                
                  
                             </div>
            <div className="left w-full md:p-10 p-5 flex flex-col gap-14 md-border-l-2">
                   <div className="choose_container max-w-3/4 flex gap-10">
                      <img src="/ProductImage/img3.png" alt="" className=" rounded-xl w-28 h-24" />
                      <div className="choose_content flex flex-col gap-2">
                        <h1 className="text-lg font-bold">Customization</h1>
                        <p className="text-sm text-textColor font-semibold md-text-right">Tailored services that align with your specific business needs and objectives..</p>
                      </div>
                    </div>
                    <div className="choose_container max-w-3/4 flex gap-10">
                      <img src="/ProductImage/img4.png" alt="" className=" rounded-xl w-28 h-24" />
                      <div className="choose_content flex flex-col gap-2">
                        <h1 className="text-lg font-bold">Expertise</h1>
                        <p className="text-sm text-textColor font-semibold md-text-right">A team of seasoned professionals with extensive experience in blockchain technology..</p>
                      </div>
                    </div>
              </div>
                 
                   
     
                
             </div>
         </div>
  )
}

export default WhyOmronix