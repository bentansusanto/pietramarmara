export interface Product {
  slug: string
  title: string
  category: string
  description: string
  image: string
  badge: string | null
}

export const products: Product[] = [
  {
    slug: 'marmer-carrara-premium',
    title: 'Carrara White Premium',
    category: 'Natural Stone',
    description: 'High-quality white marble from Italy with elegant grey veins.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    badge: 'Best Seller',
  },
  {
    slug: 'marmer-calacatta-gold',
    title: 'Calacatta Gold',
    category: 'Natural Stone',
    description: 'Exclusive marble with soft gold veins for luxury interiors.',
    image:
      'https://images.unsplash.com/photo-1584403293325-756fc1786516?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Premium',
  },
  {
    slug: 'granit-black-galaxy',
    title: 'Black Galaxy Granite',
    category: 'Natural Stone',
    description: 'Black granite with sparkling crystal specks, scratch and heat resistant.',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800',
    badge: 'Export Quality',
  },
  {
    slug: 'travertine-ivory-classic',
    title: 'Travertine Ivory Classic',
    category: 'Natural Stone',
    description: 'Ivory colored travertine with soft texture for walls and floors.',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800',
    badge: null,
  },
  {
    slug: 'kopi-arabika-gayo',
    title: 'Gayo Arabica Coffee',
    category: 'Plantation',
    description: 'Premium arabica coffee from Gayo highlands with floral aroma.',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    badge: 'Export Quality',
  },
  {
    slug: 'teh-hijau-premium',
    title: 'Premium Green Tea',
    category: 'Plantation',
    description: 'Selected green tea leaves with fresh taste and distinct aroma.',
    image:
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=800',
    badge: null,
  },
  {
    slug: 'beras-organik-prima',
    title: 'Prima Organic Rice',
    category: 'Food Crops',
    description: 'Best quality organic rice for industrial and retail needs.',
    image:
      'https://images.unsplash.com/photo-1504309250229-4f08315f3b5c?auto=format&fit=crop&q=80&w=800',
    badge: 'Best Seller',
  },
  {
    slug: 'jagung-manis-segar',
    title: 'Fresh Sweet Corn',
    category: 'Food Crops',
    description: 'Fresh sweet corn from best harvest with premium quality.',
    image:
      'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=800',
    badge: null,
  },
  {
    slug: 'madu-hutan-liar',
    title: 'Wild Forest Honey',
    category: 'Other Resources',
    description: 'Pure wild honey harvested sustainably from deep forests.',
    image:
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
    badge: 'Organic',
  },
  {
    slug: 'susu-sapi-segar',
    title: 'Fresh Cow Milk',
    category: 'Livestock',
    description: 'Fresh cow milk processed with high hygiene standards.',
    image:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800',
    badge: null,
  },
]
