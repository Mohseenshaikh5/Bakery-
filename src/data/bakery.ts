export const bakery = {
  name: 'Vijaya Bakery',
  location: 'Malvan, Maharashtra',
  established: 1963,
  phone: '+91 72188 66400',
  phoneRaw: '917218866400',
  whatsapp: 'https://wa.me/917218866400',
  address: {
    line1: '1840, Dr Ballav Marg,',
    line2: 'Somwar Peth, Dhuriwada,',
    line3: 'Malvan, Maharashtra 416606',
  },
  rating: '4.5',
  reviews: '185+',
  instagram: 'https://instagram.com/vijayabakery_malvan',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=1840+Dr+Ballav+Marg+Somwar+Peth+Dhuriwada+Malvan+Maharashtra+416606',
};

export const waLink = (message: string) =>
  `https://wa.me/917218866400?text=${encodeURIComponent(message)}`;

export interface Product {
  name: string;
  description: string;
  image: string;
  alt: string;
  popular?: boolean;
}

export const products: Product[] = [
  {
    name: 'Mawa Cake',
    description: 'Rich, soft and full of classic bakery flavour.',
    image:
      'https://images.pexels.com/photos/6601712/pexels-photo-6601712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Soft slice of mawa cake on a white plate',
    popular: true,
  },
  {
    name: 'Cashew Cookies',
    description: 'Crunchy, buttery and perfect with your evening tea.',
    image:
      'https://images.pexels.com/photos/14288447/pexels-photo-14288447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Assorted cashew butter cookies in a tin',
    popular: true,
  },
  {
    name: 'Fresh Cakes',
    description: 'Delicious cakes for celebrations big and small.',
    image:
      'https://images.pexels.com/photos/1129510/pexels-photo-1129510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Assorted fresh cakes on display',
  },
  {
    name: 'Sponge Cake',
    description: 'Light, soft and freshly baked for every occasion.',
    image:
      'https://images.pexels.com/photos/1359322/pexels-photo-1359322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Slice of light sponge cake on a white plate',
    popular: true,
  },
  {
    name: 'Khari',
    description: 'Flaky, crisp and perfect with tea or coffee.',
    image:
      'https://images.pexels.com/photos/441486/pexels-photo-441486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Golden flaky khari pastries',
  },
  {
    name: 'Bakery Biscuits',
    description: 'Classic homemade-style biscuits made for every generation.',
    image:
      'https://images.pexels.com/photos/921715/pexels-photo-921715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Vintage tin filled with bakery biscuits',
  },
];

export const galleryImages: { src: string; alt: string }[] = [
  {
    src: 'https://images.pexels.com/photos/10507819/pexels-photo-10507819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pastries and cakes under glass domes on wooden stands',
  },
  {
    src: 'https://images.pexels.com/photos/19498989/pexels-photo-19498989.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Assorted pastries and croissants in a bakery showcase',
  },
  {
    src: 'https://images.pexels.com/photos/5657400/pexels-photo-5657400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Freshly baked artisan bread loaf on a wooden board',
  },
  {
    src: 'https://images.pexels.com/photos/13914952/pexels-photo-13914952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Tempting assortment of pastries in a bakery window',
  },
  {
    src: 'https://images.pexels.com/photos/12463133/pexels-photo-12463133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Cakes and pastries adorned with strawberries in a glass cabinet',
  },
  {
    src: 'https://images.pexels.com/photos/29380150/pexels-photo-29380150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Cozy bakery with freshly baked bread on wooden shelves',
  },
  {
    src: 'https://images.pexels.com/photos/8625940/pexels-photo-8625940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Cream-filled pastries dusted with sugar',
  },
  {
    src: 'https://images.pexels.com/photos/7543099/pexels-photo-7543099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Pile of freshly baked bread rolls with golden crusts',
  },
];

export const reviews = [
  {
    name: 'Rohit',
    text: 'Fresh products, great variety and the taste is amazing. One of my favourite bakery stops in Malvan.',
  },
  {
    name: 'Sneha',
    text: 'Their mawa cake reminds me of childhood. Always fresh and always warm — the kind of taste you remember for years.',
  },
  {
    name: 'Imran',
    text: 'A proper old-school bakery. Khari and biscuits with evening tea are a ritual here. Highly recommended.',
  },
];
