import HeroCarousel from "@/components/hero-carousel"
import ActionButton from "@/components/action-button"
import FeatureBlocks from "@/components/feature-blocks"
import NFTCollection from "@/components/nft-collection"
import { ThirdwebProvider } from "@/components/thirdweb-provider"
import Header from "@/components/header"
import MedicalDivider from "@/components/medical-divider"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <ThirdwebProvider>
      <main className="flex min-h-screen flex-col bg-black text-white overflow-hidden">
        {/* Header fixe en haut */}
        <Header />

        {/* Espace pour compenser le header fixe */}
        <div className="h-20 md:h-24"></div>

        {/* Hero Carousel */}
        <section className="w-full">
          <HeroCarousel />
        </section>

        {/* Action Button - position ajustée pour éviter la superposition */}
        <section className="w-full flex justify-center mt-10 relative z-10">
          <ActionButton />
        </section>

        {/* Hero Title - Restructuré avec les retours à la ligne spécifiques */}
        <section className="w-full px-4 md:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Titre principal avec retour à la ligne */}
            <div>
              <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                <span className="block text-4xl md:text-5xl lg:text-6xl mb-2">Reimagining</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl">Health Access</span>
              </h1>
            </div>

            {/* Premier paragraphe avec retours à la ligne spécifiques */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-300">
                Together, we don't just imagine a fairer world we make it real.
              </p>
              <p className="text-lg md:text-xl text-gray-300">We accelerate care, bring faster diagnostics,</p>
              <p className="text-lg md:text-xl text-gray-300">
                and deliver life-saving solutions where only silence once remained.
              </p>
            </div>

            {/* Deuxième paragraphe avec retour à la ligne */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-300 italic">
                This isn't just a mission. It's a call for dignity.
              </p>
              <p className="text-lg md:text-xl text-gray-300 italic">A gesture of hope. A promise of life.</p>
            </div>
          </div>
        </section>

        {/* Feature Blocks */}
        <FeatureBlocks />

        {/* About Section - Texte mis à jour */}
        <section className="w-full px-4 md:px-8 py-16 text-center bg-gradient-to-b from-black to-gray-900">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            Our Mission
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-300">
              We are revolutionizing the NFT world by creating the first collection with a real and measurable impact on
              global health. Each myNFT4.life token you purchase directly funds innovative medical solutions.
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-bold">Join us. Choose health. Choose life. Act NOW!</p>
          </div>
        </section>

        {/* Séparateur médical */}
        <MedicalDivider />

        {/* NFT Collection */}
        <NFTCollection />

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <Footer />
      </main>
    </ThirdwebProvider>
  )
}
