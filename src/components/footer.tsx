import Link from 'next/link'
import { Mail, Phone, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Smartnex</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovative tech solutions for healthcare, enterprise software, and AI-powered attendance management.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#services" className="hover:text-primary transition">Healthcare Solutions</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition">Software Solutions</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition">Attendance System</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                <Mail size={16} />
                <a href="mailto:contact@smartnex.tech">contact@smartnex.tech</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition">
                <Phone size={16} />
                <a href="tel:+918260805119">+91 82608 05119</a>
              </li>
              <li>
                <Link
                  href="https://in.linkedin.com/company/smartnex-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Smartnex Technologies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
