import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Navbanner from "../Navbar/Navbanner";
import Navbar from "../Navbar/Navbar";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
        <div>
            <Navbanner></Navbanner>
            <Navbar></Navbar>
            <Banner></Banner>
            <Gallery></Gallery>
            <Subscribe></Subscribe>
            <Footer>
            </Footer>
        </div>
    );
};

export default Home;