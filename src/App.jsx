import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "../src/pages/About"
import Footer from "./components/Footer";
import DestinationDetail from "./pages/DestinationDetail";
import DestinationList from "./pages/DestinationList";


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
        <Route path="/about-us" element={<About />} />
        <Route path="/destination" element={<DestinationList />} />
        <Route path="/destination/:slug" element={<DestinationDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
