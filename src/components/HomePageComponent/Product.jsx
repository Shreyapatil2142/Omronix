import ProductCard from "./ProductCard"



const Product = () => {
  return (
    <div className="ProductSection  bg-gradient-to-bl from-blue-900 to-blue-950 w-full min-h-screen flex flex-col justify-center items-center relative md:gap-10 gap-5 ">
    <h1 className="text-xl md:text-2xl text-white font-bold pt-4">SERVICES</h1>
    <div className="cardSection flex justify-center flex-wrap w-full md:px-20 px-2 gap-10 md:text-base text-sm">
         <ProductCard name={"Communication Solution"} link={"/product/communicationsolution"} image={"/serv1.png"} overview={"At Omronix, our suite of products is designed to cover every aspect of business communication. Explore our detailed product pages to discover how we can help you engage more effectively with your customers."}/>

         <ProductCard name={"Blockchain Solution"} link={"/product/blockchainsolution"} image={"/serv2.png"} overview={"Build trust, security, and efficiency with Omronix. Our end-to-end blockchain development and consulting services empower businesses with secure, and scalable solutions for seamless digital transformation."}/>
         <ProductCard name={"Agentic AI Solution"} link={"#"} image={"/serv3.png"} overview={"Enhance operations with autonomous intelligence. Our self-learning AI agents act, adapt, and innovate independently, driving efficiency, automation, and smarter decision-making for your business."}/>
        

    </div>

</div>
  )
}

export default Product