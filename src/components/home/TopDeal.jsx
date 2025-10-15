import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function TopDeal() {
    return (
        <>
            <section className="relative py-16">
                <div className=' absolute inset-0 opacity-70 bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/shape2.png')" }}  ></div>
                <div className="relative text-center my-16 max-w-3xl mx-auto font-serif space-y-4">
                    <h3 className="text-Lightcolor text-2xl font-semibold">Top Deals</h3>
                    <h2 className="text-5xl font-semibold text-gray-700">
                        <span className="text-primary">The Last</span> The Last Minute Deals
                    </h2>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-0">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left: large hero image */}
                        <div className=' relative lg:w-1/3 gap-y-6 grid grid-cols-1' >
                            <div className=" relative h-64  w-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    className="w-full h-64 lg:h-full object-cover"
                                    src="https://htmldesigntemplates.com/html/travelin/images/trending/trendingb-2.jpg"
                                    alt="Los Angeles skyline"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Norway <br />
                                        Norway Lake
                                        <br />

                                        $180.00 | Per person <br />

                                        6 Days Tours</h4>

                                </div>
                            </div>
                            <div className=" relative h-64  w-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    className="w-full h-64 lg:h-full object-cover"
                                    src="https://htmldesigntemplates.com/html/travelin/images/trending/trendingb-1.jpg"
                                    alt="Los Angeles skyline"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">    Usa
                                        <br />
                                        New York City
                                        <br />

                                        $140.00 | Per person
                                        <br />
                                        3 Days Tours</h4>
                                </div>
                            </div>
                            <div className=" relative h-64  w-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    className="w-full h-64 lg:h-full object-cover"
                                    src="https://htmldesigntemplates.com/html/travelin/images/trending/trending-large.jpg"
                                    alt="Los Angeles skyline"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">

                                        Egpyt
                                        <br />
                                        Pyramid Land
                                        <br />

                                        $180.00 | Per person
                                        <br />

                                        6 Days Tours
                                    </h4>
                                </div>
                            </div>
                        </div>
                        {/* Right: grid of destination cards */}
                        <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative  rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://htmldesigntemplates.com/html/travelin/images/trending/trending1.jpg"
                                    alt="New York"
                                    className="w-full h-52 object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Los Angeles</h4>
                                </div> */}
                                <div className='h-full bg-white text-black p-4 font-serif ' >
                                    <div>
                                        <h2 className='text-primary' >Title</h2>
                                        <h3 className='text-xl font-semibold text-gray-700'>Main title</h3>
                                        <div className='flex gap-x-2'>
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                        </div>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quidem officiis ab totam </span>
                                        <div className='w-full border-t-2  border-dashed border-gray-600 my-3' > </div>
                                        <span className='text-primary font-semibold'   >220.00 | Per person</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative  rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://htmldesigntemplates.com/html/travelin/images/trending/trending2.jpg"
                                    alt="New York"
                                    className="w-full h-52 object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Los Angeles</h4>
                                </div> */}
                                <div className='h-full bg-white text-black p-4 font-serif ' >
                                    <div>
                                        <h2 className='text-primary' >Title</h2>
                                        <h3 className='text-xl font-semibold text-gray-700'>Main title</h3>
                                        <div className='flex gap-x-2'>
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                        </div>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quidem officiis ab totam </span>
                                        <div className='w-full border-t-2  border-dashed border-gray-600 my-3' > </div>
                                        <span className='text-primary font-semibold'   >220.00 | Per person</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative  rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://htmldesigntemplates.com/html/travelin/images/trending/trending3.jpg"
                                    alt="New York"
                                    className="w-full h-52 object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Los Angeles</h4>
                                </div> */}
                                <div className='h-full bg-white text-black p-4 font-serif ' >
                                    <div>
                                        <h2 className='text-primary' >Title</h2>
                                        <h3 className='text-xl font-semibold text-gray-700'>Main title</h3>
                                        <div className='flex gap-x-2'>
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                        </div>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quidem officiis ab totam </span>
                                        <div className='w-full border-t-2  border-dashed border-gray-600 my-3' > </div>
                                        <span className='text-primary font-semibold'   >220.00 | Per person</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative  rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://htmldesigntemplates.com/html/travelin/images/trending/trending4.jpg"
                                    alt="New York"
                                    className="w-full h-52 object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Los Angeles</h4>
                                </div> */}
                                <div className='h-full bg-white text-black p-4 font-serif ' >
                                    <div>
                                        <h2 className='text-primary' >Title</h2>
                                        <h3 className='text-xl font-semibold text-gray-700'>Main title</h3>
                                        <div className='flex gap-x-2'>
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                            <FaStar className='text-yellow-400' />
                                        </div>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quidem officiis ab totam </span>
                                        <div className='w-full border-t-2  border-dashed border-gray-600 my-3' > </div>
                                        <span className='text-primary font-semibold'   >220.00 | Per person</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
