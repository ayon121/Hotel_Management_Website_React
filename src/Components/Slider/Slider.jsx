import { Link } from "react-router-dom";

import { Cursor, useTypewriter } from "react-simple-typewriter";
const Slider = () => {
    const [text] = useTypewriter({
        words: ['Escape To Luxury And Comfort'],
        loop : 7
      })
    return (
        <div>
            <div className="text-center">
            <h1 className="font-Hind font-bold  text-3xl md:text-4xl lg:text-5xl mb-3 mt-3">{text}<Cursor cursorColor='white' /></h1>
            </div>
            <div className="carousel rounded-box mt-6">
                <div className="carousel-item">
                    <img className="w-auto h-72" src="https://i.ibb.co/44gBJsM/jared-rice-Pibra-WHb4h8-unsplash.jpg" alt="hotel view" />
                </div>
                <div className="carousel-item">
                    <img className="w-auto h-72" src="https://i.ibb.co/KX61R66/olexandr-ignatov-w72a24br-INI-unsplash.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img className="w-auto h-72" src="https://i.ibb.co/vLTDKSc/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img className="w-auto h-72" src="https://i.ibb.co/WtV57hF/steven-ungermann-a-RT5-UCf2-MYY-unsplash.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img className="w-auto h-72" src="https://i.ibb.co/RQC51Vj/roberto-nickson-emqn-SQw-QQDo-unsplash.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img className="w-auto h-72" src="https://i.ibb.co/6y0cWWr/visualsofdana-T5p-L6ci-En-I-unsplash.jpg" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img className="w-auto h-72" src="https://i.ibb.co/VQnyXjV/christian-mackie-yb9b2wbhx-G4-unsplash.jpg" alt="Burger" />
                </div>
            </div>
            <div className="max-w-xl h-20 text-center mx-auto px-4 mt-3 mb-5">
                
                <Link to='/Rooms'><button className="font-Hind font-bold  btn text-white bg-[#3fb43b] hover:bg-white hover:text-black">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Slider;