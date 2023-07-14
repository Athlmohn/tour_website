import React from "react";

function Welcome() {
  return (
    <div className="w-full h-[100vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80"
        alt="/" className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="text-2xl font-bold sm:text-3xl">Find Tour Special Trip</h1>
          <h2 className="text-4xl py-2 italic"><span className="text-2xl font-bold sm:text-3xl">With</span> Travel Lust</h2>
          <p>
            Discover Travel Lust, your gateway to extraordinary holidays.
            Explore stunning destinations, personalized itineraries, and premium
            accommodations. Let our experts curate your dream getaway for a
            seamless and unforgettable experience. Begin your journey with
            Travel Lust and unlock hassle-free planning and unparalleled
            service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
