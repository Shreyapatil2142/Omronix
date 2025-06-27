import Card from "./Card"

const KeyValueProposition = () => {
  return (
    <div className="ProductSection w-full bg-blue-200/50 min-h-screen flex flex-col justify-center items-center text-center relative gap-5 md:mt-0 mt-4 md:p-0 ">
      <h1 className="text-lg md:text-xl font-bold">KEY VALUE PROPOSITION</h1>
      <div class="text-center lg-text-left pb-2">
        <div className="cardSection flex justify-center text-center flex-wrap w-full gap-4 md:p-0 p-1">
        <Card image={"/key1.jpg"} heading="Scalable solutions" content="Whether you're a startup or an enterprise, our platform grows with your needs." />
        <Card image={"/key2.png"} heading="High Delivery & Speed" content="Experience near-instant messaging with 99.99% uptime powered by geo-redundant  servers." />
        <Card image={"/key3.png"} heading="User-Centric Design" content="Manage campaigns effortlessly with our intuitive dashboard and real-time analytics.." />
      </div>
      </div>
    </div>
  )
}

export default KeyValueProposition