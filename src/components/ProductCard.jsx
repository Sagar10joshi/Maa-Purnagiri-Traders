// "use client"
// import { motion } from "framer-motion"
// import { Star, ShoppingCart } from "lucide-react"
// import { Button } from "./ui/button"

// export default function ProductCard({ product }) {
//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
//       whileHover={{
//         y: -10,
//         boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//       }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="relative overflow-hidden">
//         <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
//           <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
//         </motion.div>

//         <motion.div
//           className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100"
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div initial={{ scale: 0 }} whileHover={{ scale: 1 }} transition={{ duration: 0.2 }}>
//             <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
//               <ShoppingCart className="w-4 h-4 mr-2" />
//               Quick Add
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>

//       <div className="p-6">
//         <motion.h3
//           className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-orange-600"
//           transition={{ duration: 0.2 }}
//         >
//           {product.name}
//         </motion.h3>

//         <div className="flex items-center mb-3">
//           <div className="flex items-center">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`w-4 h-4 ${
//                   i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//           <span className="text-sm text-slate-600 ml-2">({product.rating})</span>
//         </div>

//         <div className="flex items-center justify-between">
//           <motion.span className="text-2xl font-bold text-orange-600" whileHover={{ scale: 1.1 }}>
//             ${product.price}
//           </motion.span>

//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             {/* <Button
//               variant="outline"
//               size="sm"
//               className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
//             >
//               Add to Cart
//             </Button> */}
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }
