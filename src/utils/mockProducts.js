import smartWatch from '../assets/products/smart-watch.png';
import headphones from '../assets/products/headphones.png';
import ring from '../assets/products/ring.png';
import summerDress from '../assets/products/summer-dress.png';
import navySuit from '../assets/products/navy-suit.png';
import leatherJacket from '../assets/products/leather-jacket.png';

export const mockProducts = [
  {
    id: 101,
    title: "Pro Series Smart Watch v8",
    price: 15999,
    description: "Experience the next level of wearable technology with our Pro Series Smart Watch. Features include heart rate monitoring, GPS, and a stunning AMOLED display.",
    category: "electronics",
    image: smartWatch,
    rating: { rate: 4.8, count: 120 }
  },
  {
    id: 102,
    title: "Aura Noise Cancelling Headphones",
    price: 12499,
    description: "Immerse yourself in pure sound with Aura. Industry-leading noise cancellation and 40-hour battery life for the ultimate listening experience.",
    category: "electronics",
    image: headphones,
    rating: { rate: 4.7, count: 85 }
  },
  {
    id: 103,
    title: "Eternity Diamond Ring",
    price: 45000,
    description: "A timeless symbol of love. Handcrafted in 18k white gold with brilliant-cut diamonds, perfect for special moments.",
    category: "jewelery",
    image: ring,
    rating: { rate: 4.9, count: 42 }
  },
  {
    id: 104,
    title: "Floral Breeze Summer Midi Dress",
    price: 2499,
    description: "Stay cool and stylish this summer with our Floral Breeze Midi Dress. Lightweight fabric and elegant floral patterns for every occasion.",
    category: "women's clothing",
    image: summerDress,
    rating: { rate: 4.5, count: 110 }
  },
  {
    id: 105,
    title: "Classic Navy Slim-Fit Suit",
    price: 18999,
    description: "A sharp, modern silhouette for the discerning gentleman. Made from premium wool blend fabric, perfect for weddings, business, or formal events.",
    category: "men's clothing",
    image: navySuit,
    rating: { rate: 4.8, count: 64 }
  },
  {
    id: 106,
    title: "Vintage Brown Leather Jacket",
    price: 14500,
    description: "Timeless style meets rugged durability. Hand-treated genuine leather with a soft inner lining, designed to get better with age.",
    category: "men's clothing",
    image: leatherJacket,
    rating: { rate: 4.7, count: 92 }
  }
];
