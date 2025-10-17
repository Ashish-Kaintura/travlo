import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "../src/pages/About"
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Rooms />} /> */}
        {/* <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} /> */}
        {/* <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />
        <Route path="/admin/bookings" element={<AdminBookings />} /> */}
        
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        {/* <Route path="/rooms-cottage" element={<Rooms />} />
        <Route path="/rooms-cottage/:slug" element={<RoomDetail />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/event-and-packages" element={<EventsAndPackages />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/payment-success" element={<PaymentSuccess />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
