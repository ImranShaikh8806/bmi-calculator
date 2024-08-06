import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const [formData,setFormData] = useState({age:"",weight:"",height:""})
  const navigate = useNavigate()

  const handlechange=(e)=>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
    
  }

  const handlesubmit = (e)=>{
    e.preventDefault()
    navigate("/result", {state:{formData}})
  }

    return (
        <>
        <h1 className='text-3xl font-bold '>BMI calculator</h1>
        <header className='text-2xl font-bold mt-4 mb-3'>Profile</header>
      <div className='flex justify-center'>
      <div className='w-1/2 h-auto bg-lime-200 rounded-md py-4'>

      
      
    <div className='pb-3 flex justify-around'>
      <div>
        <p className='text-2xl' >Male</p>
        <img className='w-40 h-44'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IN5Z03jrXsLo7c-9J968P-tX7hejncv5jkeSohj8PCUQgeoY81bupFyaAgv8q4a4S7o&usqp=CAU" alt="" />
        </div>
      <div>
        <p className='text-2xl' >Female</p>
        <img className='w-40 h-44' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9w12OlUbM1WcY21-9CoDd3BbFEbqDqKYqw&s" alt="" />
        </div>
          </div>

      <form onSubmit={handlesubmit} className=' text-2xl mt-5 mx-2'>

      <div className='bg-gray-300 flex justify-around rounded-md mx-10'>
          <label htmlFor="age">Age</label>
          <input type="number" value={formData.age} onChange={handlechange} name="age" className='w-16 rounded-md bg-slate-400' />
          <label htmlFor="weight" className='bg-gray-400 rounded-md px-2'>years</label>

        </div>

        <div className='bg-gray-300 flex justify-around mt-3 rounded-md mx-10' >
          <label htmlFor="weight">Weight</label>
          <input type="number" value={formData.weight} onChange={handlechange} name="weight" className='w-16 rounded-md bg-slate-400' />
          <label htmlFor="weight" className='bg-gray-400 rounded-md px-2'>Kg</label>
        </div>

        <div className='bg-gray-300 flex justify-around mt-3 rounded-md mx-10'>
          <label htmlFor="height">Height</label>
          <input type="number" value={formData.height} onChange={handlechange} name="height" className='w-16 rounded-md bg-slate-400' />
          <label htmlFor="height" className='bg-gray-400 rounded-md px-2'>cm</label>
        </div>

        <button
        type="submit"
        className=" mt-9 mb-4 text-2xl rounded-md bg-green-600 px-8 py-2 font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Calculate BMI
      </button>
      
      </form>
    </div>
          </div>
        </>
    )
}

export default Profile
