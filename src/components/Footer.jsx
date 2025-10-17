import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaCcDiscover } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import logo from  "../images/logo/Logofinal.png"
import "../css/footer.css"; // optional custom styles if you want to mimic original look

const instaImages = [
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
    "https://htmldesigntemplates.com/html/travelin/images/insta/ins-4.jpg",
];

const Footer = () => {
    return (
        <footer
            className="pt-20 pb-4 relative bg-cover bg-center bg-[#17233e] p-10 "
            style={{ backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/background_pattern.png')" }}
        >
            <div className='absolute top-1 left-0   ' >
                <img src="https://htmldesigntemplates.com/html/travelin/images/shape8.png" alt="" />
            </div>
            <div
                className="absolute top-0 left-0 w-full h-20 bg-no-repeat bg-top"
                style={{ backgroundImage: "url('https://htmldesigntemplates.com/html/travelin/images/shape8.png')" }}
            ></div>
            <div className="max-w-6xl mx-auto">
                {/* Instagram Section */}
                <div className="pb-10 relative z-10 mt-8">
                    <div className="container mx-auto">
                        <div className="text-center mb-6">
                            <h5 className="inline-flex items-center justify-center bg-white/10 px-4 py-2 rounded-lg text-white text-lg font-semibold">
                                <FaInstagram className="mr-2 text-pink-500" /> Follow on Instagram
                            </h5>
                        </div>

                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={2}
                            slidesPerView={8}

                            loop
                            autoplay={{ delay: 2000 }}
                            breakpoints={{
                                320: { slidesPerView: 2 },
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                            }}
                            className="insta-slider"
                        >
                            {instaImages.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <div className="rounded overflow-hidden hover:opacity-90 transition">
                                        <a href="gallery.html">
                                            <img src={img} alt="Instagram" className="w-32 h-32 object-cover" />
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="footer-upper pb-4 text-white relative z-10">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* About */}
                        <div>
                            <img src={logo} alt="Logo" className="mb-3 w-36" />
                            <p className="mb-3 text-gray-200">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio suspendisse leo neque iaculis molestie sagittis maecenas aenean eget.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li><strong>PO Box:</strong> +47-252-254-2542</li>
                                <li><strong>Location:</strong> Collins Street, Sydney, Australia</li>
                                <li><strong>Email:</strong> info@Travelin.com</li>
                                <li><strong>Website:</strong> www.Travelin.com</li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                            <ul className="space-y-1">
                                {["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Customer Service", "Return Policy"].map((item, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-gray-300">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Categories</h3>
                            <ul className="space-y-1">
                                {["Travel", "Technology", "Lifestyle", "Destinations", "Entertainment", "Business"].map((cat, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:text-gray-300">{cat}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Newsletter</h3>
                            <p className="mb-3 text-gray-200">
                                Join our community of over 200,000 global readers who receive emails filled with news, promotions, and more.
                            </p>
                            <form className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="p-2 rounded-l-md w-full text-gray-800 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-md"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Payment Section */}
                <div className="footer-payment border-t border-gray-700 mt-6 py-4 text-white text-sm">
                    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div className="flex items-center space-x-3">
                            <span>We Support:</span>
                            <FaCcMastercard className="text-3xl" />
                            <FaCcPaypal className="text-3xl" />
                            <FaCcStripe className="text-3xl" />
                            <FaCcVisa className="text-3xl" />
                            <FaCcDiscover className="text-3xl" />
                        </div>

                        {/* <div className="flex items-center space-x-3">
                        <select className="p-2 rounded text-black">
                            <option>English</option>
                            <option>Chinese</option>
                            <option>Russian</option>
                            <option>Japanese</option>
                            <option>Korean</option>
                        </select>
                        <select className="p-2 rounded text-black">
                            <option>$ USD</option>
                            <option>$ AUD</option>
                            <option>$ YEN</option>
                            <option>$ INR</option>
                            <option>$ NP</option>
                        </select>
                    </div> */}
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-copyright border-t border-gray-700 mt-4 pt-4">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white text-sm">
                        <p>© 2022Travelosun. All rights reserved.</p>
                        <div className="flex space-x-3 mt-2 md:mt-0">
                            <a href="#"><FaFacebook className="hover:text-pink-500" /></a>
                            <a href="#"><FaTwitter className="hover:text-pink-500" /></a>
                            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
                            <a href="#"><FaLinkedin className="hover:text-pink-500" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
