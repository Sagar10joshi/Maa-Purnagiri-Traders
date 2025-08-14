"use client"
import { motion } from "framer-motion"
import { ArrowRight, Wrench, Hammer, Zap } from "lucide-react"
import { Button } from "../components/ui/button"
import HardwarePopupModal from "./PopUp.jsx"
import { useState } from "react"
import Link from 'next/link'

export default function Home() {

  const [showModal, setShowModal] = useState(true)
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

  const floatingIcons = [
    { Icon: Wrench },
    { Icon: Hammer },
    { Icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-slate-700/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, x, 0],
            y: [0, y, 0],
            rotate: [0, 360],
          }}
          transition={{
            delay,
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
        >
          <Icon size={80} />
        </motion.div>
      ))}

      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6" variants={itemVariants}>
            Your One-Stop
            <motion.span
              className="block text-orange-500"
              animate={{
                textShadow: [
                  "0 0 20px rgba(251, 146, 60, 0.5)",
                  "0 0 40px rgba(251, 146, 60, 0.8)",
                  "0 0 20px rgba(251, 146, 60, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Hardware Solution
            </motion.span>
          </motion.h1>

          <motion.p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            From professional tools to home improvement essentials, we've got everything you need to build, fix, and
            create.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <Link href="/products" passHref>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg group">
                Shop Now
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </Link>

            <Link href="/about" passHref>
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Feature Cards */}
        {/* <motion.div className="grid md:grid-cols-3 gap-8 mt-20" variants={containerVariants}>
          {[
            { title: "Quality Tools", desc: "Professional-grade equipment", icon: "🔧" },
            { title: "Expert Advice", desc: "Get help from our specialists", icon: "👨‍🔧" },
            { title: "Fast Delivery", desc: "Quick shipping to your door", icon: "🚚" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-orange-500 transition-colors"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(251, 146, 60, 0.3)",
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div> */}

        

        {/* Services Section */}
        <motion.section className="mt-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-slate-300 text-lg">Beyond products, we offer comprehensive hardware solutions</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: "🔧",
                title: "Quality Products",
                desc: "Quality construction products for all your needs",
              },
              {
                icon: "📏",
                title: "Best Deals & Discounts",
                desc: "Enjoy best prices on top-quality hardware and materials."

              },
              {
                icon: "🚚",
                title: "Bulk Delivery",
                desc: "Free delivery for large orders and contractors",
              },
              {
                icon: "💡",
                title: "Project Consultation",
                desc: "Expert advice for your construction projects",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-orange-500 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>



        {/* Featured Products Section */}
        <motion.section className="mt-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-slate-300 text-lg">All building materials are available</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                name: "Steel Rebar Rods (Sariya)",
                price: "₹5000-₹7000 per quintal",
                image: "/Sariya.png?height=200&width=200",
                badge: "Premium",
              },
              {
                name: "Premium Cement Bag",
                price: "₹350-₹500 per bag",
                image: "/Cement.jpg?height=200&width=200",
                badge: "Premium",
              },
              {
                name: "Asian Paints",
                price: "₹1200-₹8500 per bucket",
                image: "/Paint-Brands.webp?height=200&width=200",
                badge: "New Arrival",
              },{
                name: "All sanitary items are available",
                price: "₹250-₹6000 per piece",
                image: "/plumbing.webp?height=200&width=200",
                badge: "New Arrival",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-orange-500 transition-colors group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                    {/* <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      View Details
                    </Button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section className="mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }}>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Maa Purnagiri Traders?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "15+ Years Experience",
                    desc: "Trusted by professionals and DIY enthusiasts since 1998",
                  },
                  {
                    title: "Quality Guarantee",
                    desc: "All products backed by manufacturer warranties and our quality promise",
                  },
                  {
                    title: "Hardworking Staff",
                    desc: "Hardworking team ready to help with any project, big or small",
                  },
                  {
                    title: "Competitive Pricing",
                    desc: "Best prices in town with price matching on identical items",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                  >
                    <div className="bg-orange-600 rounded-full p-2 mt-1">
                      <motion.div
                      // animate={{ scale: [1, 1.2, 1] }}
                      // transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                      >
                        ✓
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Professional Contractors</h3>
                <p className="mb-6">
                  Join our contractor program for exclusive discounts, priority service, and bulk pricing on all your
                  project needs.
                </p>
                {/* <Button className="bg-white text-orange-600 hover:bg-slate-100">Learn More</Button> */}
              </div>
              <motion.div
                className="absolute -top-4 -right-4 bg-slate-800 rounded-full p-4"
              // animate={{ rotate: 360 }}
              // transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Wrench className="w-8 h-8 text-orange-500" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>



        {/* Brand Partners */}
        <motion.section className="mt-32 mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Trusted Brand Partners</h2>
            <p className="text-slate-300 text-lg">We carry products from industry-leading manufacturers</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {["Ambuja Cement", "Bangur Cement", "Kamdhenu Nxt", "Shree Jung Rodhak", "JK Cement", "Jindal TMT bars"].map((brand, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-orange-500 transition-colors text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-2xl font-bold text-white"
                // animate={{ opacity: [0.7, 1, 0.7] }}
                // transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                >
                  {brand}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.div>
      {/* Popup Modal */}
      {showModal && <HardwarePopupModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
