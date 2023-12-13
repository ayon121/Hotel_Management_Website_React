

import img1 from "../../assets/gelary1.jpg"
import img2 from "../../assets/gelary2.jpg"
import img3 from "../../assets/gelary3.jpg"
import img4 from "../../assets/gelary4.jpg"
import img5 from "../../assets/gelary5.jpg"
import img6 from "../../assets/gelary6.jpg"
import img7 from "../../assets/gelary7.jpg"
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Gallery = () => {
    const [text] = useTypewriter({
        words: ['Our Gallery'],
        loop : 7
      })
    return (
        <div className="mb-7 ">
            <div className='flex justify-center font-Hind font-bold'>
                <h1 className=' text-3xl md:text-4xl lg:text-5xl mb-5 mt-3'>{text}<Cursor cursorColor='white' /></h1>
            </div>
            <div className='max-w-7xl px-3 mx-auto mb-5 mt-2'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mb-5' >
                    <div className=' md:col-span-2'>
                        <img className='h-52 w-full rounded-2xl ' src={img1} alt="" />
                    </div>
                    <div>
                        <img className='h-52 w-full rounded-2xl ' src={img2} alt="" />
                    </div>
                    <div>
                        <img  className='h-52 w-full rounded-2xl ' src={img3} alt="" />
                    </div>
                    <div className='md:col-span-2'>
                        <img  className='h-52 w-full rounded-2xl ' src={img4} alt="" />
                    </div>
                    <div>
                        <img  className='h-52 w-full rounded-2xl ' src={img5} alt="" />
                    </div>
                    <div>
                        <img  className='h-52 w-full rounded-2xl' src={img6} alt="" />
                    </div>
                    <div className='hidden md:flex'>
                        <img  className='h-52 w-full rounded-2xl' src={img7} alt="" />
                    </div>
                </div>
        
            </div>
        </div>
    );
};

export default Gallery;