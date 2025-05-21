"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-8 py-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© 2025 myNFT4.life. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
