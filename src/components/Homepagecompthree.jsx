export const Homepagecompthree = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row mt-10 py-5 lg:px-10 xl:px-10 2xl:px-10 px-4">
      <div className="lg:px-14 xl:px-14 2xl:px-14 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full flex-col justify-center ">
        <h1 className="text-2xl font-bold" style={{'color':'#e48c71'}}  data-aos="fade-up">PRODUCTS GOVT GIVE UNDER CARDS</h1>
        <h1 className="font-bold mt-10 text-5xl" data-aos="fade-up">&#x2022; WHEAT</h1>
        <h1 className="text-5xl font-bold " data-aos="fade-up">&#x2022; SUGAR</h1>
        <h1 className="text-5xl font-bold " data-aos="fade-up">&#x2022; RICE</h1>
        <h1 className="text-5xl font-bold " data-aos="fade-up">&#x2022; LPG</h1>
        <h1 className="text-5xl font-bold " data-aos="fade-up">&#x2022; KEROSENE</h1>
        <h1 className="text-5xl font-bold " data-aos="fade-up">&#x2022; FERTILIZERS</h1>
        <p className="font-bold mt-3 text-base " data-aos="fade-up">
        Get your monthly supplies of ration food delivered here.
        </p>
        <p className="font-bold mt-3 text-base " data-aos="fade-up">
        We provide the best quality products at the best price. Homemade food is always the best.
        Get your food from Govt. approved gowdowns.
        </p>
        <a
          //href="/account/login"
          className="inline-block py-2 mx-0 px-2 text-center border-black border-2 rounded font-bold w-72 mt-5 text-black hover:cursor-pointer" style={{'backgroundColor':'#f1d4ca'}} data-aos="fade-up" onClick={()=>{
            scrollTo(0,2290);
          }}>
           ORDER NOW
        </a>
      </div>
      <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 pr-10 xs:flex sm:flex md:flex xs:justify-around sm:justify-around md:justify-around" data-aos="flip-right">
        <img
          alt="No alt"
          src="https://images.pexels.com/photos/1638523/pexels-photo-1638523.jpeg"
          className="border-2 border-black lg:w-80 xl:w-80 2xl:w-80 lg:ml-20 xl:ml-20 2xl:ml-20 " style={{'transform':'rotate(-6deg)'}}
        />
      </div>
    </div>
  )
}
export default Homepagecompthree;