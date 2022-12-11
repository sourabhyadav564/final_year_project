import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutubeSquare,
} from "react-icons/fa";
function Footer()
  {
    return (
      <div className="bg-white mt-10">
      <div className="py-16 text-center max-w-7xl mx-auto">
        <h1 className=" text-3xl font-semibold">RATION SHOP INDIA</h1>
        <p className="w-4/5 mx-auto my-5 md:w-3/5 lg:w-2/5">
        GET YOUR MONTHLY RATION SUPPLIES DELIVERED AT YOUR DOORSTEP
        </p>
        <div className=" flex justify-center gap-x-3">
          <a href="https://www.instagram.com/mygovindia/?hl=en">
            <FaInstagram className={"w-full text-xl border-gray-600"} />
          </a>
          <a href="https://www.facebook.com/MyGovIndia/">
            <FaFacebookF className={"w-full text-xl border-gray-600"} />
          </a>
          <a href="https://twitter.com/mygovindia/">
            <FaTwitter className={"w-full text-xl border-gray-600"} />
          </a>
          <a href="https://www.linkedin.com/company/government-of-india/?originalSubdomain=in">
            <FaLinkedinIn className={"w-full text-xl border-gray-600"} />
          </a>
          <a href="https://www.youtube.com/mygovindia">
            <FaYoutubeSquare className={"w-full text-xl border-gray-600"} />
          </a>
        </div>
      </div>
      <div className="text-center py-1 max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-600">
        <p className=" w-4/5 mx-auto my-5 text-sm leading-5">
          Government of INDIA. All Rights Reserved
        </p>
      </div>
    </div>
    );
  }
export default Footer;