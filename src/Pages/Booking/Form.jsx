import React from "react";

function Form() {
  return (
    <div className="flex flex-col justify-center items-center p-6">
    {/* <!-- Author: FormBold Team --> */}
    <div className="mx-auto w-full max-w-[1140px] bg-white">
      <form className="px-6 py-1">
        <h2 className="mb-6 text-4xl font-bold text-center text-gray-700">Booking</h2>
        <div className="flex flex-wrap mb-5">
          <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
            <label for="places" className="mb-3 block text-base font-semibold">
              Choose a Place
            </label>
            <select name="places" id="places" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md origin-bottom">
              <option value="">---</option>
              <option value="Copacabana Beach">Copacabana Beach</option>
              <option value="Bondi Beach">Bondi Beach</option>
              <option value="Waikiki Beach">Waikiki Beach</option>
              <option value="Bora Bora">Bora Bora</option>
              <option value="Maldives">Maldives</option>
            </select>
          </div>
          <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
            <label for="check-in" className="mb-3 block text-base font-semibold">
              Check-in Date
            </label>
            <input type="date" name="check-in"  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md" />
          </div>
          <div className="w-full md:w-1/3">
            <label for="check-out" className="mb-3 block text-base font-semibold">
              Check-out Date
            </label>
            <input type="date" name="check-out" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md" />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 border text-white bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded">
            Search
          </button>
          <button className="px-4 py-2 border text-white bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded">
            Rates & Availabilities
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
}

export default Form;
