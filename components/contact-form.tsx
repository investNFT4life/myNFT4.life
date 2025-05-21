"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"

export default function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xanokrev", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    setIsSubmitting(false);

    if (res.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } else {
      alert("Erreur lors de l'envoi du message.");
    }
  }

  return (
    <section
      id="contact-section"
      ref={ref}
      className="w-full px-4 md:px-8 py-16 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Contact
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions or want to learn more about our mission? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Informations de contact */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              Have questions about our NFTs or mission? We're here to help you make a difference.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email Us</h4>
                  <a href="mailto:invest.m21@proton.me" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    invest.m21@proton.me
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-300">Geneva - Switzerland</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16">
                <p className="text-2xl text-green-400 font-semibold mb-4">Message Sent!</p>
                <p className="text-gray-300">Thank you for contacting us. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-900 border-gray-700 text-white focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border-gray-700 text-white focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-900 border-gray-700 text-white focus:border-purple-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
