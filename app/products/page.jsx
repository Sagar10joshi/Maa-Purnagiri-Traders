// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import ProductCard from "../../components/ProductCard"

// const products = [
//   {
//     id: 1,
//     name: "Professional Drill Set",
//     price: 89.99,
//     rating: 4.8,
//     category: "Tools",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 2,
//     name: "LED Work Light",
//     price: 34.99,
//     rating: 4.6,
//     category: "Electrical",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 3,
//     name: "Pipe Wrench",
//     price: 24.99,
//     rating: 4.7,
//     category: "Plumbing",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 4,
//     name: "Interior Paint",
//     price: 45.99,
//     rating: 4.5,
//     category: "Paints",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 5,
//     name: "Hammer Set",
//     price: 39.99,
//     rating: 4.9,
//     category: "Tools",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 6,
//     name: "Electrical Wire",
//     price: 19.99,
//     rating: 4.4,
//     category: "Electrical",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 7,
//     name: "Plumbing Kit",
//     price: 67.99,
//     rating: 4.6,
//     category: "Plumbing",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 8,
//     name: "Exterior Paint",
//     price: 52.99,
//     rating: 4.7,
//     category: "Paints",
//     image: "/placeholder.svg?height=200&width=200",
//   },
//   {
//     id: 9,
//     name: "Screwdriver Set",
//     price: 29.99,
//     rating: 4.8,
//     category: "Tools",
//     image: "/placeholder.svg?height=200&width=200",
//   },
// ]

// const categories = ["All", "Tools", "Electrical", "Plumbing", "Paints"]

// export default function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [filteredProducts, setFilteredProducts] = useState(products)

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category)
//     if (category === "All") {
//       setFilteredProducts(products)
//     } else {
//       setFilteredProducts(products.filter((product) => product.category === category))
//     }
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 py-20">
//       <div className="container mx-auto px-4">
//         <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Products</h1>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             Discover our extensive range of quality hardware and tools
//           </p>
//         </motion.div>

//         {/* Category Filters */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-4 mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           {categories.map((category) => (
//             <motion.button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`px-6 py-3 rounded-full font-medium transition-all ${
//                 selectedCategory === category
//                   ? "bg-orange-600 text-white shadow-lg"
//                   : "bg-white text-slate-700 hover:bg-orange-100 border border-slate-300"
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Products Grid */}
//         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
//           <AnimatePresence>
//             {filteredProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{
//                   duration: 0.3,
//                   delay: index * 0.1,
//                 }}
//               >
//                 <ProductCard product={product} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {filteredProducts.length === 0 && (
//           <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <p className="text-xl text-slate-600">No products found in this category.</p>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   )
// }
