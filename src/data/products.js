const pexelsImage = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`

export const products = [
  {
    id: 1,
    name: 'Red Chili Powder',
    category: 'Spices',
    description:
      'Premium red chili powder with deep color, balanced heat, and a clean aroma for daily cooking and wholesale kitchens.',
    image: pexelsImage('33440713'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/close-up-of-chili-powder-and-red-chili-pepper-33440713/',
    price: 'Rs. 450/kg',
  },
  {
    id: 2,
    name: 'Turmeric Powder',
    category: 'Spices',
    description:
      'Bright, finely ground turmeric selected for rich color and a warm earthy profile in traditional Pakistani dishes.',
    image: pexelsImage('6104651'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/close-up-shot-of-turmeric-powder-6104651/',
    price: 'Rs. 280/kg',
  },
  {
    id: 3,
    name: 'Cumin Seeds (Jeera)',
    category: 'Spices',
    description:
      'Whole cumin seeds with a strong aroma, ideal for tempering, spice blends, biryani, and restaurant supply.',
    image: pexelsImage('35809378'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/close-up-of-cumin-seeds-on-a-spoon-35809378/',
    price: 'Rs. 350/kg',
  },
  {
    id: 4,
    name: 'Coriander Seeds',
    category: 'Spices',
    description:
      'Clean coriander seeds with citrusy warmth, suitable for grinding fresh or using whole in regional recipes.',
    image: pexelsImage('10487771'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/coriander-seeds-10487771/',
    price: 'Rs. 320/kg',
  },
  {
    id: 5,
    name: 'Basmati Rice',
    category: 'Commodities',
    description:
      'Long-grain basmati rice with excellent texture and aroma for biryani, pulao, catering, and retail packing.',
    image: 'https://cdn.pixabay.com/photo/2021/08/27/11/47/basmati-rice-6578507_1280.jpg',
    sourceName: 'Pixabay',
    sourceUrl: 'https://pixabay.com/photos/basmati-rice-rice-rice-grains-food-6578507/',
    price: 'Rs. 180/kg',
  },
  {
    id: 6,
    name: 'Red Lentils (Masoor)',
    category: 'Commodities',
    description:
      'Protein-rich red lentils cleaned for daily cooking, bulk kitchens, grocery resale, and packaged supply.',
    image: pexelsImage('34940649'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/close-up-of-dried-red-lentils-in-bulk-34940649/',
    price: 'Rs. 220/kg',
  },
  {
    id: 7,
    name: 'Chickpeas (Chana)',
    category: 'Commodities',
    description:
      'Premium chickpeas with consistent size and texture for chana masala, snacks, flour mills, and wholesale trade.',
    image: pexelsImage('7717474'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/close-up-shot-of-chickpeas-7717474/',
    price: 'Rs. 190/kg',
  },
  {
    id: 8,
    name: 'Black Tea',
    category: 'Beverages',
    description:
      'Loose black tea selected for strong color and flavor, perfect for Pakistani chai blends and commercial use.',
    image: pexelsImage('17751258'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/close-up-of-black-tea-leaves-17751258/',
    price: 'Rs. 560/kg',
  },
  {
    id: 9,
    name: 'Garam Masala Mix',
    category: 'Spices',
    description:
      'Balanced whole-spice masala mix for curries, rice dishes, marinades, and restaurants needing dependable flavor.',
    image: pexelsImage('2802527'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/assorted-cooking-spices-2802527/',
    price: 'Rs. 380/kg',
  },
  {
    id: 10,
    name: 'Yellow Dal (Moong)',
    category: 'Commodities',
    description:
      'Everyday yellow dal with a clean finish and reliable cooking texture for homes, caterers, and retailers.',
    image: pexelsImage('34940648'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/close-up-of-vibrant-orange-lentils-34940648/',
    price: 'Rs. 240/kg',
  },
  {
    id: 11,
    name: 'Whole Black Mustard Seeds',
    category: 'Spices',
    description:
      'Sharp, aromatic mustard seeds for pickles, tempering, spice blends, and traditional South Asian cooking.',
    image: pexelsImage('5988321'),
    sourceName: 'Pexels',
    sourceUrl: 'https://www.pexels.com/photo/mustard-seeds-on-a-black-surface-5988321/',
    price: 'Rs. 320/kg',
  },
  {
    id: 12,
    name: 'White Basmati Rice Premium',
    category: 'Commodities',
    description:
      'Extra-long grain white basmati rice chosen for aroma, grain length, and presentation in premium dishes.',
    image: 'https://cdn.pixabay.com/photo/2021/08/27/11/47/basmati-rice-6578507_1280.jpg',
    sourceName: 'Pixabay',
    sourceUrl: 'https://pixabay.com/photos/basmati-rice-rice-rice-grains-food-6578507/',
    price: 'Rs. 200/kg',
  },
]
