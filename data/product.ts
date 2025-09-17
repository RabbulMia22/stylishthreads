const products = [
  // Men's Products
  {
    id: 'm1',
    title: 'Classic Fit Oxford Shirt',
    description: 'A timeless oxford shirt with a comfortable classic fit. Perfect for both casual and semi-formal occasions.',
    price: 49.99,
    category: 'men',
    subcategory: 'shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Light Blue'],
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
      'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'
    ],
    rating: 4.5,
    featured: true
  },
  {
    id: 'm2',
    title: 'Slim Fit Chino Pants',
    description: 'Modern slim fit chinos made from premium cotton twill. Versatile and comfortable for everyday wear.',
    price: 59.99,
    category: 'men',
    subcategory: 'pants',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Olive', 'Black'],
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    ],
    rating: 4.3,
    featured: false
  },
  {
    id: 'm3',
    title: 'Wool Blend Overcoat',
    description: 'A sophisticated wool blend overcoat with a modern cut. Perfect for colder weather and formal occasions.',
    price: 149.99,
    category: 'men',
    subcategory: 'outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Camel', 'Navy'],
    images: [
      'https://images.unsplash.com/photo-1608236415053-3691791bbffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    ],
    rating: 4.8,
    featured: true
  },
  {
    id: 'm4',
    title: 'Premium Cotton T-Shirt',
    description: 'Ultra-soft premium cotton t-shirt with a comfortable fit. A wardrobe essential for any season.',
    price: 24.99,
    category: 'men',
    subcategory: 'tshirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Navy', 'Burgundy'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    ],
    rating: 4.2,
    featured: false
  },
  {
    id: 'm5',
    title: 'Denim Jacket',
    description: 'Classic denim jacket with a modern fit. Perfect for layering in any season.',
    price: 79.99,
    category: 'men',
    subcategory: 'outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      'https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    ],
    rating: 4.6,
    featured: true
  },
  {
    id: 'm6',
    title: 'Merino Wool Sweater',
    description: 'Luxurious merino wool sweater that provides warmth without bulk. Perfect for cooler days.',
    price: 89.99,
    category: 'men',
    subcategory: 'sweaters',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Navy', 'Burgundy', 'Forest Green'],
    images: [
      'https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1638462922438-8e37c6d10859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
    ],
    rating: 4.7,
    featured: false
  },

  // Women's Products
  {
    id: 'w1',
    title: 'Floral Print Midi Dress',
    description: 'Elegant floral print midi dress with a flattering silhouette. Perfect for spring and summer occasions.',
    price: 69.99,
    category: 'women',
    subcategory: 'dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue Floral', 'Pink Floral', 'Yellow Floral'],
    images: [
      'https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    rating: 4.8,
    featured: true
  },
  {
    id: 'w2',
    title: 'High-Waisted Skinny Jeans',
    description: 'Flattering high-waisted skinny jeans with a comfortable stretch. A versatile addition to any wardrobe.',
    price: 59.99,
    category: 'women',
    subcategory: 'pants',
    sizes: ['24', '26', '28', '30', '32'],
    colors: ['Light Blue', 'Dark Blue', 'Black', 'White'],
    images: [
      'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    ],
    rating: 4.5,
    featured: false
  },
  {
    id: 'w3',
    title: 'Oversized Knit Cardigan',
    description: 'Cozy oversized knit cardigan perfect for layering. Adds warmth and style to any outfit.',
    price: 79.99,
    category: 'women',
    subcategory: 'sweaters',
    sizes: ['S/M', 'L/XL'],
    colors: ['Cream', 'Gray', 'Blush Pink', 'Sage Green'],
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80',
      'https://images.unsplash.com/photo-1628602040839-9c6ee94c5d9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    rating: 4.7,
    featured: true
  },
  {
    id: 'w4',
    title: 'Silk Blouse',
    description: 'Luxurious silk blouse with a relaxed fit. Elevates any outfit for work or special occasions.',
    price: 89.99,
    category: 'women',
    subcategory: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Blush', 'Navy'],
    images: [
      'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBzaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D'
    ],
    rating: 4.6,
    featured: false
  },
  {
    id: 'w5',
    title: 'Tailored Blazer',
    description: 'Sophisticated tailored blazer that adds polish to any outfit. Perfect for professional settings.',
    price: 99.99,
    category: 'women',
    subcategory: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Beige', 'Burgundy'],
    images: [
      'https://plus.unsplash.com/premium_photo-1658506871173-7498f5371ed1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    rating: 4.8,
    featured: true
  },
  {
    id: 'w6',
    title: 'Pleated Midi Skirt',
    description: 'Elegant pleated midi skirt with a flowing silhouette. Versatile for both casual and dressy occasions.',
    price: 49.99,
    category: 'women',
    subcategory: 'skirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Cream', 'Dusty Rose', 'Forest Green'],
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      'https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    rating: 4.4,
    featured: false
  }
];

export default products; 