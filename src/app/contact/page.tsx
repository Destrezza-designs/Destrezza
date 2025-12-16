'use client'
import Footor from '@/components/Footor'
import Header from '@/components/product/Header'
import UtilsHeader from '@/components/utils/Header'
import React,{useState} from 'react'
import FullPageLoader from '@/components/utils/FullPageLoader'
import AOSProvider from '@/lib/AOSWrapper'

const Page = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Lazy load Firebase
      const { collection, addDoc } = await import('firebase/firestore');
      const { db } = await import('@/lib/firebase');
      
      await addDoc(collection(db, 'Destrezza'), {
        name,
        email,
        message,
      });
      
      setName('');
      setEmail('');
      setMessage('');
    } catch (error: unknown) {
      console.error('Error:', error);
      alert(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <AOSProvider>
    <div className='text-black' >
        
        <div className='hidden lg:flex  mx-[48px] mt-[48px]' >
            <Header />
        </div>
        <div className='flex lg:hidden mt-[-22px]' >
            <UtilsHeader />
        </div>

         <div className='mx-[16px] lg:mx-[48px] mt-[43px] lg:mt-[48px] ' >
            <div className='mt-[43px] lg:mt-[80px]' >
              <p className='text-[48px] lg:text-[58px] leading-[68px] lg:leading-[68px] uppercase font-[500]' >Find Us Here</p>
              <p className='text-[14px] font-light mt-[24px] w-full lg:w-[70%]' >Come visit us and experience Destrezza up close. Whether you&lsquo;re seeking inspiration, exploring our latest designs, or just dropping by — we’re here. Step into our space and see where creativity meets craftsmanship.</p>
              <div className='flex lg:flex-row flex-col gap-[22px] lg:gap-[68px] mt-[25px] lg:mt-[80px]' >
                <div>
                  <p className='text-[18px] font-[500] uppercase' >PHONE NUMBER</p>
                  <p className='text-[16px] font-[400] mt-[18px]' >+91 8129501494</p>
                  <p className='text-[16px] font-[400]' >+91 7994317246</p>
                </div>
                <div >
                  <p className='text-[18px] font-[500] uppercase' >ADDRESS</p>
                  <p className='text-[16px] font-[400] mt-[18px]'>Destrezzza art house Pvt Ltd, building no.24 <br />
                                                                        Trikkanapuram po 
                                                                        Thavanoor road Jn <br />
                                                                        Pincode 679573 <br />
                                                                        Kuttipuram, Malappuram district
                                                                        </p>
                </div>
                <div>
                  <p className='text-[18px] font-[500] uppercase' >Opening Hours</p>
                  <p className='text-[16px] font-[400] mt-[18px]' >Mon to Sat,    8AM - 8PM</p>
                </div>
              </div>
            </div>
            <div className='hidden lg:flex' >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.6968394290056!2d76.01502768814416!3d10.835373343997738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b963a70ae009%3A0xd474682df54b8a9d!2sDestrezzza%20Art%20House!5e0!3m2!1sen!2sin!4v1761415900846!5m2!1sen!2sin" 
                width="100%" 
                height="590px" 
                style={{border: '0'}} 
                loading="lazy" 
                className='mt-[80px]'
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='lg:hidden' >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.6968394290056!2d76.01502768814416!3d10.835373343997738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b963a70ae009%3A0xd474682df54b8a9d!2sDestrezzza%20Art%20House!5e0!3m2!1sen!2sin!4v1761415900846!5m2!1sen!2sin" 
                width="100%" 
                height="172px" 
                style={{border: '0'}} 
                loading="lazy" 
                className='mt-[20px]'
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex lg:flex-row flex-col flex-1 lg:h-[550px] justify-between items-center mt-[30px] lg:mt-[80px] ' >
              <div className='w-full lg:w-[50%] flex flex-col h-full justify-between  ' > 
                <div className='flex flex-col flex-1 ' >
                  <p className=' hidden lg:flex text-[14px] text-[#868684] uppercase' >CONTACT</p>
                  <p className='text-[26px] font-[500] lg:text-[36px] uppercase mt-[14px]'  >Reach out, connect, <br /> and let’s <br /> craft something beautiful.</p>
                </div>
                <div className='hidden lg:flex flex-col ' >
                  <p className='text-[16px] font-[400] uppercase' >looking for experienced assistance?</p>
                  <p className='text-[16px] font-[400] uppercase mt-[18px]' >+91 8129501494</p>
                  <p className='text-[16px] font-[400] uppercase' >+91 7994317246</p>
                  <p className='text-[16px] font-[400] uppercase mt-[24px]' >destrezzzaarthouse@gmail.com</p>
                </div>
              </div>
              <div className='w-full mt-[29px] lg:mt-[0px] lg:w-[50%]' >
                <form onSubmit={handleSubmit}  >
                  <div className='flex lg:flex-row flex-col flex-1 w-full gap-[10px] lg:gap-[14px]' >
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
              <div className='lg:hidden flex-col mt-[29px]' >
                  <p className='text-[16px] font-[400] uppercase' >looking for experienced assistance?</p>
                  <p className='text-[16px] font-[400] uppercase mt-[18px]' >+91 9765438781</p>
                  <p className='text-[16px] font-[400] uppercase' >+91 9865487981</p>
                  <p className='text-[16px] font-[400] uppercase mt-[24px]' >hello@destrezzzaarthouse.com</p>
                </div>
            </div>
        </div>
        {loading && <FullPageLoader />}
        <Footor />
    </div>
    </AOSProvider>
  )
}

export default Page
