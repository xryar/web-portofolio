import { useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const serviceKey = import.meta.env.VITE_EMAIL_SERVICE_KEY
  const templateKey = import.meta.env.VITE_EMAIL_TEMPLATE_KEY
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      console.log("Form Submitted", formData)
      await emailjs.send(
        serviceKey,
        templateKey,
        {
          from_name: formData.name,
          to_name: "Arya",
          from_email: formData.email,
          to_email: "aryarizki3045@gmail.com",
          message: formData.message
        },
        publicKey
      )

      setIsLoading(false)
      alert("Success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      alert("Failed")
    }
  }

  return (
    <section className="relative flex items-center c-space section-spacing">
        <div className="flex flex-col items-center justify-center max-w-md 
          p-5 mx-auto border border-white/10 rounded-2xl bg-primary"
        >
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's Talk</h2>
            <p className="font-normal text-neutral-400">
              Whether you're looking to build a new website,
              improve your existing platform, or bring
              a unique project to life, I'm here to help
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="field-label">Fullname</label>
              <input 
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="field-label">Email</label>
              <input 
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="johndoe@gmail.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="field-label">Message</label>
              <textarea 
                id="message"
                name="message"
                type="text"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Share your thoughts..."
                autoComplete="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full px-1 py-3 text-lg text-center rounded-md 
              cursor-pointer bg-radial from-lavender to-royal hover-animation"
            >
              {!isLoading ? "Send" : "Sending..."}
            </button>
          </form>
        </div>
    </section>
  )
}

export default Contact