import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-600">
              Empowering SMEs with AI Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-[600px]">
              We bridge the gap between cutting-edge AI technology and practical business applications.
            </p>
            <div className="pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-blue-900/30">
            <Image
              src="/groupimage.jpg?height=500&width=600"
              alt="Founder Team"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

