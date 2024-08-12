import React from 'react';

const Footer = () => {
  return (
    <div className="relative bg-zinc-900 text-white mt-5 py-5 px-4 lg:px-5">
      <div className="lg:flex lg:flex-1">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 lg:pr-5 relative m-10 space-y-4">
          <a href="index.html" className="navbar-brand">
            <h1 className="text-4xl text-yellow-600">DIAMOND BRIDAL</h1>
          </a>
          <p className="mt-4 text-white/50 text-sm sm:text-base lg:text-base overflow-hidden">
  Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy.
  Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed
  stet justo et dolor.
</p>

          <p className="mt-2 text-white/50"><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
          <p className='text-white/50'><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
          <p className='text-white/50'><i className="fa fa-envelope mr-2"></i>info@example.com</p>
          <div className="flex justify-start mt-4">
            <a className="btn btn-square border bg-black border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black rounded-full mr-2" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square border bg-black border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black rounded-full mr-2" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square border bg-black border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black rounded-full mr-2" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-square border bg-black border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black rounded-full mr-2" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Middle Vertical Line */}
        <div className="hidden lg:block w-px bg-white/50 h-auto mx-5"></div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 lg:pl-5 m-10 space-y-4">
          <div className="lg:flex items-center justify-between">
            <div className="col-sm-6 relative">
              <div className="absolute top-0 left-[-40px] h-full w-[80px]"></div>
              <h4 className="font-medium text-2xl mb-4">Quick Links</h4>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>About Us
              </a>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>Contact Us
              </a>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>Our Services
              </a>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>Terms & Condition
              </a>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>Support
              </a>
            </div>
            <div className="col-sm-6">
              <h4 className="font-medium text-2xl mb-4">Popular Links</h4>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>About Us
              </a>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>Contact Us
              </a>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>Our Services
              </a>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>Terms & Condition
              </a>
              <a className="block mb-2 text-left text-white/50 hover:text-yellow-600 transition duration-300" href="#">
                <i className="fas fa-angle-right mr-2"></i>Support
              </a>
            </div>
            
          </div>
          <div className="col-sm-12">
            <h4 className=" mb-4 font-medium text-2xl">Newsletter</h4>
            <div className="w-1/2 lg:w-full">
                <div className="flex">
                <input
                    type="text"
                    className="flex-grow border-none bg-white/50 px-4 py-5 rounded-l-lg"
                    placeholder="Your Email Address"
                />
                <button className="bg-yellow-600 border-0 px-4 py-5 rounded-r-lg text-white hover:bg-yellow-500">
                    Sign Up
                </button>
            </div>
  </div>
</div>

        </div>
      </div>
      <div className="hidden lg:block h-px bg-white/50 w-auto mx-5"></div>
      <div className="flex items-center justify-between ml-10 mt-4">
        <div className="">
        <h3>© DIAMOND BRIDAL. All Rights Reserved.</h3>
        </div>
        {/* <div className="bg-yellow-600">
            <h3>Designed by Dream Diver</h3>
            <h3>Distributed by Dream Diver</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
