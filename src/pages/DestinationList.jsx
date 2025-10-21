import destinations from "../data/destinations.json";
import DestinationCard from "../components/Destination/DestinationCard";
import Herosection from "../components/Destination/Herosection";

export default function DestinationList() {
    return (
        <>
            <Herosection />
            <div className="max-w-6xl mx-auto px-4 pb-12 ">
                <div className='relative flex-col justify-between space-y-4 text-center my-16 max-w-3xl mx-auto font-serif'>
                    <h3 className=' text-Lightcolor text-2xl font-serif font-semibold '>Top Destinations</h3>
                    <h2 className='text-5xl font-serif  font-semibold text-primary ' > <span className='text-gray-800' >Explore</span> Top Destinations</h2>
                    <p className='text-xl' > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((item) => (
                        <DestinationCard key={item.id} destination={item} />
                    ))}
                </div>
            </div>
        </>
    );
}
