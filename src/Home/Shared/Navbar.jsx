import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedDate) {
      fetch(`http://localhost:3000/check-available-time?date=${encodeURIComponent(selectedDate)}`)
        .then(response => response.json())
        .then(data => setAvailableSlots(data.slots))
        .catch(err => setError("Failed to fetch available slots"));
    }
  }, [selectedDate]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.getElementById('my_modal_3').showModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.getElementById('my_modal_3').close();
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    const datetime = `${event.target.date.value}T${event.target.time.value}`;
    const number = event.target.number.value;
    const email = event.target.email.value;

    const appointment = { name, address, datetime, number, email, recaptcha: recaptchaValue };

    if (!recaptchaValue) {
      Swal.fire({
        title: 'Error!',
        text: 'Please complete the reCAPTCHA',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/check-slot?datetime=${encodeURIComponent(datetime)}`);
      const slotAvailable = await response.json();
      
      if (!slotAvailable.available) {
        throw new Error('Selected time slot is not available.');
      }

      const responseBook = await fetch("http://localhost:3000/addapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      });

      if (!responseBook.ok) {
        throw new Error(`Server responded with status: ${responseBook.status}`);
      }

      const data = await responseBook.json();
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
        text: error.message || 'Failed to book appointment. Please try again.',
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
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input 
                    type="date" 
                    name="date"
                    className="input input-bordered w-full" 
                    min={new Date().toISOString().split('T')[0]} // Disallow past dates
                    onChange={handleDateChange}
                    required 
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <select name="time" className="select select-bordered w-full" required>
                    {availableSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2">
                  <ReCAPTCHA
                    sitekey="6LdpMyIqAAAAAG_KsOprEaaIAly9e1UOiW_qBhyt"
                    onChange={handleRecaptchaChange}
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
