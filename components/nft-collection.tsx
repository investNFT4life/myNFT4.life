"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ClaimButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { ethereum } from "thirdweb/chains";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import TermsModal from "@/components/terms-modal";
import Link from "next/link";

const client = createThirdwebClient({
  clientId: "b194a2ccabb931616f31aaa2c72a88d8", // votre vrai clientId thirdweb
});

const NFTS = [
  {
    id: "zinc",
    name: "ZINC",
    subtitle: "Health for All Edition",
    description: "...",
    price: 35,
    priceLabel: "USDT",
    priceApprox: "Approx. $35",
    availability: "Available Now",
    image: "/Zinc_Ed3.png",
    contractAddress:
      "0xf8a6391ed1bc9815D9C03BBf165AA32404Bade57",
    stripeLink: "https://buy.stripe.com/8wMg2ZfRlaVU5rycMT",
    edition: "Health for All Edition",
    benefits: [
      "Limited to only 210,000 editions worldwide",
      "Accessible entry to the global health movement",
      "Support for essential medicine distribution",
    ],
    rarity: "Standard",
    termsText: "...",
  },
  // ... GOLD ET BLACK PLATINUM idem, gardez la structure
];

export default function NFTCollection() {
  return (
    <section
      id="nft-section"
      className="w-full px-4 md:px-8 py-16 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          Our Exclusive Collection
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          This is your moment to make a difference. The NFT
          you choose is more than a symbol — it's a personal
          stand for global health, a declaration that no
          life should be left without care.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Pick your edition. Power the mission.
        </p>
        <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Because what you do today… saves lives tomorrow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {NFTS.map((nft, i) => (
          <motion.div
            key={nft.id}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.18 }}
          >
            <NFTCard nft={nft} client={client} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function NFTCard({ nft, client }) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] =
    useState(false);

  const rarityColor = () => {
    switch (nft.rarity) {
      case "Ultra Rare":
        return "bg-gradient-to-r from-purple-600 to-blue-600 text-white";
      case "Rare":
        return "bg-gradient-to-r from-yellow-500 to-amber-500 text-black";
      default:
        return "bg-gradient-to-r from-zinc-400 to-zinc-500 text-white";
    }
  };

  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] group">
        <div className="relative overflow-hidden">
          <div className="aspect-square bg-gradient-to-b from-blue-900/50 to-blue-700/30 flex items-center justify-center p-6">
            <img
              src={nft.image || "/placeholder.svg"}
              alt={nft.name}
              className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${rarityColor()}`}
            >
              {nft.rarity}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {nft.name}
            </h3>
            <p className="text-gray-300 text-sm">
              {nft.subtitle || nft.edition}
            </p>
          </div>
          <p className="text-gray-300 mb-4">
            {nft.description}
          </p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-1">
              Price
            </h4>
            <p className="text-cyan-400 font-semibold text-xl">
              {nft.price} {nft.priceLabel || "ETH"}
            </p>
            {nft.priceApprox && (
              <p className="text-gray-400 text-sm">
                {nft.priceApprox}
              </p>
            )}
            {nft.availability && (
              <p className="text-green-400 text-sm mt-1">
                {nft.availability}
              </p>
            )}
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">{`${nft.name} Benefits`}</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {nft.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2 text-cyan-400">
                    ✓
                  </span>{" "}
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-start space-x-2 mb-6">
            <Checkbox
              id={`terms-${nft.id}`}
              checked={termsAccepted}
              onCheckedChange={(checked) =>
                setTermsAccepted(!!checked)
              }
              className="mt-1"
            />
            <div>
              <Label
                htmlFor={`terms-${nft.id}`}
                className="text-sm text-gray-400"
              >
                I agree to the{" "}
                <button
                  type="button"
                  onClick={openTermsModal}
                  className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors font-medium"
                >
                  Terms & Conditions
                </button>{" "}
                and understand that my purchase supports the
                myNFT4.LIFE mission.
              </Label>
              <p className="text-xs text-gray-500 mt-1">
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  View full Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <ClaimButton
              client={client}
              chain={ethereum}
              contractAddress={nft.contractAddress}
              claimParams={{ type: "ERC721", quantity: 1n }}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!termsAccepted}
            >
              Mint via Web3
            </ClaimButton>
            <a
              href={nft.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block border border-purple-500 text-purple-500 font-semibold rounded-lg text-center py-2 px-4 hover:bg-purple-500/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                pointerEvents: !termsAccepted
                  ? "none"
                  : undefined,
                opacity: !termsAccepted ? 0.5 : 1,
              }}
            >
              Buy with Card
            </a>
          </div>
        </div>
      </div>
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={closeTermsModal}
      />
    </>
  );
}
