import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { bakery } from '@/data/bakery';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bakery-cream/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" aria-label="Vijaya Bakery home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bakery-brown text-bakery-cream shadow-soft ring-2 ring-bakery-golden/40">
            <span className="font-serif text-2xl font-bold leading-none">V</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-bakery-brown sm:text-xl">
              Vijaya Bakery
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-bakery-golden-dark">
              Malvan · Since 1963
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-bakery-ink-soft transition-colors hover:text-bakery-brown after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-bakery-golden after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Call button + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:+${bakery.phoneRaw}`}
            className="hidden items-center gap-2 rounded-full bg-bakery-brown px-5 py-2.5 text-sm font-semibold text-bakery-cream shadow-soft transition-all duration-300 hover:bg-bakery-brown-dark hover:shadow-card sm:flex"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-bakery-brown text-bakery-cream shadow-soft transition hover:bg-bakery-brown-dark lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-bakery-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col bg-bakery-cream shadow-card transition-transform duration-400 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-bakery-beige px-6 py-4">
            <span className="font-serif text-lg font-semibold text-bakery-brown">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-bakery-beige text-bakery-brown transition hover:bg-bakery-golden/30"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-4 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 font-serif text-lg text-bakery-brown transition hover:bg-bakery-beige/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto px-6 pb-8">
            <a
              href={`tel:+${bakery.phoneRaw}`}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-bakery-brown px-5 py-3.5 text-sm font-semibold text-bakery-cream shadow-soft transition hover:bg-bakery-brown-dark"
            >
              <Phone className="h-4 w-4" />
              {bakery.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
