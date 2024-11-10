import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl">Get in Touch</h2>
          <p className="text-gray-600 text-[18px] pt-2">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="flex gap-3 items-center">
            <AiOutlineMail size={30} /> asiyaghazal11@gmail.com
          </div>
          <div className="flex gap-3 items-center">
            <FaPhone size={30} /> 03239180965
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-accent px-2"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="h-[40px] bg-transparent border border-accent px-2"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              className="h-[150px] bg-transparent border border-accent px-2 py-2"
              id="msg"
              rows={4} // Properly set the rows attribute
            ></textarea>
          </div>
          <button className="bg-accent py-2 px-6">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
