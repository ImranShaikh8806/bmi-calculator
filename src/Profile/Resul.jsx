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
        setImgSrc("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEBIVFRARFRUPEBAQFQ8QEBAPFRUWFhUSFRUYHiggGBolGxYVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mHyUtLS0tLS0tLS0rLS0rKy0tLS0tLS0tLS0tLS0tNS0vLS0tLS0tLS0tLS0tLS0tLS4tLf/AABEIAL0BCwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAACAgEDAQYEAgcFBwUBAAABAgADEQQSITEFBhNBUWEiMnGBB5EUI0JSgqGxFTNywfAkc5KistHhJTRDVGIW/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EACwRAAICAQMCBQMEAwAAAAAAAAABAhEDBCExEkETFFFhcTOxwQUjMpEiofD/2gAMAwEAAhEDEQA/APcYQhAAjDHxCJKKyRV1Xl/WV5NqGycekiJjFwZJ8lHUU8yuVmi4zIravSMTM8oehSxJFcj3jlq9Y8LJsokx1XPlFNjZiKcRTaB5SBg61uOZW8f2jbrS0jkpFJS32LlWp4x0kgYTB7a7Vr0tLX2n4V6KMbnY9FXPUzib/wAUCPir0uV6EvdsO7zGAhlJSjHljccMk1cVZ6hqGGJFp7QODMLux3gr11PjVgqQxrsrYgtW45xkdQQQQfQzZSonoJZU0Ll1KXG5ZOGilx0MhWkj2jXSFBb9CYSTiUgxEs1WfnBomMrLlb5EYw5kQtxHb8ytDLQj2ACVLl84t/J4jqqSw56Sy2FN9ToWmjeQoIz15m/WMAAnJAAJ9T6zK01IUg+k1VbMVkdmzTRST9R0IQizUEIQgAQhCABCEIAEQmLGtBEMo6m0bsYORxnoP/MiMn1WCff/AF1kKiOXBinyCiBjsQMkqRlY1lkhkTtJKsicyobSwyoGCMgsWGR9ApxItcxIK+WN1ntX0P3PQff0mUr2XWWoLAh8KsFSu7aLBbgjkcgbfPrn2mTPmn1rHi5NenwY3jeXN/H/ALc1a7MkqRhgASMggg55B+x9JJM3s7Q2JY9ljqwYAKFDDB43E5+gx9TNKasTm4Lr5MOdY1kfhv8AxOG7boXUdqeBfW9tVekL10K3hlrC4y6MSADgnn/8efSLre6OneusNpK0tHzhrbDYtefh3Ou3OdwySMDjAMt9uXGrtLSXWhVqK26ZH3KR41gJQPnlQcAZA6kc+Usaqu9bDbtIZc/rjgU1o2N9gzZ+6Aeg6HicvVWsr39zu6GnhRzP4X2pp9fq9I1iCthvqGWIdkfAFfHxfC/sTgYHXHsSqJ5j+G/Ybtqn7SIqbTujJpmDbrUbd8WU24BOWOScgYHQ8enib8N9CswalR8V9IMglDUDBmjKmopyY1My5FtsUZLWkU04kiKZdsQo7j0ElAiJXJwsox6RXCcycDEdsiEQZZKh9deZZQY4kFCecsRbHwRIIRBFlDQEIQgAQhCABCEIAEZamQRnGRjI8o+IxxzAh8GSumYfN/XrJREvuDHjp/WKI8wbJ7Cxtgi5gYAxiw8HPWSKI8QBL1MQOBZqFx0NSr5naED/APUx/nOa7tYOouLkivPhIRgBkrdwFVvPAK/kPedV29U6K19VfiMFAeoZ3uqknKY6sNx+Hz8vQ8JR3gou3i4ZpZi5TduYWAAfMgBQDHABz1yfKcfP1wyuX9M7umUMmHp/tHVvdtLfuDGN7BcZxj4j1Gc/5Zk5rfyZQf8ACSP+oZ/lPMO8Ha2hRGrpFr2sCKt9tj7LSMKygnOQcEH2nYdy+2LHpqTWN+stDeDfgAWMp+Kp8cbx5EfMAT5GR5jMopKQS0WDqbcTWvsJBR0YAjBZFa0MDn5cDj33Dj36zl+2uyNRexpS/bpsBCjV7bPC4JQnbv2lhjryMD1ncTNa+7cB4Y3fHtBdVVk4wzYyQRxnAPX8lT1E8juTGYdPjwpqC5KPY/ZbaYE1C4Z64alQ2OmK2yv58zotJ2g3IsQ4H7a7PyKhjz9PyHnDpxYR8arkdShZh/MDEhv1KI6AkbrT4YGRkkAkHH2x94Y9Rkx8MMunx5d2t/Xuamm19Vu4VWKzJw6g4dCem5Tyv3ElnJd5mFLU6xSFtqsVS3Tfp2P62tvVdvPPQgHqJ2YHp09fWdbTZ/Fjfc5Gq0/gyW+zKuecR5Em2DMCJoMlAkfmQoD9pNAGxRHYiARwkMvEKl5lkLIVk6xcjRjQsIQlRwQhCABCEIAEIQgASh2mG4x8vmB6+8vyO04BIGfaTF0xeRXGjKWsxU3DgyVrPXrHJzHGKkNVDH7JKBExIsZ00RiOgwiAySo4mY3afdfRahi9+lqew9bNu2w/V1wT+c2ISKTJTaexz+n7j9moDt0dOWBBZlLuARg7WYkqfcYmVd2cK0fR2lmCGtqbeFs8JmVVtBAwHQ7s+XHQBsTtczP7Z7PW5CDw4DeG+WBViOhxyVOBlehA+kz58CyRpcrg14NS8crb2OX/ALeFD/o+sO1+ld+MV3j94fut6g+frI17WR3Lm0eFp1IeyrqWcqFU9cE4PA9unSaGobxVwKq3Ygq1WoO0I6n4l4RuefTng9IzQ1srbbqKEUK3h6egeIrDKbrGDAbjnaPlGPfPHGpLk7V2rRjdo9+tislXwqepbBJ+05PsLto6vtKgMSa0L2DnG51RsfYZJ+07d+62jsfcdEiZJwWCHnBPFakqB+RzjiZXaulq07134CjTbSVr+J38W00FcL1fYLeFHXPoJdNcA6+DqbAnjqWO4WVsVDYKqQ1anbnpu8RR9vcy13IsP6KEY58C27TL/u6rWVB9lCj7SH9HFhRzztX4WBBDZatwwx5E1iTdy026XkgsbtSbCPKz9IsDD6jGJp0H838GH9Q+mvn8M3TEhuhmdY49hHCJiAklB4jowGKG8pVjIj1aWVkSLJouTNONBCEJUaEIQgAQhCABCEIAEa4yMR0DAhmO64Yj0k1RjdZapb4efIkdDEpj+xg2UqRbEDFEDKDxpkLSUxplkLluNEXMIYgQITIrX8o8yK6SVfBzXbWl8SyzhNvhoLCwO7BL5dWB4ZQq4+3TETQ9iV0ZWtrRZYP75j4rqF/Zy4Kgc9Mc/aZXane3S16i/TW3BHwtZ3V2FN5XJPiDjADLwcdDz5TRPe/s/wD+5R9PEUn8pxdVGTyukd3RySwxTZY0ug2WkvbZaWrIHilSuNw3YRQFX9noOc+0yNJ2INX2r4mwDSdmrWhAAC2arAtrQD0QWBj6fD6yv2n+IegrJNbta4XA8Ot2UZPq20Hy/aHTrOv7ialLdFVfWc+NvusJ+bxmdvEU/wCFsr9FGOJfSYW59UkRq8yjCovkZrrwhezgVqzbsDGAvDN/xAk/WZ/4c2tZVqrGz+s1ljBT0UGqk4X2yTLXaiD9cjHCCzcPddi3EH23Fvt9Y78P9Ka9BUW+a7fqTng4tcugPuEKD7Runi/Hm/n7idQ15aK+PsbXSKDGuYIZ0jkE8QxwiMIE0MJi1ZLDHl/SNIk9FHRv5SGWim2W1joiiLEm1cBCEIEhCEIAEIQgAQhCABAwhADI1Wk2cj5c8eojtPLmvQlePXn3Ep1iOTtGKcFGWxaWOMhzG7zCiVKh7tEzIyscIFbHZgTI2bEeJJFjZHc4VSzdFBY/QDJljbM/t47aTj9tkrx6q7qrD/hLSspdKbLRi5NI8q70dwLLXfVadx4l3641WEYa1zl0V/2eSNucg9Mrxnza9ShZXBVlJVlbgqynBBHqCJ73obA1BfPIp0gQersAy4/icTle9ncem3W03liBqLyt9OMrbsra3cG/ZBWvaR5+xPPLx52nUztSwpr/AAMPuV3CbVIup1TNXQ+DUiYFty9Q5J+VCOnGSOeOM+i9z7K9C2p0KgrTSF1dAdixKWfC6BmPPxgHnztx5S8+oUPUcfq67hS4HAAdCi4/iZR+c57t6oJ2nQhwUuWzT5PxDwrAbdjA9R4lHT0sA8oYc05Tu/avsRmxQWNp/N/f/Rr96LQ6KuP/AHd1NDCo/F4dpWpmU/4Oc8TrXAAAHAHAA4AA6ATmaezXe+u61k26fc1VdasoNrAoHYk+SFgB6tn0nQDM26bFOCbny2c7VZ4TqOPhIUxUHMbFq6zSYyxCGIuIFhMSag+Uiktcqy8NmWIRBFijYEIQgAQhCABCEIAEIQgAQhCAEWpGVMoK00nIxz085js3Jx0zx9IyBlz7Oy0DG+cjV5IsuJ5FjWMkiEQJojQ5MsqJVBwZYUyGTEfMjvCxzpwOhvO76Ci4j/mCzXzM3tqkMas9PEYenWm3/PETn+nL4NOCvEj8mLoaqsBFP918JTj4PCYhQ3sNwx64Uyl2vd/tmkRhxm1wfU+DYCPyk1NB8bVsgx4lVdDMOCLNrMW+u1k/4RMLtfWm0aHUgDewOcnAVmXFo+y+JOKlbVHbuuTfroytYbjx69rHzFy/rVI9+bD/AAiZ3fLTqq16r/5a9TpGJ8lpS34lA9/Esyfcek0O39Q1dDMODQy6gADJZKzkqvplNy/c+so9/wAg9nah16+FvVvoQykSYSqUWiJx6otM7CunHEtIkcEj8TvtnnIwor2rGUdZNbGKuJJDW5NCJCQTY4SRZDJ6ZDLw3ZMIsIRRrCEIQAIQhAAhCEACEIQAIQhACh2rYMBc85zj1EopLKdmncSxyuc5/ab6xNZVtbgYUjjH846LS2RhyRk31NUNQSwJCgkwklULGmBMjd5BZsY4kqNK5aOqJlhd7lsGQdoVFqyF+YYdR6spztz5ZwR95KpiPYQOBzKSipKh0Z9NMwNNYAmoJ6NYtq44JTwEGefcHrOD7qj9Lt0en6JWus1D/wC7cWIv0wbk/KdG2ie1bqhfZW7am+u3btfajM9yY3A7DsZD/H06S33X0VFGqausgf7NXVSDyzeC9hu58z8dGf8AxOThX7yi+34s7WWf7Dku6+9E5IsqzZjdtZbFYnaLACli/Y7hOX7Ru8bsXaDksg0pI67ls8E/fKzru8VZpWy1VLLaMGtQSwuIwGUDkggDIHmM45M4fQ6K2nTUixf9mv1en1LEsA9Rs1C4QoeoYmo+o3PmUeFwydPuqLwzqeLr9meumGZFVaGGY/M7NHCsQiECYkkix0SEQmBFodWfixj6+0uKJn7sEH0l6qwEZEpMdha4HwhCUNAQhCABCEIAEIQgAQhCABCEIAEy7FYsS30A8gPaabSrcOZeAnMrREqQK+kfEMuIorOxEiYyxbIWlkKkRiW6lkVGnbOcHEs4kNkxi+WLExFhAszD1C41FgAxurqcn1bdapJ9ThUH5TG7VrVaTqKwQ2hd9TXt5ZjWG8RST13gupJ/eM3u2F2202eTeJQf8TAWKT9PDcfxTm+8ZevS6mtThr28Oj0Zryq7T77i35icbUpxz7e1Hc0rUsCT90zoO39Wp07sp5QC+sj99CHT6gkAEeYJmJ292duTwUyRWr215Pw1W14egnHUK6rge3oDNDtjTr+jpT+wbNPS3ugsTg/XaB/FB/mu9BWq/cBzj8mEbr3U1XNCP05dWN3xZf7C1630V6hOFtQPtPVSfmQ+4OR9pp5nH/hkpGhH7vjX7Pp4hzj+LfOuUzpQl1RTOZkh0TcV2Y9BJBESPxJBIaREjiI0wIaG7cyxSMDEiqPMsKJWQzGu5LCEIs1BCEIAEIQgAQhCABCEIAEIQgAjSvYOPpLMjdZZMpONlUGBmJ2h3q0lH95aOu3CgnJnIdufivWikaaos3O17CAnpux1xL2ZuT0W4gDJIAHUkgAfecP3g79U0kjTMttq8H9xT/nPJO2O9Wq1TlrdRYVJyK0+GlT9D9ZU3WOcEjZn9kDJUSHInpS3Z19v4g64b7XvIx8QUZ2D2AHvNrsD8ZS3w6mpCMYFg+BiwHUjJ4PtPKdVWXBrD4TOB7yO50FQqNA3A4W3Jz/5lBi+T2/s38V6nYrdpzWpGUfcTnnA4xNFfxS7N6FrNw4IRdw/rPDhS4CEMoO31JOD/ISk5B4CYK9WGcmTbK7HvXa/fzQWI9dduXVfGrLAKpsr/WKuc55KhfvJu2LEN2mV/lW9bck4GfA1LJ+TIp/KfPq6YngIxYnAyfIieufiTV/6fSWJV/1SnO5TuFZyD6EEkY9zMmo+rB+5s0/0skV6fhnc6qk21N4e1mOHrIZSviowZM46DeFlU62t9PZqEPwOj2EsMEFVKnI8sbf5T570uuuoZTp3cYO47S2Mz1untDxexbbXXb4vjeIqc/317byPc7yfvI1yUul97oP099Dce3J2XdTT+Do6K2AVxWGsHpY/xv8A8zNIu8vbtdFLnfhyNq7OWDNwCOD06/aedan8TSpLFMLt5TJxk/LtIGRwQSTn0E4LtfvXfqn32WE43ADAK1gn9gY4AA69T5zRPKumoHPUJylcj0Hs38Ur6d6Wmuw79odiR4QAxsOB8RyOvrmUO2PxO1lq4qtNQJPKoqsV8xySR9fr0nnWpYrkkgqfl4Ckn1A8unnKi2knPRfTrk9cZHnM9Sk7t/2PUT1fsv8AFrUUKK7AmoCDmwttsd2A/PBz/wB53Hcr8RdPryam/V6gAtsI2qwH7pJ5Inz3pyWIB+UHcdp4IHTHnxgy5pxlluB/W71BPOeow4HuM/SRGUoO7f4IcNj6ids+eM+Z6TXqB2jJycDJ9T6zluzr2emt3G1mrRmU4JBKjI4m12Zrc4rI5Hyn1x5ToSVxTQjBNKVM0oQhFG4IQhAAhCEACEIQAIQhAAhCEACEIQA8779dxDcGs05VFVWdlwS5PUhOPPGJ4zfpgu6t25U/KpBLDHCg44n1PbWGUqwyrAqwPQg9ROA7192tNpgLqalVnfaWC5x8JONxOfp9JGTJ0Rcn2FrD1TSj3PCdXo2fG3T2qoAGWDEFvyk/9iawoAlRKk9BlSPrunpO459Ymc+cwPXS7RNq0K7s4Md19VgYCZ5yCRkc8nmWR3VucqthrCgZ4Z2Ofc46ztiT5RPcn/KL87k9i/ksfuc5V3YIq8I2+YOUAzx7nmP/AP5KlgEa+yoYLGxVNpJGPhwozk5P5ToRiGIvzeX1GLSYl2E7v6bQ6I7qtPqLrevj3eCWH+HcwC9fIZje+faz6vTtTVpLPE3IVex9KEADAsRhyc4GOR5xWHuYIMf6xKeK3Lqe7GeGkulbI46ru7e4bftXgFEfayMw9SpyvT36z0Xuz2WlvZv6DbgEKa7RWT8BJLK6k846EH2I8iJln6yWjUumdpxuG1s4OR5dfMHkGWlmlPkpjwQxu0eVd4u7l+luai8ZO39VZn4LUBxuRj556qeR/OZVGiKvncMgFtuRuLDGAR9fXrgz2ZrCxyTk9B6AegA4HQflIrtOjfOit/iVW/rHLVPijO9J6M8bOlzkufhHy4Kjz9PMcnpDR6bBDFsA8/LkMoOMY8+h/Ketf2Tps5Onqz1z4adfykf9h6TO7wEz9wB9B5dZbzW1UV8pPs0cZR2SPiVVCmso5wSVI65IJ+EEK3OcZEnv0+3luB8YVei1gD4SB6cEn6H0nZ1dm0LkqnzfNy53Z6555j/7HqsYfqstwFC5znnGAOvU+vUxHjW9y3lZVyeg9z1rtopAyFNa7B0yAPfkTp6dEiHKrz6kkmQ9k6JK669tewqijaxLMvwjgnzPlmXp2erZIwY8KjylYQhCQOCEIQAIQhAAhCEACEIQAIQhAAhCEACcz381O2kV7MixvnIyq7ecA54b09gZ00wu+qZ0rHPRkPnz8QGP5/yic9+HKvQZh/mjzIrzDaJMRGmr3nGs6dDRYI7dGMMdI1/WTRFj9w9Y3MVa4WV46GGwCKATz/2j3Gen+X+crOx9Y2tzuAyZbpfJHUWSDG7ZI1fnmRPjoRke/IlUWZIOP9Zhuz1/7Rg9P6QK+8KIsc1kFP0/pIiI9KpNIix/A9IK/mDg/kYyysRgWRSJs6fur2rqfHRAz2I5AdWJcBc8vk/LjOZ6PPI+x7WS1GRirBlGR6EgEEeY9p65OjopXFoxamNNMIQhNpmCEIQAIQhAAhCEAP/Z")
        setNormal("Normal")
        setWorry("No worry..")
    }else if(bmi<18){
        setImgSrc("data:image/jpeg;base64,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")
        setNormal("Under")
        setWorry("Oh no...")
    }else{
        setImgSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnzKYeTjyWrWXnHQ91L01AWUzATT-t1Og7I_2TmxQAe1Q26a59WUW5Y2WoL0WpmFzLs0&usqp=CAU")
        setNormal("Over")
        setWorry("Oh no...")
    }

        [bmi]})

      

    return (
      <div className='flex justify-center text-2xl'>
       
        <div className='flex w-1/2'>
        <div className='flex justify-center items-center bg-lime-200 px-30 my-5 py-5 rounded-lg'>
            <div >
                <div >
                    <p>{worry}</p>
                    <p>Your weight is <b>{normal}</b></p>
                <div className=''>
                <img className='w-72 h-56 ml-36 ' src={imgSrc} alt="" />

                </div>
                </div>

            <div>
                <p>Your Body Mass Index(BMI) is:<br/>
               <p className='font-bold border-b-2 border-zinc-500'> {bmi.toFixed(2)}</p>
                </p>
                <hr/>
                <p className='mb-2'>According to the World Health Organization (WHO) you belong to the categary: <br/>
                <b>{normal} weight</b>
                </p>
            </div>
            <div> <Link to="/"><span className='cursor-pointer mt-9 mb-4 text-2xl rounded-md bg-green-600 px-8 py-2 font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 duration-500 '>Back to Profile</span></Link></div>
            </div>       
        </div>
        </div>
      </div>
    )
}

export default Resul
