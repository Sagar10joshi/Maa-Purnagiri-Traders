"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HardwarePopupModal({ onClose }) {
    const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)
  const router = useRouter()



    const handleClose = () => {
        setIsAnimating(false)
        setTimeout(() => {
            setIsVisible(false)
            onClose?.()
        }, 200)
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }


    const handleShopNow = () => {
    router.push("/") // go to home page
    handleClose()
  }

    if (!isVisible) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className={`
          relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 sm:p-8
          transform transition-all duration-300 ease-out
          ${isAnimating ? "scale-100 opacity-100 animate-bounce-twice" : "scale-95 opacity-0"}
        `}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                </button>

                {/* Content */}
                <div className="text-center space-y-4">
                    {/* Headline */}
                    <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
                        🎉 Thanks for Your Order!
                    </h2>

                    {/* Subheading
                    <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
                         We've received your request.
                    </p> */}

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        📞 Our team will contact you shortly to confirm the order.
                    </p>

                    {/* Call to Action Button */}
                    <div className="pt-4">
                        <button
                            onClick={handleShopNow}
                            className="
                w-full bg-yellow-400 hover:bg-yellow-500 
                text-gray-900 font-bold text-lg 
                py-4 px-6 rounded-xl 
                transform transition-all duration-200 
                hover:scale-105 hover:shadow-lg
                focus:outline-none focus:ring-4 focus:ring-yellow-300
                active:scale-95
              "
                        >
                            👉 Back to Home
                        </button>
                    </div>

                    {/* Optional: Small disclaimer or additional info */}
                    <p className="text-xs text-gray-500 pt-2">Thanks for your patience and trust in us!
                        🛠️ We'll make sure you get exactly what you need.</p>
                </div>
            </div>
        </div>
    )
}
