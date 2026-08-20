import { Heart, MapPin, Sparkles, Star } from 'lucide-react';
import Reveal from '@/components/Reveal';

const features = [
  {
    icon: Heart,
    title: 'Trusted Legacy',
    text: 'Serving Malvan for generations.',
  },
  {
    icon: Sparkles,
    title: 'Fresh Bakery',
    text: 'Freshly baked everyday favourites.',
  },
  {
    icon: Star,
    title: 'Loved Locally',
    text: 'A favourite among customers.',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    text: 'Easy to find in Somwar Peth, Malvan.',
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-bakery-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-bakery-brown sm:text-4xl lg:text-5xl text-balance">
            More than a bakery.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 90}>
                <article className="group h-full rounded-3xl bg-white p-7 text-center shadow-soft ring-1 ring-bakery-beige/60 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-bakery-cream text-bakery-brown ring-1 ring-bakery-golden/30 transition-colors duration-400 group-hover:bg-bakery-brown group-hover:text-bakery-cream">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-bakery-brown">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bakery-ink-soft">
                    {f.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
