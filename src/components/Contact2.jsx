import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ImSpinner9 } from 'react-icons/im'
import { PiPaperPlaneTiltLight } from 'react-icons/pi'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current.message.value != '' && form.current.name.value != '' && form.current.email.value != '') {

      setLoading(true)
      emailjs.sendForm('service_7zb4n0f', 'template_oc89xxg', form.current, 'UrRaQcEB7fssOyFgd')
        .then((result) => {
          setLoading(false)
          e.target.reset()
          alert('Message sent successfully!')
          console.log(result.text);
        }, (error) => {
          setLoading(false)
          alert('Failed to send message. Please try again.')
          console.log(error.text);
        });
    } else {
      alert('Please fill the form correctly!')
    }
  };

  return (
    <div id='contact' className="py-20 flex justify-center px-4">
      <div className='w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 md:p-10'>
        <div className="text-center mb-8">
          <h1 className='font-bold text-4xl bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent mb-2'>Let's Connect</h1>
          <p className="text-gray-600 dark:text-gray-400">Have a project in mind? Send me a message.</p>
        </div>

        <form onSubmit={sendEmail} ref={form} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className='flex flex-col space-y-2'>
              <label className='text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor="name">Name</label>
              <input
                name='name'
                id="name"
                placeholder="John Doe"
                className='w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all placeholder:text-gray-400'
                type="text"
                required
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor="email">Email</label>
              <input
                name='email'
                id="email"
                placeholder="john@example.com"
                className='w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all placeholder:text-gray-400'
                type="email"
                required
              />
            </div>
          </div>

          <div className='flex flex-col space-y-2'>
            <label className='text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor="message">Message</label>
            <textarea
              name='message'
              id="message"
              placeholder="Tell me about your project..."
              className='w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all placeholder:text-gray-400 resize-none'
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className='w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-lg py-3 rounded-lg shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {loading ? (
              <>
                Sending...
                <ImSpinner9 className='ml-2 animate-spin' />
              </>
            ) : (
              <>
                Send Message
                <PiPaperPlaneTiltLight className='ml-2 text-xl' />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
