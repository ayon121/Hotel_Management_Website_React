import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Navbanner from "../Navbar/Navbanner";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbanner></Navbanner>
            <Navbar></Navbar>
            <Banner></Banner>
            <Gallery></Gallery>
            <Footer>
            </Footer>
        </div>
    );
};

export default Home;