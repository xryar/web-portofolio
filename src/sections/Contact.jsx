import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert"
import { Particles } from "../components/Particles"
import { mySocials } from "../constants"

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
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const showAlertMessage = (type, message) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
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
      setFormData({ name: "", email: "", message: "" })
      showAlertMessage("Success", "You message has been sent")
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      showAlertMessage("danger", "Something went wrong")
    }
  }

  return (
    <section id="contact" className="relative flex flex-col items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
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

      <div className="flex flex-col w-full max-w-md gap-4 mx-auto mt-8">
        <div className="flex items-center justify-center gap-4">
          {mySocials.map((item) => (
            <a 
              className="flex items-center justify-center w-1/2 gap-2 px-4 py-3 font-medium text-white transition-all border rounded-lg border-white/20 hover:bg-white/10 hover:scale-[1.03]" 
              key={item.name} 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
              <img src={item.icon} alt={item.name} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact