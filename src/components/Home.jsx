import Navbar from "./Navbar.jsx";
// import About from "./About.jsx";
import "aos/dist/aos.css";
import Homepagecompone from "./Homepagecompone.jsx";
import Homepagecomptwo from "./Homepagecomptwo.jsx";
import Homepagecompthree from "./Homepagecompthree.jsx";
import Homepagecompfour from "./Homepagecompfour.jsx";
import Homepagecompfive from "./Homepagecompfive.jsx";
import Homepagecompsix from "./Homepagecompsix.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />
        <Homepagecompone />
        <Homepagecomptwo />
        <Homepagecompthree />
        <Homepagecompfour />
        <Homepagecompfive />
        {/* <Homepagecompsix /> */}
        <Footer />
    </div>
  );
}

export default Home;
