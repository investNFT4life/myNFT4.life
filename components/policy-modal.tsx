"use client";

import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            This Privacy Policy describes how we collect,
            use, and share your personal information.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-sm text-gray-900">
          <p>
            This Privacy Policy explains how we collect,
            use, and protect your personal data in
            connection with our services.
          </p>

          <b>1. Data We Collect</b>
          <p>
            We only collect information that is strictly
            necessary for the operation of our service,
            including:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Personal identifiers: name, email address,
              crypto wallet address, and payment information
              (only when you purchase an NFT or contact us).
            </li>
            <li>
              Technical data: IP address, browser type,
              operating system, and visited pages.
            </li>
            <li>
              Transaction data: records of NFT purchases,
              sales, or transfers made through our platform.
            </li>
          </ul>

          <b>2. Use of Your Data</b>
          <p>
            We use the information we collect solely to:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Process transactions and deliver the NFTs
              you've purchased.
            </li>
            <li>
              Communicate with you about your purchases, our
              services, or policy updates.
            </li>
            <li>Improve our services.</li>
            <li>Comply with legal obligations.</li>
            <li>
              Prevent fraud and enforce our terms of
              service.
            </li>
          </ul>

          <b>3. Privacy Commitment</b>
          <p>
            We do not share your data for commercial or
            advertising purposes. Any data shared with
            third-party providers is strictly limited to
            technical operations and bound by
            confidentiality agreements.
          </p>

          <b>4. Blockchain Transactions</b>
          <p>
            Please note that blockchain transactions are
            public by design. When you purchase an NFT, the
            transaction details — including your wallet
            address — are permanently recorded on the
            blockchain and visible to the public.
          </p>

          <b>5. GDPR Compliance</b>
          <p>
            We fully comply with the European General Data
            Protection Regulation (GDPR). Depending on your
            location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6">
            <li>The right to access your personal data.</li>
            <li>
              The right to correct or delete your data.
            </li>
            <li>
              The right to restrict or object to the
              processing of your data.
            </li>
            <li>The right to data portability.</li>
          </ul>

          <b>6. Data Security</b>
          <p>
            We implement appropriate technical and
            organizational measures to safeguard your
            personal data. However, no method of online
            transmission or electronic storage is 100%
            secure, and we cannot guarantee absolute
            security.
          </p>

          <b>7. Updates to This Policy</b>
          <p>
            We may update this Privacy Policy from time to
            time. Any changes will be posted on this page
            with the new "Last updated" date.
          </p>

          <b>8. Contact</b>
          <p>
            If you have any questions or requests regarding
            your data, please contact us at:
            invest.m21@proton.me
          </p>

          <span className="text-xs text-gray-500">
            Last updated: May 7, 2025
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyModal;