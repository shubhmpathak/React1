import React from 'react';

const App = () => {
  return (
    <div>

      <section className="bg-cover bg-center h-screen text-white relative" style={{ backgroundImage: 'url("https://your-image-link.com")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10 p-4">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Your Trusted Airport Porter Service</h1>
          <p className="text-xl mb-6">We offer fast and reliable airport services to make your travels smooth and easy.</p>
          <a href="#booking" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg">Book Now</a>
        </div>
      </section>

    
      <section className="py-16 bg-gray-100" id="services">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Porter Service</h3>
              <p>We assist with luggage handling, ensuring a stress-free airport experience.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">VIP Services</h3>
              <p>Receive premium assistance at the airport with personalized services.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Airport Transfers</h3>
              <p>We offer reliable airport transfer services to and from your location.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16" id="booking">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Book Your Service</h2>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <input type="text" placeholder="Full Name" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 mb-4 border border-gray-300 rounded-lg" />
            <textarea placeholder="Message" className="w-full p-3 mb-4 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg">Submit</button>
          </form>
        </div>
      </section>

      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Aeroplane Porter Service. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
