"use client"
import { motion } from "framer-motion"
import { Wrench, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Link } from "react-router-dom"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    // { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  // const categories = [
  //   { name: "Tools", href: "/products?category=tools" },
  //   { name: "Electrical", href: "/products?category=electrical" },
  //   { name: "Plumbing", href: "/products?category=plumbing" },
  //   { name: "Paints", href: "/products?category=paints" },
  // ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Wrench className="w-8 h-8 text-orange-500" />
              </motion.div>
              <span className="text-xl font-bold">Maa Purnagiri Traders</span>
            </div>
            <p className="text-slate-400 mb-4">
              Your trusted partner for all hardware needs. Quality tools, expert advice, and exceptional service since
              1998.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Teenpani bypass opposite of Tata Motors near City Hospital,Haldwani</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:9410333186" className="hover:text-orange-400 transition-colors">9410333186</a>
                <a href="tel:9897264344" className="hover:text-orange-400 transition-colors">9897264344</a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:maapurnagiritraders1974@gmail.com" className="hover:text-orange-400 transition-colors">
                  maapurnagiritraders1974@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>
                    <motion.span
                      className="text-slate-400 hover:text-orange-500 transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link to={category.href}>
                    <motion.span
                      className="text-slate-400 hover:text-orange-500 transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      {category.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Newsletter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-slate-400 mb-4 text-sm">
              Get in touch with us.
            </p>

            <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:9410333186" className="hover:text-orange-400 transition-colors">9410333186</a>
                <a href="tel:9897264344" className="hover:text-orange-400 transition-colors">9897264344</a>
              </div>
            

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Maa Purnagiri Traders . All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
