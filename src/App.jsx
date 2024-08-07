// import React, { useState } from 'react';
// import HeroSection from "./Home/HeroSection";
// import Appointment from "./Home/Button/Appoinment";

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form submitted");
//     handleCloseModal();
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <HeroSection onOpenModal={handleOpenModal} />
//       <Appointment
//         isModalOpen={isModalOpen}
//         handleCloseModal={handleCloseModal}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//   );
// }

// export default App;
