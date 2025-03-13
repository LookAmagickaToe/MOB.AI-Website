import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-blue-900/20 bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">AI Founders</h3>
            <p className="text-sm text-blue-100">
              Empowering SMEs with accessible AI solutions that drive growth and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-blue-100 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-blue-100 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-blue-100 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-blue-100 hover:text-blue-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-blue-100 hover:text-blue-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-blue-100 hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-100 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-900/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-blue-100">© {new Date().getFullYear()} AI Founders. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-blue-100 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-blue-100 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

