import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Resul() {
    const [normal,setNormal] = useState("")
    const [worry,setWorry] = useState("")
    const [imgSrc,setImgSrc] = useState("")
    const { state } = useLocation();
  const { formData } = state || { formData: { age: "", weight: "", height: "" } };
    
    let myweight = formData.weight
    let myheight = formData.height
    let bmi = (myweight/(myheight*myheight))*10000

    useEffect(()=>{
        
    if(bmi>=18.5 && bmi<=25){
        setImgSrc("https://cdna.artstation.com/p/assets/images/images/052/522/170/large/harsh-tikkha-illustration-arnold-bg.jpg?1660026232")
        setNormal("Normal")
        setWorry("No worry..")
    }else if(bmi<18){
        setImgSrc("data:image/jpeg;base64,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")
        setNormal("Over")
        setWorry("Oh no...")
    }else{
        
    }

        [bmi]})

    return (
      <div className='flex justify-center'>
       
        <div className='flex w-1/2'>
        <div className='flex justify-center items-center bg-orange-300 px-30 my-5 py-5 '>
            <div >
                <div >
                    <p>{worry}</p>
                    <p>Your weight is <b>{normal}</b></p>
                    <img className='w-72 h-56 ml-36' src={imgSrc} alt="" />

                </div>

            <div>
                <p>Your Body Mass Index(BMI) is:<br/>
                {bmi.toFixed(2)}
                </p>
                <hr/>
                <p>According to the World Health Organization (WHO) you belong to the categary: <br/>
                <b>{normal} weight</b>
                </p>
            </div>
            <div> <Link to="/">Back to form</Link></div>
            </div>       
        </div>
        </div>
      </div>
    )
}

export default Resul
