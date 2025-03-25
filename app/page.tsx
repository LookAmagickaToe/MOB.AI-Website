import HeroSection from "@/components/hero-section"
import BannerSection from "@/components/banner-section"
import ProblemStatementSection from "@/components/problem-statement-section"
import ValuePropositionSection from "@/components/value-proposition-section"
import TeamSection from "@/components/team-section"
import UseCasesSection from "@/components/use-cases-section"
import ContactSection from "@/components/contact-section"
import OurApproach from "@/components/Our-Approach2"

export default function Home() {
  return (
    <div className="relative">
      {/* Fixed Background */}
      <div className="fixed-bg"></div>

      {/* Sections */}
      <HeroSection />
      <BannerSection />
      <ProblemStatementSection />
      <ValuePropositionSection />
      <OurApproach />
      <TeamSection /> 
      <UseCasesSection />
      <ContactSection />
    </div>
  )
}

