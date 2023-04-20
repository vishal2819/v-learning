import React,{useState} from 'react';
import Laptop from '../assets/laptop.jpg';

function CourseContent() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    try {
          axios("/checkout");
      setClicked(!clicked);
      window.location.href = "https://braintree-payment.vercel.app/";
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop'/>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>WEB DEVELOPMENT DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>ACE THE WORLD BY CONVEYING YOUR IDEAS THROUGH WEB APP</h1>
            <p className=''>We offer web design and development solutions with creativity, quality and support for your satisfaction and value.</p>
            <button onClick={handleClick} className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default CourseContent;