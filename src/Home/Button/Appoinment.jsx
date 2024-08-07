// import React from 'react';

// const Appointment = ({ isModalOpen, handleCloseModal, handleSubmit }) => {
//   return (
//     <>
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Appointment Form</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input 
//                   type="text" 
//                   className="input input-bordered w-full" 
//                   required 
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Address</label>
//                 <input 
//                   type="text" 
//                   className="input input-bordered w-full" 
//                   required 
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Date and Time</label>
//                 <input 
//                   type="datetime-local" 
//                   className="input input-bordered w-full" 
//                   required 
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Number</label>
//                 <input 
//                   type="tel" 
//                   className="input input-bordered w-full" 
//                   required 
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input 
//                   type="email" 
//                   className="input input-bordered w-full" 
//                   required 
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button 
//                   type="button" 
//                   className="btn btn-secondary mr-2" 
//                   onClick={handleCloseModal}
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit" 
//                   className="btn btn-primary"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Appointment;
