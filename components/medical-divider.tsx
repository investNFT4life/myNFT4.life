"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function MedicalDivider() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="w-full py-12 flex justify-center overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-5xl"
      >
        {/* Ligne horizontale avec dégradé */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>

        <div className="relative flex justify-center">
          <motion.svg
            width="600"
            height="100"
            viewBox="0 0 600 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ y: 20 }}
            animate={inView ? { y: 0 } : { y: 20 }}
            transition={{ duration: 0.8 }}
          >
            {/* Fond semi-transparent */}
            <rect
              x="150"
              y="35"
              width="300"
              height="30"
              rx="15"
              fill="black"
              fillOpacity="0.6"
              stroke="url(#medtech-gradient)"
              strokeWidth="1"
              className="backdrop-blur-sm"
            />

            {/* Ligne d'électrocardiogramme (ECG) */}
            <motion.path
              d="M150,50 L200,50 L210,30 L220,70 L230,50 L240,50 L250,20 L260,80 L270,50 L300,50 L310,30 L320,70 L330,50 L340,50 L350,20 L360,80 L370,50 L400,50 L410,30 L420,70 L430,50 L450,50"
              stroke="url(#ecg-gradient)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
            />

            {/* Cercles de données/technologie */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.circle
                key={`circle-${i}`}
                cx={170 + i * 60}
                cy="50"
                r="4"
                fill="#06B6D4"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              />
            ))}

            {/* Lignes de circuit */}
            <motion.path
              d="M170,70 L170,80 L230,80 L230,70 M290,70 L290,80 L350,80 L350,70 M410,70 L410,80 L470,80 L470,70"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              strokeDasharray="4 2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Symbole médical moderne (croix médicale avec technologie) */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Cercle extérieur */}
              <circle cx="300" cy="50" r="25" fill="transparent" stroke="url(#medtech-gradient)" strokeWidth="2" />

              {/* Croix médicale */}
              <path d="M300,35 L300,65 M285,50 L315,50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

              {/* Éléments technologiques autour de la croix */}
              <circle
                cx="300"
                cy="50"
                r="18"
                fill="transparent"
                stroke="#06B6D4"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <path
                d="M285,40 L290,45 M315,40 L310,45 M285,60 L290,55 M315,60 L310,55"
                stroke="#8B5CF6"
                strokeWidth="1.5"
              />
            </motion.g>

            {/* Points de données pulsants */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.circle
                key={`pulse-${i}`}
                cx={200 + i * 50}
                cy="25"
                r="3"
                fill="#06B6D4"
                initial={{ opacity: 0.3 }}
                animate={
                  inView
                    ? {
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      }
                    : { opacity: 0.3 }
                }
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              />
            ))}

            {/* Définition des dégradés */}
            <defs>
              <linearGradient id="medtech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="ecg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </motion.div>
    </div>
  )
}
