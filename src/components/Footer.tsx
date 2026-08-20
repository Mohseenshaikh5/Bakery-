import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { bakery } from '@/data/bakery';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-bakery-brown-dark text-bakery-beige/80">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bakery-cream text-bakery-brown ring-2 ring-bakery-golden/40">
                <span className="font-serif text-2xl font-bold leading-none">V</span>
              </span>
              <span className="font-serif text-xl font-semibold text-bakery-cream">
                Vijaya Bakery
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Serving the taste of Malvan since 1963.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={bakery.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bakery-brown/50 text-bakery-cream transition hover:bg-bakery-golden hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bakery-brown/50 text-bakery-cream transition hover:bg-bakery-golden hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-bakery-cream">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition hover:text-bakery-golden-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-bakery-cream">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-bakery-golden-light" />
                <a href={`tel:+${bakery.phoneRaw}`} className="transition hover:text-bakery-golden-light">
                  {bakery.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bakery-golden-light" />
                <span>Malvan, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-bakery-brown/60 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs">
            © 2026 Vijaya Bakery, Malvan. All rights reserved.
          </p>
          <p className="text-[11px] text-bakery-beige/50">
            Website concept by Mohseen Shaikh
          </p>
        </div>
      </div>
    </footer>
  );
}
