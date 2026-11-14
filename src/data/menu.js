// ====== BRAND / CONTACT ======
export const brand = {
  name: 'The Shack',
  tagline: 'Come Hungry, Leave Happy',
  phone: '0311 6666926',
  phoneRaw: '03116666926',
  whatsapp: '923116666926', // international format for wa.me links
  address: '3 Broadway Commercial Park, View City, Lahore',
  delivery: 'Free Home Delivery',
}

export const fmtPrice = (n) => 'Rs. ' + Number(n).toLocaleString('en-PK')

// Optional add-ons a customer can attach to any item
export const addonOptions = [
  { id: 'cheese-slice', name: 'Cheese Slice', price: 50 },
  { id: 'extra-bread', name: 'Extra Bread', price: 50 },
  { id: 'extra-dip', name: 'Extra Dip', price: 90 },
  { id: 'ranch', name: 'Ranch Dip', price: 90 },
  { id: 'chipotle', name: 'Chipotle Dip', price: 90 },
  { id: 'honey-mustard', name: 'Honey Mustard Dip', price: 90 },
  { id: 'jalapeno', name: 'Jalapeño Dip', price: 90 },
  { id: 'garlic', name: 'Garlic Dip', price: 90 },
]

// ====== HIGHLIGHT / SPECIAL BANNERS ======
// image paths are relative; prefix with import.meta.env.BASE_URL when rendering
export const specials = [
  {
    img: 'images/special-fish.jpg',
    title: 'Fish & Chips + Fish Burger',
    blurb: 'Crispy fish, golden fries & a perfect fishy bite.',
    items: [
      { name: 'Fish & Chips', price: 1100 },
      { name: 'Fish Burger', price: 750 },
    ],
  },
  {
    img: 'images/special-habibi.jpg',
    title: 'Habibi Range',
    blurb: 'Crunchy Habibi burgers, nuggets & chips — the fan favourite.',
    items: [
      { name: 'Habibi Burger Single', price: 400 },
      { name: 'Habibi Burger Duo', price: 650 },
      { name: 'Habibi Nug & Chips', price: 650 },
    ],
  },
]

// ====== MENU CATEGORIES ======
// variants: used for multi-size pricing (e.g. Small/Medium/Large)
export const categories = [
  {
    id: 'burgers',
    name: 'Burgers',
    emoji: '🍔',
    tagline: 'Smashed, zinged & stacked',
    items: [
      { name: 'Chicken Burger', price: 500 },
      { name: 'Zinger Burger', price: 400 },
      { name: 'Fillet Burger', price: 500 },
      { name: 'Signature Dunk Burger', price: 500 },
      { name: 'Signature Fillet', price: 600 },
      { name: 'Grilled Chicken Burger', price: 600 },
      { name: 'Beef Smash Burger', price: 550 },
      { name: 'Chicken Patty Burger', price: 250 },
      { name: 'Shami Burger', price: 200 },
    ],
  },
  {
    id: 'pizza',
    name: 'Regular Pizza',
    emoji: '🍕',
    tagline: 'Hand-tossed, loaded with cheese',
    sizes: ['Small', 'Medium', 'Large'],
    variantItems: [
      { name: 'Tikka', prices: [550, 1150, 1550] },
      { name: 'Fajita', prices: [550, 1150, 1550] },
      { name: 'Supreme', prices: [550, 1150, 1550] },
      { name: 'Cheese Lover', prices: [550, 1150, 1550] },
      { name: 'Malai Boti', prices: [550, 1150, 1550] },
      { name: 'Mexican', prices: [550, 1150, 1550] },
    ],
    note: 'Extra Cheese — Small Rs. 100 · Medium Rs. 150 · Large Rs. 200',
  },
  {
    id: 'special-pizza',
    name: 'Special Pizza',
    emoji: '⭐',
    tagline: 'Our premium signature pies',
    sizes: ['Medium', 'Large'],
    variantItems: [
      { name: 'Shack Special Lasagna', prices: [1350, 1750] },
      { name: 'Shack-Fire Peri Peri', prices: [1350, 1750] },
      { name: 'Pepperoni Special', prices: [1350, 1750] },
      { name: 'Crown Crust', prices: [1350, 1750] },
    ],
    note: 'Extra Cheese — Medium Rs. 150 · Large Rs. 200',
  },
  {
    id: 'shawarmas',
    name: 'Shawarmas',
    emoji: '🌯',
    tagline: 'Rolled, grilled & spiced right',
    items: [
      { name: 'Chicken Shawarma', price: 349 },
      { name: 'Grilled Shawarma', price: 399 },
      { name: 'Zinger Shawarma', price: 400 },
      { name: 'Shack Special Shawarma Platter (Grill / Tikka)', price: 600 },
    ],
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    emoji: '🥪',
    tagline: 'Toasted & packed with filling',
    items: [
      { name: 'Chicken Club Sandwich', price: 600 },
      { name: 'Chicken Tikka Sandwich', price: 450 },
      { name: 'Chicken Fajita Sandwich', price: 450 },
      { name: 'Cold Sandwich', price: 300 },
    ],
  },
  {
    id: 'wings',
    name: 'Wings',
    emoji: '🍗',
    tagline: 'Saucy, sticky & addictive',
    sizes: ['5 pcs', '8 pcs'],
    variantItems: [
      { name: 'Plain Wings', prices: [425, 650] },
      { name: 'Honey Glazed Wings', prices: [500, 750] },
    ],
    note: 'Flavours available — Dynamite · Buffalo',
  },
  {
    id: 'tenders',
    name: 'Tenders',
    emoji: '🍖',
    tagline: 'Crispy chicken strips (4 pcs)',
    items: [
      { name: 'Plain Chicken Tenders', price: 500 },
      { name: 'Hot Honey Glazed Tenders', price: 600 },
      { name: 'Buffalo Tenders', price: 600 },
      { name: 'Dynamite Tenders', price: 600 },
    ],
  },
  {
    id: 'nuggets',
    name: 'Nuggets',
    emoji: '🍟',
    tagline: 'Golden bites by the box',
    sizes: ['6 pcs', '10 pcs'],
    variantItems: [
      { name: 'Chicken Nuggets', prices: [400, 650] },
      { name: 'Arabian Nuggets', prices: [550, 900] },
    ],
  },
  {
    id: 'wraps',
    name: 'Wraps',
    emoji: '🫔',
    tagline: 'Rolled up & ready to go',
    items: [
      { name: 'Fillet Wrap', price: 650 },
      { name: 'Arabian Nugget Wrap', price: 600 },
    ],
  },
  {
    id: 'pastas',
    name: 'Pastas',
    emoji: '🍝',
    tagline: 'Creamy, sizzling & comforting',
    items: [
      { name: 'Sizzling Hot Pasta', price: 700 },
      { name: 'Shack Special Pasta', price: 700 },
    ],
  },
  {
    id: 'fries',
    name: 'Fries',
    emoji: '🍟',
    tagline: 'Hot, crispy & seasoned',
    items: [
      { name: 'Salted Fries', price: 200 },
      { name: 'Masala Fries', price: 200 },
      { name: 'Curly Special Fries', price: 350 },
      { name: 'Loaded Fries', price: 700 },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    emoji: '🥤',
    tagline: 'Keep it cool & refreshing',
    items: [
      { name: 'Soft Drink — 345 ml', price: 75 },
      { name: 'Soft Drink — 500 ml', price: 120 },
      { name: 'Soft Drink — 1 Litre', price: 150 },
      { name: 'Soft Drink — 1.5 Litre', price: 185 },
      { name: 'Mineral Water — 500 ml', price: 60 },
      { name: 'Mineral Water — 1.5 Litre', price: 120 },
    ],
  },
  {
    id: 'dips',
    name: 'Dips & Extras',
    emoji: '🧂',
    tagline: 'Finish it just right',
    items: [
      { name: 'Ranch Dip', price: 90 },
      { name: 'Chipotle Dip', price: 90 },
      { name: 'Honey Mustard Dip', price: 90 },
      { name: 'Jalapeño Dip', price: 90 },
      { name: 'Garlic Dip', price: 90 },
      { name: 'Cheese Slice', price: 50 },
      { name: 'Extra Bread', price: 50 },
      { name: 'Extra Dip', price: 90 },
    ],
  },
]

// ====== DEALS ======
export const deals = [
  {
    no: 1,
    name: 'Kids Masti',
    price: 475,
    items: ['Chicken Patty Burger / 4 Nuggets', 'Regular Fries', '345ml Soft Drink'],
  },
  {
    no: 2,
    name: 'Zinger Combo',
    price: 560,
    items: ['Zinger Burger', 'Regular Fries', '345ml Soft Drink'],
  },
  {
    no: 3,
    name: 'Pizza & Pasta Combo',
    price: 1250,
    items: ['Small Regular Pizza (Any Flavor)', 'Pasta (Any Flavor)', '500ml Soft Drink'],
  },
  {
    no: 4,
    name: 'Buddy Combo',
    price: 1050,
    items: ['2 Zinger Burgers', '1 Regular Fries', '2 × 345ml Soft Drinks'],
  },
  {
    no: 5,
    name: 'Pizza Duo',
    price: 2350,
    items: ['2 Medium Regular Pizzas', '1.5L Soft Drink'],
  },
  {
    no: 6,
    name: 'Burger Bonanza',
    price: 2850,
    items: [
      '2 Zinger Burgers',
      '1 Fillet Burger',
      '1 Beef Smash Burger',
      '1 Chicken Burger',
      '2 Regular Fries',
      '1.5L Soft Drink',
    ],
  },
  {
    no: 7,
    name: 'Arabian Family Combo',
    price: 3400,
    items: [
      '1 Large Regular Pizza',
      '2 Zinger Burgers',
      '8 Crispy Wings',
      '2 Regular Fries',
      '1.5L Soft Drink',
    ],
  },
  {
    no: 8,
    name: 'Special Feast Deal',
    price: 6200,
    items: ['2 Large Special Pizzas', '2 Medium Special Pizzas', '2 × 1.5L Soft Drinks'],
  },
  {
    no: 9,
    name: 'Premium Pizza Feast',
    price: 4150,
    items: ['2 Large Special Pizzas', 'Loaded Fries', '1.5L Soft Drink'],
  },
  {
    no: 10,
    name: 'Arabian Crunch Box',
    price: 2250,
    items: ['10 Arabian Nuggets', '8 Crispy Wings', 'Loaded Fries', '1.5L Soft Drink'],
  },
  {
    no: 11,
    name: 'Ultimate Family Feast',
    price: 3000,
    items: ['2 Large Regular Pizzas', '1.5L Soft Drink'],
  },
  {
    no: 12,
    name: 'Combo 4',
    price: 3150,
    items: [
      '2 Zinger Burgers',
      '2 Fillet Burgers',
      '8 Crispy Wings',
      '2 Regular Fries',
      '1.5L Soft Drink',
    ],
  },
]
