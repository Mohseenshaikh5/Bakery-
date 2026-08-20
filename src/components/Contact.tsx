import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { bakery, waLink } from '@/data/bakery';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bakery-brown-dark py-20 text-bakery-cream sm:py-28">
      <div className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-bakery-golden/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-bakery-brown-light/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bakery-golden-light">
            Visit Us
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            Come in for something delicious.
          </h2>
          <p className="mt-4 text-bakery-beige/85 sm:text-lg">
            Have a question, want to enquire about a cake, or simply craving your
            favourite bakery treat? Get in touch.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Phone */}
          <Reveal>
            <div className="h-full rounded-3xl bg-bakery-brown/40 p-7 ring-1 ring-bakery-golden/20 transition hover:bg-bakery-brown/55">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bakery-golden/20 text-bakery-golden-light">
                <Phone className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">Phone</h3>
              <a
                href={`tel:+${bakery.phoneRaw}`}
                className="mt-2 block text-bakery-beige/90 transition hover:text-bakery-golden-light"
              >
                {bakery.phone}
              </a>
            </div>
          </Reveal>

          {/* Address */}
          <Reveal delay={100}>
            <div className="h-full rounded-3xl bg-bakery-brown/40 p-7 ring-1 ring-bakery-golden/20 transition hover:bg-bakery-brown/55">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bakery-golden/20 text-bakery-golden-light">
                <MapPin className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">Address</h3>
              <p className="mt-2 text-sm leading-relaxed text-bakery-beige/90">
                {bakery.address.line1}<br />
                {bakery.address.line2}<br />
                {bakery.address.line3}
              </p>
            </div>
          </Reveal>

          {/* Hours */}
          <Reveal delay={200}>
            <div className="h-full rounded-3xl bg-bakery-brown/40 p-7 ring-1 ring-bakery-golden/20 transition hover:bg-bakery-brown/55">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bakery-golden/20 text-bakery-golden-light">
                <Clock className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">Opening Hours</h3>
              <div className="mt-2 space-y-2 text-sm text-bakery-beige/90">
                <div>
                  <span className="font-medium text-bakery-cream">Mon – Sat</span>
                  <br />8:00 AM – 9:00 PM
                </div>
                <div>
                  <span className="font-medium text-bakery-cream">Sunday</span>
                  <br />8:00 AM – 1:30 PM · 4:00 PM – 9:00 PM
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Buttons */}
        <Reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row" delay={120}>
          <a
            href={`tel:+${bakery.phoneRaw}`}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-bakery-golden px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-bakery-golden-dark sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={waLink('Hello, I would like to enquire about Vijaya Bakery.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-bakery-golden/40 px-7 py-3.5 text-sm font-semibold text-bakery-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-bakery-golden hover:bg-bakery-golden/10 sm:w-auto"
          >
            WhatsApp
          </a>
          <a
            href={bakery.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-bakery-golden/40 px-7 py-3.5 text-sm font-semibold text-bakery-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-bakery-golden hover:bg-bakery-golden/10 sm:w-auto"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </Reveal>
      </div>
    </section>
  );
}
