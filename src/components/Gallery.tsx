import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { galleryImages } from '@/data/bakery';

// column spans for masonry feel
const spans = [
  'sm:row-span-2',
  '',
  '',
  'sm:row-span-2',
  '',
  '',
  'sm:row-span-2',
  '',
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="gallery" className="bg-bakery-beige/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bakery-golden-dark">
            Gallery
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-bakery-brown sm:text-4xl lg:text-5xl text-balance">
            A peek inside our bakery.
          </h2>
          <p className="mt-4 text-base text-bakery-ink-soft sm:text-lg">
            Cakes, cookies, bread and the warmth of fresh bakes every day.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 70}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-soft ${spans[i % spans.length]}`}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="block h-full w-full"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bakery-brown/0 transition-colors duration-300 group-hover:bg-bakery-brown/20" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bakery-ink/85 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            onClick={() => setActive(null)}
            aria-label="Close image"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={galleryImages[active].src}
            alt={galleryImages[active].alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-card animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
