import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const guides = [
    {
        name: "Solden Kalos",
        role: "Supervisor",
        image:
            "https://images.pexels.com/photos/4144094/pexels-photo-4144094.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        name: "Nelson Bam",
        role: "Quality Assurance",
        image:
            "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        name: "Cacics Coold",
        role: "Asst. Manager",
        image:
            "https://images.pexels.com/photos/4144094/pexels-photo-4144094.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        name: "Salmon Thuir",
        role: "Senior Agent",
        image:
            "https://images.pexels.com/photos/712970/pexels-photo-712970.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

export default function TourGuides() {
    return (
        <section className="py-16 bg-white px-6 lg:px-20">
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-yellow-500 font-semibold uppercase">Tour Guides</p>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
                    Meet Our <span className="text-teal-600">Excellent Guides</span>
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore.
                </p>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                className="pb-12"
            >
                {guides.map((guide, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden">
                            <img
                                src={guide.image}
                                alt={guide.name}
                                className="w-full h-72 object-cover rounded-t-2xl"
                            />
                            <div className="bg-teal-600 text-white text-center py-5">
                                <h3 className="font-semibold text-lg">{guide.name}</h3>
                                <p className="text-sm opacity-90">{guide.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
