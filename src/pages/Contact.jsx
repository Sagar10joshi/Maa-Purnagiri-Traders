"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import HardwarePopupModal from "./Orderpopup.jsx"

export default function Contact() {

  const [showModal, setShowModal] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    // email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Thanks for contacting us.')

    setFormData({
      name: "",
      // email: "",
      phone: "",
      message: ""
    });

  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["Teenpani bypass opposite to Tata Motors near City Hospital,Haldwani"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["9410333186", "9897264344"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["maapurnagiritraders1974@gmail.com"],
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: ["Mon-Sun: 8AM-8PM","Sat: 8AM-1PM",]
    },
  ]


  return (
    <div className="w-2xl min-h-screen bg-blue-50 py-20 overflow-x-hidden max-w-[110%]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16 " initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about our products We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg ml-[5%] shadow-lg p-6 max-w-[94%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us your Order</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Enter your full name"
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone No.</label>
                <Input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Enter your phone no."
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <label className="block text-sm font-medium text-slate-700 mb-2">Write your message here</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full"
                  placeholder="Write your message here..."
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6 p-6 max-w-[95%] sm:max-w-[600px] md:max-w-[800px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <motion.div
                  className="bg-orange-100 p-3 rounded-lg"
                  // whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <info.icon className="w-6 h-6 text-orange-600" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => {
                    let href = null

                    if (info.title.toLowerCase().includes("call")) {
                      href = `tel:${detail}`
                    } else if (info.title.toLowerCase().includes("email")) {
                      href = `mailto:${detail}`
                    }

                    return (
                      <p key={idx} className="text-slate-600">
                        {href ? (
                          <a href={href} className="text-orange-600 break-all hover:underline break-all">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    )
                  })}

                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm md:max-w-xl "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Find Us</h3>
              <div className="bg-slate-200 rounded-lg h-48 flex items-center justify-center">


                <iframe
                  title="Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.0273953400382!2d79.51990529621051!3d29.177702023754406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a085d89f144d11%3A0xd2f8a4d2259be9a9!2sMaa%20Purnagiri%20Traders!5e1!3m2!1sen!2sin!4v1755317367289!5m2!1sen!2sin"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Popup Modal */}
            {/* {showModal && <HardwarePopupModal onClose={() => setShowModal(false)} />} */}
    </div>
  )
}
