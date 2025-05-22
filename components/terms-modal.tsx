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
            (NFT Participation Agreement – myNFT4.life)
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-sm text-gray-900">
          <b>1. Introduction</b>
          <p>
            myNFT4.life is a global initiative merging digital innovation, medical progress, and humanitarian action.
            By acquiring one of our NFTs, you are not simply purchasing a digital asset — you are actively supporting the deployment of life-saving medical technology to underserved populations around the world.
          </p>

          <b>2. NFT Structure</b>
          <p>
            A total of 231,100 NFTs will be issued, divided into three symbolic editions:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <b>Black Platinum Edition – Ambassador</b>
              <ul className="list-disc pl-6">
                <li>Limited to 2,100 NFTs only</li>
                <li>Includes a numbered physical medical device + box of 10 consumables</li>
                <li>Grants lifetime ambassador status</li>
              </ul>
            </li>
            <li>
              <b>Gold Edition – Act For Life</b>
              <ul className="list-disc pl-6">
                <li>Limited to 21,000 NFTs</li>
                <li>Digital token granting access to our innovation platform and impact roadmap</li>
              </ul>
            </li>
            <li>
              <b>Zinc Edition – Health for All</b>
              <ul className="list-disc pl-6">
                <li>Limited to 210,000 NFTs</li>
                <li>Entry-level token supporting the mission, with access to updates and milestones</li>
              </ul>
            </li>
          </ul>
          <p>
            All NFTs are unique, verifiable, and minted on the blockchain. Ownership is transferred automatically upon confirmed payment (via crypto or Stripe).
          </p>

          <b>3. Purpose & Value</b>
          <p>
            By purchasing an NFT, you confirm your participation in the mission of myNFT4.life.
            These NFTs do not represent financial equity or investment, but are symbols of impact and solidarity for global health.
          </p>
          <p>
            Each token directly supports the development and delivery of certified medical technologies in:
          </p>
          <ul className="list-disc pl-6">
            <li>Cardiology</li>
            <li>Pediatrics</li>
            <li>STI/STD prevention and screening</li>
            <li>Drug use detection</li>
            <li>Animal health diagnostics</li>
          </ul>
          <p>
            This initiative is built to serve both human and animal populations, especially in vulnerable and underserved areas.
          </p>

          <b>4. Ambassador Privileges – Black Platinum Edition</b>
          <p>
            Holders of the Black Platinum Edition (2,100 only) receive:
          </p>
          <ul className="list-disc pl-6">
            <li>A collector-numbered medical device</li>
            <li>A box of 10 consumables</li>
            <li>Exclusive early access to beta features, product launches, and private testing</li>
            <li>Recognition as founding ambassadors of the initiative</li>
            <li>Optional involvement in humanitarian field deployments</li>
          </ul>

          <b>5. Transparency & Use of Funds</b>
          <p>
            All proceeds are strictly allocated to:
          </p>
          <ul className="list-disc pl-6">
            <li>Manufacturing and distributing diagnostic medical tools</li>
            <li>Supporting public health missions in high-priority zones (Sub-Saharan Africa, Southeast Asia, refugee camps, etc.)</li>
            <li>Maintaining the NFT infrastructure (smart contracts, hosting, compliance)</li>
          </ul>
          <p>
            We are committed to full transparency and will share regular progress reports with our community.
          </p>

          <b>6. Our Vision</b>
          <p>
            We believe health is a human right — not a privilege.
            This project was born from the urgent need to challenge broken systems and deliver real solutions.
          </p>
          <p>
            myNFT4.life is more than a campaign — it’s a movement.
            A resistance through care, led by people who choose action over indifference.
          </p>
          <p>
            Our goal: multiply the impact of each NFT by 5× within 5 years.
          </p>

          <b>7. Refund Policy</b>
          <p>
            Due to the immutable nature of blockchain and NFT minting, all sales are final.
            In the event of technical issues or delivery concerns, our team will provide individual support with full transparency and diligence.
          </p>

          <b>8. Privacy & Data</b>
          <p>
            We only collect essential information: name, email, and shipping address (for Black Edition only).
            Your data is stored securely, and is never sold or shared with third parties.
          </p>

          <b>9. Confirmation & Delivery</b>
          <p>
            After successful payment:
          </p>
          <ul className="list-disc pl-6">
            <li>You will receive a confirmation email</li>
            <li>Your NFT will be delivered to your wallet or via email-based minting (if applicable)</li>
            <li>(For Black Edition) Your physical medical device + consumables will be shipped securely with tracking</li>
          </ul>

          <span className="text-xs text-gray-500">
            Last updated: May 22, 2025
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;
