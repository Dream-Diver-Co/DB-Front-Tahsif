import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.getElementById('my_modal_3').showModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.getElementById('my_modal_3').close();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    const datetime = event.target.datetime.value;
    const number = event.target.number.value;
    const email = event.target.email.value;

    const appointment = { name, address, datetime, number, email };

    try {
      const response = await fetch("http://localhost:3000/addapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data:", data);
      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Appointment Successfully Booked and Emails Sent',
          icon: 'success',
          confirmButtonText: 'Done'
        });
        handleCloseModal();
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to book appointment. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-around items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex space-x-4 italic">
          <Link to="/" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">Home</Link>
          <Link to="/about" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">About Us</Link>
          <Link to="/categories" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">Categories</Link>
          <Link to="/shops" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">Shops</Link>
          <Link to="/contact" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">Contact</Link>
        </div>
        <div>
          <button 
            className="btn px-6 py-3 bg-red-700 text-white font-semibold rounded-none hover:bg-red-900 transition duration-300"
            onClick={handleOpenModal}
          >
            Book - Appointment
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form onSubmit={handleSubmit}>
                <button 
                  type="button" 
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                  onClick={handleCloseModal}
                >
                  ✕
                </button>
                <h3 className="font-bold text-lg">Appointment Form</h3>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="input input-bordered w-full" 
                    required 
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    name="number"
                    className="input input-bordered w-full" 
                    required 
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="input input-bordered w-full" 
                    required 
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input 
                    type="text" 
                    name="address"
                    className="input input-bordered w-full" 
                    required 
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">Date and Time</label>
                  <input 
                    type="datetime-local" 
                    name="datetime"
                    className="input input-bordered w-full" 
                    required 
                  />
                </div>
                <div className="flex justify-end">
                  <button 
                    type="button" 
                    className="btn btn-secondary mr-2" 
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
