import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  // 3 distinct states as requested
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (loading) return;

    // Reset success/error and set loading
    setSuccess(false);
    setError(false);
    setLoading(true);

    emailjs.sendForm(
      'service_khos3us', 
      'template_esvt19l', 
      form.current, 
      'qkGJZBWb8vKMqt2v7'
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      form.current.reset();
      
      // Auto-hide success after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    })
    .catch(() => {
      setLoading(false);
      setError(true);
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative border-b-4 border-brand pb-2">
            Get In Touch
          </h2>
          <p className="text-slate-500 mt-6 max-w-lg mx-auto mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12 w-full max-w-3xl">
            <a href="mailto:premchandrakamasani@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-brand transition-colors">
              <span className="p-3 bg-slate-200 text-brand rounded-full shadow-sm">
                <FaEnvelope size={18} />
              </span>
              <span className="font-medium text-sm sm:text-base">premchandrakamasani@gmail.com</span>
            </a>
            <a href="tel:+917981777672" className="flex items-center gap-3 text-slate-600 hover:text-brand transition-colors">
              <span className="p-3 bg-slate-200 text-brand rounded-full shadow-sm">
                <FaPhoneAlt size={18} />
              </span>
              <span className="font-medium text-sm sm:text-base">+91 7981777672</span>
            </a>
            <a href="https://www.linkedin.com/in/premchandra-reddy-k" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-brand transition-colors">
              <span className="p-3 bg-slate-200 text-brand rounded-full shadow-sm">
                <FaLinkedin size={18} />
              </span>
              <span className="font-medium text-sm sm:text-base">LinkedIn Profile</span>
            </a>
          </div>
        </div>

        <motion.div 
          className="w-full max-w-[500px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md border border-slate-100"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="user_name" className="text-sm font-medium text-slate-700">Name</label>
              <input 
                type="text" 
                name="user_name" 
                id="user_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-slate-50"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="user_email" className="text-sm font-medium text-slate-700">Email</label>
              <input 
                type="email" 
                name="user_email" 
                id="user_email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-slate-50"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
              <textarea 
                name="message" 
                id="message"
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all bg-slate-50 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`mt-2 w-full py-3.5 rounded-lg font-medium transition-all shadow-md group relative overflow-hidden ${
                loading ? 'bg-slate-400 cursor-not-allowed text-white' : 'bg-brand hover:bg-brand-dark hover:shadow-lg hover:-translate-y-0.5 text-white'
              }`}
            >
              <span className="relative z-10">{loading ? 'Sending...' : 'Send Message'}</span>
            </button>

            {success && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-sm font-medium text-center"
              >
                ✅ Message sent successfully!
              </motion.div>
            )}

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm font-medium text-center"
              >
                ❌ Failed to send message. Try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
