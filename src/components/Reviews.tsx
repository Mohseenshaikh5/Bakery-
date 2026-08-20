import { Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { reviews } from '@/data/bakery';

export default function Reviews() {
  return (
    <section className="bg-bakery-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bakery-golden-dark">
            Reviews
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-bakery-brown sm:text-4xl lg:text-5xl text-balance">
            What our customers say
          </h2>
          <p className="mt-4 text-sm text-bakery-ink-soft">
            A visual demo of customer-style reviews.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <article className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-bakery-beige/60 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="flex gap-0.5 text-bakery-golden">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-bakery-ink">
                  "{r.text}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bakery-brown font-serif text-base font-semibold text-bakery-cream">
                    {r.name.charAt(0)}
                  </span>
                  <span className="font-semibold text-bakery-brown">{r.name}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
