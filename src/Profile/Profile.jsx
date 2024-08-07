import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [formData, setFormData] = useState({ age: "", weight: "", height: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <>
      <h1 className='text-3xl font-bold text-center md:text-4xl lg:text-5xl mt-6'>BMI Calculator</h1>
      <header className='text-2xl font-bold mt-4 mb-3 text-center md:text-3xl'>Profile</header>
      <div className='flex justify-center px-4'>
        <div className='w-full max-w-2xl bg-lime-200 rounded-lg py-4'>
          <div className='pb-3 flex flex-wrap justify-around'>
            <div className='text-center mb-4 md:mb-0'>
              <p className='text-2xl md:text-3xl'>Male</p>
              <img className='w-32 h-32 md:w-40 md:h-44 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IN5Z03jrXsLo7c-9J968P-tX7hejncv5jkeSohj8PCUQgeoY81bupFyaAgv8q4a4S7o&usqp=CAU" alt="Male" />
            </div>
            <div className='text-center'>
              <p className='text-2xl md:text-3xl'>Female</p>
              <img className='w-32 h-32 md:w-40 md:h-44 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9w12OlUbM1WcY21-9CoDd3BbFEbqDqKYqw&s" alt="Female" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className='text-xl md:text-2xl mt-5 mx-4 md:mx-10'>
            <div className='bg-gray-300 flex flex-col md:flex-row justify-between items-center rounded-md mx-2 md:mx-10 p-2'>
              <label htmlFor="age" className='flex-shrink-0'>Age</label>
              <input required type="number" value={formData.age} onChange={handleChange} name="age" className='w-full md:w-1/4 rounded-md bg-slate-400 p-1' />
              <label htmlFor="age" className='bg-gray-400 rounded-md px-2'>years</label>
            </div>

            <div className='bg-gray-300 flex flex-col md:flex-row justify-between items-center mt-3 rounded-md mx-2 md:mx-10 p-2'>
              <label htmlFor="weight" className='flex-shrink-0'>Weight</label>
              <input required type="number" value={formData.weight} onChange={handleChange} name="weight" className='w-full md:w-1/4 rounded-md bg-slate-400 p-1' />
              <label htmlFor="weight" className='bg-gray-400 rounded-md px-2'>Kg</label>
            </div>

            <div className='bg-gray-300 flex flex-col md:flex-row justify-between items-center mt-3 rounded-md mx-2 md:mx-10 p-2'>
              <label htmlFor="height" className='flex-shrink-0'>Height</label>
              <input required type="number" value={formData.height} onChange={handleChange} name="height" className='w-full md:w-1/4 rounded-md bg-slate-400 p-1' />
              <label htmlFor="height" className='bg-gray-400 rounded-md px-2'>cm</label>
            </div>

            <button
              type="submit"
              className="mt-6 mb-4 text-xl md:text-2xl rounded-md bg-green-600 px-6 py-2 font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Calculate BMI
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
