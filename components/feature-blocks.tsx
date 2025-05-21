"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, TrendingUp, Globe, CheckCircle, Clock, BarChart3, HeartPulse, Zap, Users } from "lucide-react"

const features = [
  {
    title: "Transparency",
    description:
      "Track the impact of your NFT in real-time through our blockchain traceability system. 100% transparent from purchase to impact.",
    icon: Shield,
    secondaryIcons: [CheckCircle, BarChart3],
    color: "from-cyan-500 to-blue-500",
    delay: 0,
  },
  {
    title: "Lasting Value",
    description:
      "Your NFT gains value while contributing to saving lives, today and tomorrow. A digital asset with real-world impact.",
    icon: TrendingUp,
    secondaryIcons: [Clock, Zap],
    color: "from-purple-500 to-indigo-500",
    delay: 0.1,
  },
  {
    title: "Global Impact",
    description:
      "Each token is a raised voice, a broken barrier, a life protected human or animal. Together, we change the rules.",
    icon: Globe,
    secondaryIcons: [HeartPulse, Users],
    color: "from-blue-500 to-purple-500",
    delay: 0.2,
  },
]

export default function FeatureBlocks() {
  return (
    <section className="w-full px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            secondaryIcons={feature.secondaryIcons}
            color={feature.color}
            delay={feature.delay}
          />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  secondaryIcons,
  color,
  delay,
}: {
  title: string
  description: string
  icon: React.ElementType
  secondaryIcons: React.ElementType[]
  color: string
  delay: number
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const SecondaryIcon1 = secondaryIcons[0]
  const SecondaryIcon2 = secondaryIcons[1]

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] relative overflow-hidden group"
    >
      {/* Fond d'icône animé */}
      <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <Icon className="w-40 h-40" />
      </div>

      {/* Icône principale avec gradient */}
      <div className="mb-6 relative">
        <div
          className={`w-16 h-16 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mb-2`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Icônes secondaires avec animation */}
        <motion.div
          className="absolute top-0 right-0 flex space-x-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
            <SecondaryIcon1 className="w-4 h-4 text-gray-400" />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
            <SecondaryIcon2 className="w-4 h-4 text-gray-400" />
          </div>
        </motion.div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 relative z-10">
        {title}
      </h3>

      <p className="text-gray-300 relative z-10">{description}</p>

      {/* Ligne décorative avec animation */}
      <motion.div
        className={`h-1 bg-gradient-to-r ${color} rounded-full mt-4 w-0`}
        initial={{ width: 0 }}
        animate={inView ? { width: "40%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.5 }}
      />
    </motion.div>
  )
}
