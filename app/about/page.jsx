"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Heart } from "lucide-react"
import Image from "next/image"


export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const stats = [
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Clock, label: "Products Sold", value: "50,000+" },
    { icon: Heart, label: "Customer Satisfaction", value: "98%" },
  ]

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" variants={itemVariants}>
            Maa Purnagiri Traders
          </motion.h1>
          <motion.p className="text-xl text-slate-600 max-w-3xl mx-auto" variants={itemVariants}>
            Building communities, one tool at a time. Our story began in 1998 with a simple mission: to provide quality
            hardware solutions to professionals and DIY enthusiasts alike.
          </motion.p>
        </motion.div>

        {/* Owner Story Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img
                src="/ownerImage.jpg?height=400&width=400"
                alt="Store Owner"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.blockquote
              className="text-2xl text-slate-700 italic mb-6 relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                className="text-6xl text-orange-500 absolute -top-4 -left-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                // transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                "
              </motion.span>
              What started as a small family business has grown into a trusted community hub. We believe that the right
              tools can turn any vision into reality.
            </motion.blockquote>
            <motion.div className="flex items-center" variants={itemVariants}>
              <div>
                <p className="font-semibold text-slate-800 text-lg">Mathura Dutt Nainwal</p>
                <p className="text-slate-600">Founder & Owner</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-slate-50 rounded-lg"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f97316",
                color: "white",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                // whileHover={{ rotate: 360 }}
                // transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-8 h-8 text-orange-600" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-slate-800 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {stat.value}
              </motion.div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            // animate={{ y: [0, -10, 0] }}
            // transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            To empower builders, creators, and dreamers with the finest tools and expert guidance, fostering a community
            where every project becomes a masterpiece and every customer feels like family.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
