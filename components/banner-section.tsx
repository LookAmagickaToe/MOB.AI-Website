export default function BannerSection() {
  return (
    <section className="w-full py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col p-6 bg-card rounded-lg border border-blue-900/30 card-relief">
            <blockquote className="text-xl italic text-blue-100">
              "AI is not just a technology; it's a strategic imperative for businesses that want to remain competitive
              in the digital age."
            </blockquote>
            <cite className="mt-4 text-right text-blue-400">— Satya Nadella, CEO of Microsoft</cite>
          </div>
          <div className="flex flex-col p-6 bg-card rounded-lg border border-blue-900/30 card-relief">
            <blockquote className="text-xl italic text-blue-100">
              "The companies that embrace AI will have a significant advantage over those that don't. It's not about
              replacing humans, but augmenting human capabilities."
            </blockquote>
            <cite className="mt-4 text-right text-blue-400">— Sundar Pichai, CEO of Google</cite>
          </div>
        </div>
      </div>
    </section>
  )
}

