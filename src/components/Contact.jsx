import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading,setLoading] = useState(false);
  
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm({...form, [key]:value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.init('ul5kzKTsu_AqiBR0q');
    emailjs.send('service_47l3h1l', 'template_ne2q1jj', form).then((val)=>{
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: ""
      });
      alert("Email sent successfully");
    });
  }
  
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-[#ff780a] p-8 rounded-2xl'
      >
        <p className={`text-white ${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}  
              placeholder="What's your name?"
              className='bg-[#ff3a04] py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => handleChange(e)}  
              placeholder="What's your email?"
              className='bg-[#ff3a04] py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={(e) => handleChange(e)}  
              placeholder="What do you want to say?"
              className='bg-[#ff3a04] py-4 px-6 placeholder:text-white-100 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#ff3f0f] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#ff740a] transition-all'
          >
            { loading ? "Sending..." : "Send" }
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");