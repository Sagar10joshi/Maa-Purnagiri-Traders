"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
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
      details: ["Teenpani bypass opposite of Tata Motors near City Hospital,Haldwani"],
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
      details: ["Mon-Fri: 8AM-8PM", "Sat-Sun: 9AM-6PM"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about our products or need expert advice? We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>

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
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full"
                  placeholder="Tell us how we can help you..."
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
            className="space-y-6"
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
                  whileHover={{ rotate: 360 }}
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
                          <a href={href} className="text-orange-600 hover:underline">
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
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Find Us</h3>
              <div className="bg-slate-200 rounded-lg h-48 flex items-center justify-center">
                <motion.div
                  className="text-slate-500 text-center"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Hardware Street</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
