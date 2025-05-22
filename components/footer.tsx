"use client";

import { useState } from "react";
import TermsModal from "@/components/terms-modal";
import PolicyModal from "@/components/policy-modal";

export default function Footer() {
  // États pour ouverture/fermeture des modales
  const [isTermsModalOpen, setIsTermsModalOpen] =
    useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] =
    useState(false);

  // Fonctions pour la modale Terms
  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  // Fonctions pour la modale Policy
  const openPolicyModal = () => setIsPolicyModalOpen(true);
  const closePolicyModal = () =>
    setIsPolicyModalOpen(false);

  return (
    <>
      <footer className="w-full px-4 md:px-8 py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 myNFT4.life. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <button
                type="button"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                onClick={openTermsModal}
              >
                Terms & Conditions
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                onClick={openPolicyModal}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={closeTermsModal}
      />
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={closePolicyModal}
      />
    </>
  );
}
