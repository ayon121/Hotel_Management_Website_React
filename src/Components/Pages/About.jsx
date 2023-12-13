
import Navbanner from '../Navbar/Navbanner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const About = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = [
        {
            name: '2023',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '2022',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '2021',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '2020',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '2019',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '2018',
            uv: 1000,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '2017',
            uv: 1290,
            pv: 4300,
            amt: 2100,
        },
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <Helmet>
                <title>RoomVue | About</title>
            </Helmet>
            <Navbanner></Navbanner>
            <Navbar></Navbar>
            <div className='flex justify-center  font-bold font-Hind'>
                <h1 className=' text-3xl md:text-4xl lg:text-5xl mb-5 mt-3'>About Us</h1>
            </div>
            <div className='max-w-6xl mx-auto px-3 font-Hind'>
                <div>
                    <p className='text-lg font-semibold pb-3'>Welcome to RoomVue, where your comfort and satisfaction are our top priorities. Nestled in the heart of Dhaka, our hotel offers a serene and welcoming environment for travelers seeking a memorable stay.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Our Story</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'> RoomVue was established with a passion for hospitality and a commitment to providing a unique and unforgettable experience for our guests. Our journey began 1999, and since then, we have continuously strived to exceed expectations and set new standards in the world of luxury accommodation.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Our Reputation From 2017-2023</h1>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>

                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>The RoomVue Experience</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>At RoomVue, we believe that a truly exceptional hotel experience extends beyond the confines of your room. Our dedicated staff is here to make your stay remarkable, ensuring that you feel at home from the moment you arrive. Whether you are traveling for business or leisure, our hotel offers a range of amenities and services designed to cater to your every need.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Our Commitment to Sustainability</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>We are proud to be environmentally responsible and are committed to reducing our carbon footprint. Briefly mention any green initiatives or sustainability efforts you undertake.</p>
                </div>
                <div>
                    <h1 className='mt-2 text-2xl font-bold'>Come and Experience RoomVue</h1>
                    <p className='text-lg font-semibold pb-3 pt-2'>We look forward to the privilege of hosting you at RoomVue. Whether you are here for a romantic getaway, a business trip, or a family vacation, our team is here to ensure your stay is filled with wonderful memories.Book your stay today and discover the warmth, luxury, and unmatched hospitality of RoomVue. We ca not wait to welcome you.</p>
                </div>

            </div>
            <Footer></Footer>


        </div>
    );
};

export default About;