// import React from 'react'

// const Addcamp = () => {
//   return (
//     <div>
//         <div className='bg-customBlue h-screen w-screen flex justify-center items-center'>
//       <div className='bg-customBlue p-8 rounded-lg shadow shadow-white w-[540px]'>
//         <h1 className='text-white text-center pt-4 font-bold text-3xl mb-12'>Add Campsite</h1>
//         <form className='flex flex-col items-center' >
//           <div className='text-center mb-4 w-full'>
//             <p className='text-white text-left mb-1'>Enter Date</p>
//             <input
//               type='date'
//               name='date'

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
//     </div>
//   )
// }

// export default Addcamp

import React from "react";

const Addcamp = () => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  return (
    <div className="bg-customBlue h-screen w-screen flex justify-center items-center">
      <div className="bg-customBlue p-8 rounded-lg shadow shadow-white w-[540px]">
        <h1 className="text-white text-center pt-4 font-bold text-3xl mb-12">
          Add Campsite
        </h1>
        <form className="flex flex-col items-center">
          <div className="text-center mb-4 w-full">
            <p className="text-white text-left mb-1">Enter Date</p>
            <input
              type="date"
              name="date"
              min={today} // Set the min attribute to today's date
              className="text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80"
            />
          </div>
          <div className="text-center mb-4 w-full">
            <p className="text-white text-left mb-1">Camp Location</p>
            <select
              name="course_category"
              className="text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80"
            >
              <option value="bangalore">bangalore</option>
              <option value="chennai">chennai</option>
              <option value="delhi">delhi</option>
              <option value="jaipur">jaipur</option>
              <option value="hyderabad">hyderabad</option>
              <option value="mumbai">mumbai</option>
            </select>
          </div>
          <div className="text-center w-full">
            <button
              type="submit"
              className="text-white p-3 w-full rounded-sm bg-buttonBlue mt-2"
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
