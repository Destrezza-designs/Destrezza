'use client'
import Footor from '@/components/Footor'
import Header from '@/components/product/Header'
import React,{useState} from 'react'
import { collection, addDoc } from 'firebase/firestore';
import {db } from '@/lib/firebase'
import FullPageLoader from '@/components/utils/FullPageLoader';

const Page = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    console.log("Form submission started");
    try {
      await addDoc(collection(db, 'Destrezza'), {
        name,
        email,
        message,
      });
      console.log("✅ Document successfully written!");
      // Clear form after successful submission
      setName('');
      setEmail('');
      setMessage('');
} catch (error: unknown) {
      console.error("❌ Error writing document: ", error);
      alert(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className='text-black' >
        {loading && <FullPageLoader />}
         <div className='mx-[48px] mt-[48px] ' >
            <Header />
            <div className='mt-[80px]' >
              <p className='text-[58px] leading-[68px] uppercase' >Find Us Here</p>
              <p className='text-[18px] font-[400] mt-[24px] w-[70%]' >Come visit us and experience Destrezza up close. Whether you&lsquo;re seeking inspiration, exploring our latest designs, or just dropping by — we’re here. Step into our space and see where creativity meets craftsmanship.</p>
              <div className='flex gap-[68px] mt-[80px]' >
                <div>
                  <p className='text-[18px] uppercase' >PHONE NUMBER</p>
                  <p className='text-[16px] font-[400]' >+91 9765438781</p>
                  <p className='text-[16px] font-[400]' >+91 9865487981</p>
                </div>
                <div>
                  <p className='text-[18px] uppercase' >ADDRESS</p>
                  <p className='text-[16px] font-[400]' >1234 Elmwood Avenue, 690548</p>
                  <p className='text-[16px] font-[400]' >Trissur, Kerala, India</p>
                </div>
                <div>
                  <p className='text-[18px] uppercase' >Opening Hours</p>
                  <p className='text-[16px] font-[400]' >Mon to Sat,    8AM - 8PM</p>
                </div>
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6820692138604!2d76.01528821108347!3d10.835624489272211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bb0e2ffdccad%3A0x929f67da161bd1b2!2sDESTREZZZA%20ART%20HOUSE!5e0!3m2!1sen!2sin!4v1756286932084!5m2!1sen!2sin" 
              width="100%" 
              height="590px" 
              style={{border: '0'}} 
              loading="lazy" 
              className='mt-[80px]'
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className='flex flex-1 h-[550px] justify-between items-center mt-[80px] ' >
              <div className='w-[50%] flex flex-col h-full justify-between  ' > 
                <div className='flex flex-col flex-1 ' >
                  <p className='text-[14px] text-[#868684] uppercase' >CONTACT</p>
                  <p className='text-[36px] uppercase mt-[14px]'  >Reach out, connect, <br /> and let’s <br /> craft something beautiful.</p>
                </div>
                <div className='flex flex-col ' >
                  <p className='text-[16px] font-[400] uppercase' >looking for experienced assistance?</p>
                  <p className='text-[16px] font-[400] uppercase mt-[18px]' >+91 9765438781</p>
                  <p className='text-[16px] font-[400] uppercase' >+91 9865487981</p>
                  <p className='text-[16px] font-[400] uppercase mt-[24px]' >hello@destrezzzaarthouse.com</p>
                </div>
              </div>
              <div className='w-[50%]' >
                <form onSubmit={handleSubmit}  >
                  <div className='flex flex-1 w-full gap-[14px]' >
                    <input 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='premadeBorder rounded-[8px] px-[34px] py-[17px] flex flex-1 w-full outline-none focus:outline-none' 
                      placeholder='Full name' 
                      type="text" 
                      required
                    />
                    <input 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='premadeBorder rounded-[8px] px-[34px] py-[17px] flex flex-1 w-full outline-none focus:outline-none' 
                      placeholder='Email address' 
                      type="email" 
                      required
                    />
                  </div>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='premadeBorder rounded-[8px] px-[34px] py-[17px] flex flex-1 w-full mt-[14px] outline-none focus:outline-none' 
                    placeholder='How can we help you?' 
                    rows={15}
                    required
                  ></textarea>
                  <button 
                    type="submit"
                    className='uppercase text-[16px] font-[600] bg-black text-white w-full mt-[14px] rounded-[8px] py-[17px]' 
                    disabled={loading}
                  >
                    {loading ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              </div>
            </div>
        </div>

        <Footor />
    </div>
  )
}

export default Page
