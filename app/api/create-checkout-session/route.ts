import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Vérifier si la clé API Stripe est définie
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY

    if (!stripeSecretKey) {
      console.warn("STRIPE_SECRET_KEY is not defined")
      return NextResponse.json(
        {
          error: "Stripe configuration is missing. This is a preview mode.",
          success: false,
          previewMode: true,
          message: "In production, this would create a Stripe checkout session.",
        },
        { status: 200 },
      )
    }

    // Si nous arrivons ici, la clé API est définie
    const { productId } = await request.json()

    // Simulation de réponse pour la prévisualisation
    return NextResponse.json({
      id: "preview_session_" + Math.random().toString(36).substring(2, 15),
      success: true,
      previewMode: true,
      productId,
    })
  } catch (error) {
    console.error("Error in checkout session:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
