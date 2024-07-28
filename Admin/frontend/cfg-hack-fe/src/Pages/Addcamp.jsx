// import React from 'react';

// const Addcamp = () => {
//   const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

//   return (
//     <div className='bg-customBlue h-screen w-screen flex justify-center items-center'>
//       <div className='bg-customBlue p-8 rounded-lg shadow shadow-white w-[540px]'>
//         <h1 className='text-white text-center pt-4 font-bold text-3xl mb-12'>Add Campsite</h1>
//         <form className='flex flex-col items-center'>
//           <div className='text-center mb-4 w-full'>
//             <p className='text-white text-left mb-1'>Enter Date</p>
//             <input
//               type='date'
//               name='date'
//               min={today} // Set the min attribute to today's date
//               className='text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80'
//             />
//           </div>
//           <div className='text-center mb-4 w-full'>
//             <p className='text-white text-left mb-1'>Camp Location</p>
//             <select
//               name='course_category'
//               className='text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80'
//             >
//               <option value='bangalore'>bangalore</option>
//               <option value='chennai'>chennai</option>
//               <option value='delhi'>delhi</option>
//               <option value='jaipur'>jaipur</option>
//               <option value='hyderabad'>hyderabad</option>
//               <option value='mumbai'>mumbai</option>
//             </select>
//           </div>
//           <div className='text-center w-full'>
//             <button type='submit' className='text-white p-3 w-full rounded-sm bg-buttonBlue mt-2'>
//               Add Camp
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addcamp;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Addcamp = () => {
//   const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

//   const [formData, setFormData] = useState({
//     camp_loc: '',
//     camp_date: today,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3003/api/add-camp', formData);
//       console.log(response.data);
//       // Optionally, clear the form or display a success message here
//     } catch (error) {
//       console.error(error.response.data);
//       // Optionally, display an error message here
//     }
//   };

//   return (
//     <div className='bg-customBlue h-screen w-screen flex justify-center items-center'>
//       <div className='bg-customBlue p-8 rounded-lg shadow shadow-white w-[540px]'>
//         <h1 className='text-white text-center pt-4 font-bold text-3xl mb-12'>Add Campsite</h1>
//         <form className='flex flex-col items-center' onSubmit={handleSubmit}>
//           <div className='text-center mb-4 w-full'>
//             <p className='text-white text-left mb-1'>Enter Date</p>
//             <input
//               type='date'
//               name='camp_date'
//               value={formData.camp_date}
//               min={today} // Set the min attribute to today's date
//               onChange={handleChange}
//               className='text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80'
//             />
//           </div>
//           <div className='text-center mb-4 w-full'>
//             <p className='text-white text-left mb-1'>Camp Location</p>
//             <select
//               name='camp_loc'
//               value={formData.camp_loc}
//               onChange={handleChange}
//               className='text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80'
//             >
//               <option value='' disabled>Select Location</option>
//               <option value='bangalore'>Bangalore</option>
//               <option value='chennai'>Chennai</option>
//               <option value='delhi'>Delhi</option>
//               <option value='jaipur'>Jaipur</option>
//               <option value='hyderabad'>Hyderabad</option>
//               <option value='mumbai'>Mumbai</option>
//             </select>
//           </div>
//           <div className='text-center w-full'>
//             <button type='submit' className='text-white p-3 w-full rounded-sm bg-buttonBlue mt-2'>
//               Add Camp
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addcamp;

import React, { useState } from "react";
import axios from "axios";

const Addcamp = () => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const [formData, setFormData] = useState({
    id: "",
    camp_loc: "",
    camp_date: today,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3003/api/add-camp",
        formData
      );
      console.log(response.data);
      // Optionally, clear the form or display a success message here
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(`Error: ${error.response.data.error}`);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="bg-customBlue h-screen w-screen flex justify-center items-center">
      <div className="bg-customBlue p-8 rounded-lg shadow shadow-white w-[540px]">
        <h1
          style={{ paddingLeft: "2em" }}
          className="text-white text-center pt-4 font-bold text-3xl mb-12"
        >
          Add Campsite
        </h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="text-center mb-4 w-full">
            <p
              style={{ paddingLeft: "4em", fontWeight: "0.8em", color: "grey" }}
              className="text-white text-left mb-1"
            >
              Camp ID
            </p>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80"
              placeholder="Enter Camp ID"
              style={{
                marginLeft: "5em",
                width: "12vw",
                fontWeight: "0.8em",
                color: "grey",
                border: "1.5px solid black",
                borderRadius: "3px",
                height: "2em",
              }}
            />
          </div>
          <div className="text-center mb-4 w-full">
            <p
              className="text-white text-left mb-1"
              style={{ paddingLeft: "4em", fontWeight: "0.8em", color: "grey" }}
            >
              Enter Date
            </p>
            <input
              type="date"
              name="camp_date"
              value={formData.camp_date}
              min={today} // Set the min attribute to today's date
              onChange={handleChange}
              className="text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80"
              style={{
                marginLeft: "5em",
                width: "12vw",
                fontWeight: "0.8em",
                color: "grey",
                border: "1.5px solid black",
                borderRadius: "3px",
                height: "2em",
              }}
            />
          </div>
          <div className="text-center mb-4 w-full">
            <p
              className="text-white text-left mb-1"
              style={{ paddingLeft: "4em", fontWeight: "0.8em", color: "grey" }}
            >
              Camp Location
            </p>
            <select
              name="camp_loc"
              value={formData.camp_loc}
              onChange={handleChange}
              className="text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80"
              style={{
                marginLeft: "5em",
                width: "12vw",
                fontWeight: "0.8em",
                color: "grey",
                border: "1.5px solid black",
                borderRadius: "3px",
                height: "2.4em",
              }}
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="bangalore">Bangalore</option>
              <option value="chennai">Chennai</option>
              <option value="delhi">Delhi</option>
              <option value="jaipur">Jaipur</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </div>
          <div className="text-center w-full">
            <button
              type="submit"
              className="text-white p-3 w-full rounded-sm bg-buttonBlue mt-2"
              style={{
                marginLeft: "5em",
                width: "7vw",
                padding: "0.5em 1em 0.5em 1em",
                marginTop: "1em",
                border: "2px solid grey",
                backgroundColor: "white",
              }}
            >
              Add Camp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addcamp;
