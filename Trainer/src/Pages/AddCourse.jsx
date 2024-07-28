import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    course_title: '',
    course_category: 'communication',
    course_description: '',
  });

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3003/api/add-course', courseData);
      console.log(response.data);
      // Optionally, clear the form or display a success message here
    } catch (error) {
      console.error(error.response.data);
      // Optionally, display an error message here
    }
  };

  return (
    <div className='bg-customBlue h-screen w-screen flex justify-center items-center'>
      <div className='bg-customBlue p-8 rounded-lg shadow shadow-white w-[540px]'>
        <h1 className='text-white text-center pt-4 font-bold text-3xl mb-12'>Add Course</h1>
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
          <div className='text-center mb-4 w-full'>
            <p className='text-white text-left mb-1'>Course Name:</p>
            <input
              type='text'
              name='course_title'
              value={courseData.course_title}
              onChange={handleChange}
              className='text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80'
            />
          </div>
          <div className='text-center mb-4 w-full'>
            <p className='text-white text-left mb-1'>Course Category:</p>
            <select
              name='course_category'
              value={courseData.course_category}
              onChange={handleChange}
              className='text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80'
            >
              <option value='communication'>Communication</option>
              <option value='gender-sensitivity'>Gender Sensitivity</option>
              <option value='ethics'>Ethics</option>
              <option value='critical-thinking'>Critical Thinking</option>
            </select>
          </div>
          <div className='text-center mb-4 w-full'>
            <p className='text-white text-left mb-1'>Course Description:</p>
            <textarea
              name='course_description'
              value={courseData.course_description}
              onChange={handleChange}
              className='text-white p-3 w-full rounded-sm bg-customBlue border border-dotted opacity-80'
              rows='4'
            ></textarea>
          </div>
          <div className='text-center w-full'>
            <button type='submit' className='text-white p-3 w-full rounded-sm bg-buttonBlue mt-2'>
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;


