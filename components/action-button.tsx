"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ActionButton() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Button
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.8)] transition-all duration-300"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        ACT NOW!
      </Button>
    </motion.div>
  )
}
