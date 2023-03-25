import rationCard from "../images/rationCard.jpg";
import Footer from "./Footer";

function Homepagecompsix() {
  return (
    <>
      <div className="lg:p-10 xl:p-10 2xl:p-10 p-4 flex flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-around">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="font-bold text-7xl pb-7 xs:text-center" data-aos="flip-up">
              RATION HOUSE
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <img
              className="lg:w-[300px] lg:h-[300px] border-2 border-black xs:w-[360px] xs:h-[360px] w-24 h-36 my-4"
              style={{ transform: "rotate(-6deg)" }}
              src={rationCard}
              alt="undraw-healthy-lifestyle-6tyl"
              border="0"
            />
          </div>
          <div className="pt-6 lg:w-[700px]">
            <p className="font-semibold flex justify-items-start">
              Ration House is the first initiative for the BPL card Holders to
              order their daily needs online without going out and getting their
              food and other necessities at their door step.
              we deliver the food and other necessities at your door step. Your data is safe with us.
              We provide the best delivery service to all the BPL card holders.
              Its our duty to help the needy people. We are here to help you. 
              Its time to say goodbye to the long queues and waiting for your turn.
              Its time to become digital and save your time. we the Ration House are here to help you.
              You can order your daily needs online and get them delivered at your door step.
              Best delivery service is provided by us. Best quality food is provided by us.
              Best security of your data is provided by us.
              we are here to see you happy and satisfied.
              we are here to serve you.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Homepagecompsix;
