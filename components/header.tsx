"use client";

import Link from "next/link";
import {
  Home,
  Layers,
  Mail,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WalletIconButton from "./WalletIconButton";
import { useCallback } from "react";

// Extract central phrase as a constant for reuse/responsiveness
const TAGLINE =
  "The first NFT designed to fund real-world preventive healthcare for all.";

export default function Header() {
  // Single handler for smooth section scrolling
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    [],
  );

  return (
    <header className="w-full bg-black/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo (clickable, gradient text) */}
          <Link
            href="/"
            className="flex-shrink-0 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-80 transition-opacity"
          >
            myNFT4.life
          </Link>

          {/* Desktop center tagline */}
          <div className="hidden md:block flex-grow mx-4 text-center">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 font-medium">
              {TAGLINE}
            </p>
          </div>

          {/* Navigation & Socials */}
          <div className="flex items-center space-x-1 md:space-x-2">
            {/* Home */}
            <Link href="/">
              <Button
                aria-label="Home"
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              >
                <Home className="h-5 w-5" />
              </Button>
            </Link>

            {/* NFTs scroll */}
            <Button
              aria-label="NFTs"
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              onClick={() => scrollToSection("nft-section")}
            >
              <Layers className="h-5 w-5" />
            </Button>

            {/* Contact scroll */}
            <Button
              aria-label="Contact"
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              onClick={() =>
                scrollToSection("contact-section")
              }
            >
              <Mail className="h-5 w-5" />
            </Button>

            {/* Divider for desktop */}
            <div className="hidden md:block h-6 w-px bg-gray-700 mx-1"></div>

            {/* Instagram */}
            <a
              href="https://instagram.com/mynft4.life"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            {/* TikTok */}
            <a
              href="https://tiktok.com/@mynft4.life?_t=ZN-8wZ1nsix090&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            {/* Wallet Connect icon-only */}
            <WalletIconButton />
          </div>
        </div>
        {/* Mobile-only tagline */}
        <div className="md:hidden text-center py-3">
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            {TAGLINE}
          </p>
        </div>
      </div>
    </header>
  );
}
