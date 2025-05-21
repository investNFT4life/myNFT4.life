"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms & Conditions</DialogTitle>
          <DialogDescription>
            Please read and accept the following terms and conditions before proceeding.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id. Sed euismod, diam id tincidunt tincidunt, elit
            mauris tincidunt libero, id tincidunt libero mauris id.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TermsModal
