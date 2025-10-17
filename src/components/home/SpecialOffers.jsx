import React from "react";
import { CalendarDays } from "lucide-react";

const offers = [
    {
        id: 1,
        country: "Croatia",
        title: "Piazza Castello",
        rating: 5,
        reviews: 12,
        duration: "9 Days Tours",
        discount: "20% OFF",
        price: 170,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60",
    },
    {
        id: 2,
        country: "Greece",
        title: "Santorini, Oia",
        rating: 5,
        reviews: 38,
        duration: "9 Days Tours",
        discount: "30% OFF",
        price: 180,
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60",
    },
    {
        id: 3,
        country: "Maldives",
        title: "Hurawalhi Island",
        rating: 5,
        reviews: 18,
        duration: "9 Days Tours",
        discount: "15% OFF",
        price: 260,
        image:
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=60",
    },
];

export default function SpecialOffers() {
    return (
        <section className=" relative py-16 px-6 lg:px-20 bg-white ">
            <div className=" absolute inset-0  bg-no-repeat" style={{
                    backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/shape8.png')"
                }} >

                </div>
            {/* Header Section */}
            <div className=" relative text-center mb-12 ">
                <p className="text-yellow-500 font-semibold">Top Offers</p>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                    Special{" "}
                    <span className="text-teal-600">Offers & Discount</span> Packages
                </h2>
                <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore.
                </p>
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all relative"
                    >
                        {/* Discount Ribbon */}
                        <div className="absolute top-4 left-[-40px] rotate-[-45deg] bg-yellow-400 text-white font-bold text-sm px-16 py-2 shadow-md z-10">
                            {offer.discount}
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-56 object-cover rounded-t-2xl"
                            />
                            <div className="absolute bottom-3 left-3 bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2 shadow">
                                <CalendarDays className="w-4 h-4" /> {offer.duration}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <p className="text-teal-600 font-medium">{offer.country}</p>
                            <h3 className="font-serif text-2xl text-gray-800 mt-1">
                                {offer.title}
                            </h3>

                            <div className="flex items-center mt-2">
                                <div className="text-yellow-400">
                                    {"★".repeat(offer.rating)}
                                </div>
                                <span className="text-gray-400 ml-2">({offer.reviews})</span>
                            </div>

                            <p className="text-gray-500 text-sm mt-3">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum.
                            </p>

                            <div className="mt-5 flex items-center justify-between">
                                <p className="text-teal-700 font-bold text-lg">
                                    ${offer.price.toFixed(2)}{" "}
                                    <span className="text-gray-400 font-normal text-sm">
                                        | Per person
                                    </span>
                                </p>
                                <div className="w-12 h-1 bg-teal-600 rounded" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
