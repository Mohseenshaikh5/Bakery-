import Reveal from '@/components/Reveal';
import { products, waLink, type Product } from '@/data/bakery';

export default function Products() {
  return (
    <section id="products" className="bg-bakery-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bakery-golden-dark">
            Our Favourites
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-bakery-brown sm:text-4xl lg:text-5xl text-balance">
            Made with love, baked fresh.
          </h2>
          <p className="mt-4 text-base text-bakery-ink-soft sm:text-lg">
            A glimpse of the treats customers keep coming back for.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-bakery-beige/60 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {product.popular && (
          <span className="absolute left-4 top-4 rounded-full bg-bakery-golden px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-soft">
            Popular
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-bakery-brown">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-bakery-ink-soft">
          {product.description}
        </p>
        <a
          href={waLink(`Hello, I would like to enquire about ${product.name} from Vijaya Bakery.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-bakery-brown/15 bg-bakery-cream px-4 py-2 text-sm font-semibold text-bakery-brown transition-all duration-300 hover:bg-bakery-brown hover:text-bakery-cream"
        >
          Enquire
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </article>
  );
}
