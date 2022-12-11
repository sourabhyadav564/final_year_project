import '../homepage.css';
export const Homepagecomptwo = () => {
  return (
    <div className="w-screen border-t-2 border-b-2 border-black h-max p-5 mt-12 flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-evenly lg:px-14 xl:px-14 2xl:px-14" style={{'backgroundColor':"#e48c71"}} data-aos="flip-left">
      <div className="h-max bg-primary font-body text-7xl lg:p-10 xl:p-10 2xl:p-10 p-8 border-black border-2 rounded comptwobox" data-aos="zoom-in">
        <h1 className=" font-bold text-5xl mb-6 text-black">FAST DELIVERY</h1>
        <p className="my-6 font-bold mt-3 text-base text-black">
          Our Indian Ration Shop is a one-stop solution for all your grocery
          needs. Your Govt. provide you with the best quality products at the best
          prices.Fast Delivery at your doorstep. 
        </p>
      </div>
      <div className="h-max bg-primary font-body text-7xl lg:p-10 xl:p-10 2xl:p-10 p-8 border-black border-2 rounded comptwobox" data-aos="zoom-in">
        <h1 className=" font-bold text-5xl mb-6 text-black">ONLINE ORDERS</h1>
        <p className=" my-6 font-bold mt-3 text-base text-black">
          With our Indian Ration Shop, you can now order your groceries from
          the comfort of your home and Govt. offer products across whole country. Your basic needs
          are just a click away.
        </p>
      </div>
      <div className="h-max bg-primary font-body text-7xl lg:p-10 xl:p-10 2xl:p-10 p-8 border-black border-2 rounded comptwobox" data-aos="zoom-in" >
        <h1 className=" font-bold text-5xl mb-6 text-black">CASH ON DELIVERY</h1>
        <p className=" my-6 font-bold mt-3 text-base text-black">
          Govt. of india offer you a premium service of Cash on Delivery option for all our customers. You can pay
          for your order when it is delivered to your doorstep with no extra
          charges including delivery charges.
        </p>
      </div>
    </div>
  )
}
export default Homepagecomptwo;
