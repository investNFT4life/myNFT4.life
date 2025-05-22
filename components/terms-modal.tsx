"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms & Conditions</DialogTitle>
          <DialogDescription>
            Please read and accept the following terms and
            conditions before proceeding.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-sm text-gray-900">
          <p>
            Please read these terms and conditions carefully
            before using our service.
          </p>

          <b>1. Introduction</b>
          <p>
            Welcome to myNFT4.life. These Terms and
            Conditions govern your use of our website and
            services, including the purchase and ownership
            of our NFTs.
          </p>

          <b>2. NFT Ownership</b>
          <p>
            When you purchase an NFT from myNFT4.life, you
            own the NFT (the non-fungible token) that points
            to a specific digital asset. Your purchase of
            the NFT means:
          </p>
          <ul className="list-disc pl-6">
            <li>
              You have a right to sell, trade, or transfer
              the NFT.
            </li>
            <li>
              You have a license to display the associated
              digital asset for personal, non-commercial
              use.
            </li>
            <li>
              You do not own the copyright, trademark, or
              other intellectual property rights to the
              underlying content.
            </li>
          </ul>

          <b>3. Use of Funds</b>
          <p>
            myNFT4.life is committed to transparency in how
            funds from NFT sales are used. A significant
            portion of proceeds will be directed toward
            medical initiatives, healthcare access, and
            veterinary care as outlined in our mission
            statement.
          </p>

          <b>4. Prohibited Activities</b>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6">
            <li>Use the NFT for any illegal purpose.</li>
            <li>
              Infringe upon the intellectual property rights
              of myNFT4.life or any third party.
            </li>
            <li>
              Use the NFT or associated content in a manner
              that is harmful, fraudulent, deceptive,
              threatening, harassing, defamatory, obscene,
              or otherwise objectionable.
            </li>
          </ul>

          <b>5. Disclaimers</b>
          <p>
            NFTs are a relatively new and evolving
            technology. The value of NFTs can be volatile
            and may decrease over time. myNFT4.life makes no
            guarantees regarding the future value of the
            NFTs sold on our platform.
          </p>

          <b>6. Limitation of Liability</b>
          <p>
            To the maximum extent permitted by law,
            myNFT4.life shall not be liable for any
            indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or
            revenues, whether incurred directly or
            indirectly, or any loss of data, use, goodwill,
            or other intangible losses.
          </p>

          <b>7. Changes to Terms</b>
          <p>
            myNFT4.life reserves the right to modify these
            Terms at any time. We will provide notice of
            significant changes by posting the updated Terms
            on our website.
          </p>

          <b>8. Contact Information</b>
          <p>
            If you have any questions about these Terms,
            please contact us at invest.m21@proton.me.
          </p>

          <span className="text-xs text-gray-500">
            Last updated: May 7, 2025
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;
