import Reveal from '@/components/Reveal';
import { bakery } from '@/data/bakery';

const storyImg =
  'https://images.pexels.com/photos/29380150/pexels-photo-29380150.jpeg?auto=compress&cs=tinysrgb&h=900&w=1100';

const stats = [
  { value: '1963', label: 'Established' },
  { value: '4.5★', label: 'Customer Rating' },
  { value: '185+', label: 'Customer Reviews' },
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-bakery-beige/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-bakery-brown/10">
              <img
                src={storyImg}
                alt="Cozy bakery interior with freshly baked bread on wooden shelves"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-square lg:aspect-[4/5]"
              />
            </div>
            <div className="absolute -right-4 -top-4 flex flex-col items-center justify-center rounded-2xl bg-bakery-brown px-6 py-5 text-bakery-cream shadow-card sm:-right-6 sm:-top-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bakery-golden-light">Since</span>
              <span className="font-serif text-4xl font-bold leading-none">1963</span>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={120}>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bakery-golden-dark">
              Our Story
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-bakery-brown sm:text-4xl lg:text-5xl text-balance">
              A local legacy, one bake at a time.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-bakery-ink-soft sm:text-lg">
              <p>
                For generations, Vijaya Bakery has been a familiar name in Malvan.
                What began decades ago continues with the same love for fresh bakery
                favourites and quality ingredients.
              </p>
              <p>
                From everyday biscuits to special cakes, every visit is meant to bring
                back the taste you remember.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/70 p-4 text-center shadow-soft ring-1 ring-bakery-beige/60 sm:p-5"
                >
                  <div className="font-serif text-2xl font-bold text-bakery-brown sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-bakery-ink-soft sm:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* faint heritage tag */}
      <p className="sr-only">
        {bakery.name} — {bakery.location}, established {bakery.established}.
      </p>
    </section>
  );
}
