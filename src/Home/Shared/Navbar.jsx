import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import logo from "../../assets/img/logo-2.png";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const form = useRef();

  useEffect(() => {
    if (selectedDate) {
      fetch(`http://localhost:5000/check-available-time?date=${encodeURIComponent(selectedDate)}`)
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
      const response = await fetch(`http://localhost:5000/check-slot?datetime=${encodeURIComponent(datetime)}`);
      const slotAvailable = await response.json();
      
      if (!slotAvailable.available) {
        throw new Error('Selected time slot is not available.');
      }

      const responseBook = await fetch("http://localhost:5000/addapp", {
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
        const templateParams = {
          name: name,
          email: email,
          address: address,
          number: number,
          date: event.target.date.value,
          time: event.target.time.value
        };

        emailjs.send('service_hif5and', 'template_itcg9u7', templateParams, '-rKJeI0iB4ZX-hOPq')
          .then(() => {
            Swal.fire({
              title: 'Success!',
              text: 'Appointment Successfully Booked and Email Sent',
              icon: 'success',
              confirmButtonText: 'Done'
            });
          }, (error) => {
            console.log('FAILED...', error.text);
            Swal.fire({
              title: 'Error!',
              text: 'Failed to send confirmation email.',
              icon: 'error',
              confirmButtonText: 'Okay'
            });
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
    <div className="navbar bg-gray-300 lg:h-20 h-16 flex items-center justify-center">
      <div className="flex items-center justify-center">
      <div className="flex items-center justify-start space-x-4">
        <div className=''>
          <img src={logo} alt="Logo" className='w-10 lg:w-24 h-6 lg:h-10'/>
        </div>

        <div className="flex items-center lg:hidden">
          <h1 className="text-white bg-yellow-600 px-4 lg:px-6 flex items-center font-bold h-16 lg:h-20 text-xl lg:text-2xl">
            DIAMOND BRIDAL
          </h1>
        </div>

        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
            <NavLink to='/' className="block px-4 py-2 hover:bg-gray-200">Home</NavLink>
            <NavLink to='/about' className="block px-4 py-2 hover:bg-gray-200">About</NavLink>
            <NavLink to='/services' className="block px-4 py-2 hover:bg-gray-200">Services</NavLink>
            <div className="relative group">
              <button className="flex items-center px-4 py-2 hover:bg-gray-200">
                Shop
                <i className="fas fa-chevron-down ml-2"></i>
              </button>
              <ul className="absolute left-0 mt-2 w-40 bg-white p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li><NavLink to='/shop1' className="block px-4 py-2 hover:bg-gray-200">Shop 1</NavLink></li>
                <li><NavLink to='/shop2' className="block px-4 py-2 hover:bg-gray-200">Shop 2</NavLink></li>
                <li><NavLink to='/shop3' className="block px-4 py-2 hover:bg-gray-200">Shop 3</NavLink></li>
              </ul>
            </div>
            <div className="relative group">
              <button className="flex items-center px-4 py-2 hover:bg-gray-200">
                Category
                <i className="fas fa-chevron-down ml-2"></i>
              </button>
              <ul className="absolute left-0 mt-2 w-40 bg-white p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li><NavLink to='/category1' className="block px-4 py-2 hover:bg-gray-200">Category 1</NavLink></li>
                <li><NavLink to='/category2' className="block px-4 py-2 hover:bg-gray-200">Category 2</NavLink></li>
                <li><NavLink to='/category3' className="block px-4 py-2 hover:bg-gray-200">Category 3</NavLink></li>
              </ul>
            </div>
            <NavLink to='/contact' className="block px-4 py-2 hover:bg-gray-200">Contact</NavLink>
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex items-center w-full justify-center">
        <ul className="menu menu-horizontal px-1 flex items-center justify-center lg:space-x-4 text-lg font-medium">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/services'>Services</NavLink>

          <div className="flex items-center">
            <h1 className="text-white bg-yellow-600 px-8 lg:px-16 flex items-center font-bold h-16 lg:h-20 text-xl lg:text-3xl">
              DIAMOND BRIDAL
            </h1>
          </div>

          <div className="relative group">
            <button className="flex items-center">
              Shop
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
            <ul className="absolute left-0 mt-2 w-40 bg-white p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li><NavLink to='/shop1' className="block px-4 py-2 hover:bg-gray-200">Shop 1</NavLink></li>
              <li><NavLink to='/shop2' className="block px-4 py-2 hover:bg-gray-200">Shop 2</NavLink></li>
              <li><NavLink to='/shop3' className="block px-4 py-2 hover:bg-gray-200">Shop 3</NavLink></li>
            </ul>
          </div>

          <div className="relative group">
            <button className="flex items-center">
              Category
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
            <ul className="absolute left-0 mt-2 w-40 bg-white p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li><NavLink to='/category1' className="block px-4 py-2 hover:bg-gray-200">Category 1</NavLink></li>
              <li><NavLink to='/category2' className="block px-4 py-2 hover:bg-gray-200">Category 2</NavLink></li>
              <li><NavLink to='/category3' className="block px-4 py-2 hover:bg-gray-200">Category 3</NavLink></li>
            </ul>
          </div>
          <NavLink to='/contact' className="block px-4 py-2 hover:bg-gray-200">Contact</NavLink>
        </ul>
      </div>

      <div className="hidden lg:block">
      <button 
            className="btn p-5 bg-yellow-600 border-none  text-white font-semibold rounded-none hover:bg-green-700 transition duration-300"
            onClick={handleOpenModal}
          >
          Appointment
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
            <form ref={form} onSubmit={handleSubmit}>
              <button 
                type="button" 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                onClick={handleCloseModal}
              >
                ✕
              </button>
              <h3 className="font-light text-3xl italic text-center">Appointment Form</h3>
  
              <div className="flex items-center justify-start mb-2">
                <div className="w-1/2 mr-2">
                  <label className="block text-sm font-medium text-gray-700 italic pb-2">Date</label>
                  <input 
                    type="date" 
                    name="date"
                    className="input input-bordered w-full" 
                    min={new Date().toISOString().split('T')[0]} // Disallow past dates
                    onChange={handleDateChange}
                    required 
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 italic pb-2">Time</label>
                  <select name="time" className="select select-bordered w-full" required>
                    {availableSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
  
              <div className="flex items-center justify-start mb-2">
                <div className="w-1/2 mr-2">
                  <label className="block text-sm font-medium text-gray-700 italic pb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    className="input input-bordered w-full" 
                    required 
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 italic pb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="number"
                    className="input input-bordered w-full" 
                    required 
                  />
                </div>
              </div>
  
              <div className="flex items-center justify-start mb-2">
                <div className="w-1/2 mr-2">
                  <label className="block text-sm font-medium text-gray-700 italic pb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="input input-bordered w-full" 
                    required 
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 italic pb-2">Address</label>
                  <input 
                    type="text" 
                    name="address"
                    className="input input-bordered w-full" 
                    required 
                  />
                </div>
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
                  className="btn bg-red-900 text-white hover:bg-red-700 mr-2" 
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn bg-green-900 text-white hover:bg-green-700"
                >
                  Confirm
                </button>
              </div>
            </form>

            </div>
          </dialog>
      </div>
      </div>

      
     
    </div>
  );
};

export default Navbar;
