import { Phone, Sparkles } from 'lucide-react';
import { bakery, waLink } from '@/data/bakery';

const heroImg =
  'https://images.pexels.com/photos/13914951/pexels-photo-13914951.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-bakery-cream pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-bakery-golden/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-bakery-brown/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div className="text-center lg:text-left">
          <span className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-bakery-golden/40 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-bakery-golden-dark shadow-soft">
            <Sparkles className="h-3.5 w-3.5" />
            Malvan's Trusted Bakery
          </span>

          <h1 className="mt-6 animate-fade-up font-serif text-4xl font-bold leading-[1.1] text-bakery-brown sm:text-5xl lg:text-6xl text-balance" style={{ animationDelay: '80ms' }}>
            Serving the taste of{' '}
            <span className="relative whitespace-nowrap text-bakery-golden-dark">
              Malvan
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-bakery-golden/50"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8 Q 100 -2 198 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}
            since 1963.
          </h1>

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-bakery-ink-soft sm:text-lg lg:mx-0" style={{ animationDelay: '160ms' }}>
            Freshly baked favourites, timeless recipes and the sweet memories of
            generations. Discover the goodness of Vijaya Bakery.
          </p>

          <div className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row lg:justify-start justify-center" style={{ animationDelay: '240ms' }}>
            <a
              href="#products"
              className="rounded-full bg-bakery-brown px-7 py-3.5 text-sm font-semibold text-bakery-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-bakery-brown-dark hover:shadow-card"
            >
              Explore Products
            </a>
            <a
              href={waLink('Hello, I would like to know more about Vijaya Bakery.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-bakery-brown/20 bg-white/70 px-7 py-3.5 text-sm font-semibold text-bakery-brown transition-all duration-300 hover:-translate-y-0.5 hover:border-bakery-golden hover:text-bakery-golden-dark"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.001-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 flex animate-fade-up items-center justify-center gap-6 lg:justify-start" style={{ animationDelay: '320ms' }}>
            <a href={`tel:+${bakery.phoneRaw}`} className="flex items-center gap-2 text-sm font-medium text-bakery-ink-soft transition hover:text-bakery-brown">
              <Phone className="h-4 w-4 text-bakery-golden-dark" />
              {bakery.phone}
            </a>
            <span className="h-4 w-px bg-bakery-beige" />
            <span className="text-sm text-bakery-ink-soft">Somwar Peth, Malvan</span>
          </div>
        </div>

        {/* Right image */}
        <div className="relative mx-auto w-full max-w-md animate-scale-in lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-bakery-brown/10">
            <img
              src={heroImg}
              alt="Assorted fresh cakes and pastries in the Vijaya Bakery display"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bakery-brown/25 via-transparent to-transparent" />
          </div>

          {/* EST. 1963 badge */}
          <div className="absolute -left-4 top-6 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-bakery-brown text-center text-bakery-cream shadow-card ring-4 ring-bakery-cream sm:-left-6 sm:h-32 sm:w-32">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bakery-golden-light">Est.</span>
            <span className="font-serif text-3xl font-bold leading-none sm:text-4xl">1963</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-bakery-golden-light">Malvan</span>
          </div>

          {/* small floating card */}
          <div className="absolute -bottom-5 right-3 rounded-2xl bg-white/90 px-5 py-3 shadow-card backdrop-blur-sm sm:right-6">
            <div className="flex items-center gap-1.5 text-bakery-golden">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className="text-sm">{s}</span>
              ))}
            </div>
            <p className="mt-0.5 text-xs font-medium text-bakery-ink-soft">
              {bakery.rating} · {bakery.reviews} reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
