import Reveal from '@/components/Reveal';
import { products, waLink, type Product } from '@/data/bakery';

const featuredNames = ['Mawa Cake', 'Cashew Cookies', 'Sponge Cake'];
const featured = products
  .filter((p) => featuredNames.includes(p.name))
  .map((p) =>
    p.name === 'Mawa Cake' || p.name === 'Cashew Cookies'
      ? { ...p, popular: true }
      : p
  );

export default function Featured() {
  return (
    <section className="relative overflow-hidden bg-bakery-brown py-20 text-bakery-cream sm:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-bakery-golden/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-bakery-brown-light/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bakery-golden-light">
            Specials
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            Signature treats, loved for decades.
          </h2>
          <p className="mt-4 text-bakery-beige/80 sm:text-lg">
            Three favourites our customers never leave without.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <FeaturedCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  return (
    <article className="group relative h-96 overflow-hidden rounded-3xl shadow-card">
      <img
        src={product.image}
        alt={product.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bakery-brown-dark via-bakery-brown/40 to-transparent" />
      {product.popular && (
        <span className="absolute left-4 top-4 rounded-full bg-bakery-golden px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-soft">
          Popular
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-serif text-2xl font-semibold text-bakery-cream">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-bakery-beige/90">
          {product.description}
        </p>
        <a
          href={waLink(`Hello, I would like to enquire about ${product.name} from Vijaya Bakery.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-bakery-cream px-4 py-2 text-sm font-semibold text-bakery-brown transition-all duration-300 hover:bg-bakery-golden hover:text-white"
        >
          Enquire
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </article>
  );
}
