import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { products } from "../Constants";
export const Homepagecompfive = () => {
  const notify = () =>
    toast.success(`product is added to your cart successfully`, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "001",
    });
  const addtocart = (id) => {
    const product = products.find((product) => product.id === id);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((item) => item.id === id);
    if (item) {
      item.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div
      className="h-max w-screen lg:p-8 xl:p-8 2xl:p-8 p-4"
      style={{ backgroundColor: "#e48c71" }}
      data-aos="fade-up"
    >
      <ToastContainer />
      {products.map((product) => (
        <div className="bg-primary">
          <div className="p-8 bg-white flex lg:flex-row xl:flex-row 2xl:flex-row flex-wrap justify-around">
            <div className="lg:w-5/12 xl:w-5/12 2xl:w-5/12 w-full grid">
              <h1 className=" bg-white font-semibold text-2xl text-black">
                {product.name}
              </h1>
              <div className="flex mt-2 justify-between items-center">
                <h1 className=" bg-white font-normal text-lg text-black">
                  {product.description}
                </h1>
                <a
                  //href="/account/login"
                  onClick={() => {
                    addtocart(product.id);
                    notify();
                  }}
                  className="mx-1 text-left bg-primary-500 px-1 py-1 border-black border-2 flex items-center justify-center font-bold rounded w-44 text-black h-max hover:cursor-pointer lg:w-32 xl:w-32 2xl:w-32 bg-[#f1d4ca]  hover:scale-105 hover:bg-white"
                >
                  ₹{product.price}
                </a>
              </div>
              <div className="bg-black h-0.5 my-5 mx-auto w-full">
                <div className="p-2"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homepagecompfive;
