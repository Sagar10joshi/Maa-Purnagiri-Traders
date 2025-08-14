'use client'

import { useState } from 'react'
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react'
import emailjs from '@emailjs/browser'
import HardwarePopupModal from "./Orderpopup.jsx"





const SERVICE_ID = 'service_e9bqfde'
const TEMPLATE_ID = 'template_33hnlmj'
const PUBLIC_KEY = 'ZIMfxD9l1JdVolhBO'


const products = [
  {
    id: 1,
    name: "Steel Rebar Rods (Sariya)",
    price: " 5000",
    image: "/Sariya.png?height=200&width=200",
    description: '[₹5000-₹7000 per quintal] Price may vary as per the product purchased'
  },
  {
    id: 2,
    name: "Premium Cement Bag",
    price: "400",
    image: "/Cement.jpg?height=200&width=200",
    description: '[₹350-₹500 per bag] Price may vary as per the product purchased'
  },
  {
      id: 3,
      name: "Paint Buckets",
      price: "1200",
      image: "/Paint-Brands.webp?height=200&width=200",
      description: '[₹1200-₹8500 per bucket] Price may vary as per the product purchased'
  },
  {
      id: 4,
      name: "All sanitary items are available",
      price: "250",
      image: "/plumbing.webp?height=200&width=200",
      description: '[₹250-₹6000 per piece] Price may vary as per the product purchased'
  }
]

export default function Page() {
  const [cart, setCart] = useState([])
  const [showEmailPrompt, setShowEmailPrompt] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [showModal, setShowModal] = useState(false)






  const sendEmail = () => {
    const items = cart.map(item => `${item.name} x ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`).join('\n')

    const templateParams = {
      user_email: userEmail, // collected from input
      // owner_email: 'maapurnagiritraders1974@gmail.com', // optional: hardcoded
      message: `
        New Order:
        -----------------------
        ${items}
        -----------------------
        Total: ₹${getTotalPrice()}
      `
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        // alert('Order summary sent to the store owner!')
        setShowModal(true)
        setCart([]) // clear cart
        setShowEmailPrompt(false)
      })
      .catch(err => {
        console.error(err)
        alert('Failed to send email.')
      })
  }











  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      )
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-green-900">You can order now and discuss the final price later. Thanks for visiting.</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Products Column */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Cart ({getTotalItems()})
                </h2>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600">₹{item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 hover:bg-red-100 text-red-600 rounded ml-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Items Summary */}
                  <div className="space-y-1 mb-3 text-sm text-gray-600">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name} × {item.quantity}</span>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-gray-900">Total:</span>
                      <span className="text-2xl font-bold text-blue-600">₹{getTotalPrice()}</span>
                    </div>
                    {/* <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors">
                      Proceed to Checkout
                    </button> */}

                    <button
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                      onClick={() => setShowEmailPrompt(true)}
                    >
                      Proceed to Checkout
                    </button>

                  </div>
                </>
              )}

              {showEmailPrompt && (
                <div className="mt-4 space-y-2">
                  <input
                    type="number"
                    className="w-full border rounded p-2"
                    placeholder="Enter your mobile number"
                    value={userEmail}
                    required
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={sendEmail}
                  >
                    Confirm and Send
                  </button>
                </div>
              )}

              {showModal && (
                <HardwarePopupModal onClose={() => setShowModal(false)} />
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
