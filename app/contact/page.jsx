"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useState } from 'react';
import emailjs from 'emailjs-com'; 

export const runtime = "edge";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+447354981942'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'maximosigniorini97@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Based in',
    description: 'Bournemouth, United Kingdom'
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs.send('service_mf3xwwr', 'template_kmszpdi', {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    }, 'ea3Wi3N3azCmONNNZ')
    .then((response) => {
      setSuccessMessage('Your message has been sent successfully!');
    }, (err) => {
      console.log('FAILED...', err);
      setSuccessMessage('Failed to send your message. Please try again.');
    });

    // Reset form
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent ">Let's work together</h3>
              <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam labore placeat quidem saepe!</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  name="firstname" 
                  type="text" 
                  placeholder="First name" 
                  value={formData.firstname} 
                  onChange={handleChange} 
                />
                <Input 
                  name="lastname" 
                  type="text" 
                  placeholder="Last name" 
                  value={formData.lastname} 
                  onChange={handleChange} 
                />
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="Email address" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                <Input 
                  name="phone" 
                  type="text" 
                  placeholder="Phone number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
              {/* text form */}
              <Textarea 
                className="h-[200px]" 
                placeholder="Type your message here." 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
              />
              {/* button */}
              <Button size="md" className="max-w-40">Send message</Button>
              {/* Success message */}
              {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>} 
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;
