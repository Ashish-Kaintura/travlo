import React from 'react'

export default function TopDestination() {
    return (
        <>
            <section className="py-16">
                <div className="relative text-center my-16 max-w-3xl mx-auto font-serif space-y-4">
                    <h3 className="text-Lightcolor text-2xl font-semibold">Top Destinations</h3>
                    <h2 className="text-5xl font-semibold text-primary">
                        <span className="text-gray-800">Explore</span> Top Destinations
                    </h2>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 lg:px-0">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left: large hero image */}
                        <div className=" relative h-[540px] lg:w-1/3 w-full rounded-lg overflow-hidden shadow-md">
                            <img
                                className="w-full h-64 lg:h-full object-cover"
                                src="https://i.postimg.cc/jCVDw6Fz/New-York.png"
                                alt="Los Angeles skyline"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <h4 className="text-white text-lg font-semibold">New York</h4>
                            </div>
                        </div>

                        {/* Right: grid of destination cards */}
                        <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/wx1FN6rB/Los-Angeles.png"
                                    alt="New York"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Los Angeles</h4>
                                </div>
                            </div>

                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/pV3CYwNS/Austin.png"
                                    alt="Paris"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Austin</h4>
                                </div>
                            </div>

                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/02mftVP8/Chicago.png"
                                    alt="Tokyo"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Chicago</h4>
                                </div>
                            </div>

                            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="https://i.postimg.cc/cCtKLkXK/Phoenix.png"
                                    alt="Sydney"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <h4 className="text-white text-lg font-semibold">Phoenix</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
