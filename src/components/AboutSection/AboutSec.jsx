import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsCurrencyDollar, BsCurrencyRupee } from "react-icons/bs";
import { FaPlaneDeparture, FaUmbrellaBeach, FaMapSigns, FaMountain, FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

export default function AboutSec() {
    return (
        <section className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 pb-12 h-screen mt-6 max-w-7xl mx-auto">
            <div className=" absolute inset-0 bg-center bg-cover bg-no-repeat "
                style={{ backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/background_pattern.png')" }}>

            </div>


            {/* Left Side: Text */}
            <div className=" relative md:w-1/2 space-y-5">
                <div>
                    <p className="text-teal-600 font-medium mb-2">Get To Know Us</p>
                    <h2 className="text-4xl font-bold mb-4">
                        Explore All Tour Of The World With Us.
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>

                    {/* Features */}
                    <div className="flex gap-8 mb-8 text-gray-700">
                        <div className="flex items-center gap-2">
                            <MdOutlineLocationOn className="text-teal-600 text-xl" />
                            <span>Tour Guide</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsCurrencyRupee className="text-teal-600 text-xl" />
                            <span>Friendly Price</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineFolderOpen className="text-teal-600 text-xl" />
                            <span>Reliable Tour Package</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="relative bg-white shadow-lg rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-teal-600">7</h3>
                            <p className="text-gray-500 text-sm">Years Experiences</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-teal-600">37</h3>
                            <p className="text-gray-500 text-sm">Tour Packages</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-teal-600">59</h3>
                            <p className="text-gray-500 text-sm">Happy Customers</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-teal-600">22</h3>
                            <p className="text-gray-500 text-sm">Award Winning</p>
                        </div>
                    </div>
                </div>


            </div>

            {/*right Side: Image */}
            <div className="relative md:w-1/2 mt-10 md:mt-0 flex sm:justify-end">


                <img
                    src="	https://htmldesigntemplates.com/html/travelin/images/travel.png"
                    alt="Travelers"
                    className="w-[350px] md:w-[500px] lg:w-[500px] object-contain relative z-10"
                />


            </div>


        </section>
    );
}
