import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
export default function GettoKnow() {
    return (
        <>

            <section className='relative h-[700px] py-16 px-6 lg:px-24'>
                <div className=' absolute inset-0 opacity-35 bg-cover bg-center bg-no-repeat ' style={{
                    backgroundImage: "url('https://i.postimg.cc/Y2TRf5K7/Background-image.jpg')"
                }} >

                </div>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="relative">
                        
                        <img
                            src="https://i.postimg.cc/XNtLcRSM/Explore-all-our-tour.png"
                            alt="Traveler"
                            className="relative w-full h-auto "
                        />
                    </div>

                    {/* Right Content */}
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
                                <BsCurrencyDollar className="text-teal-600 text-xl" />
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
            </section>

        </>
    )
}
