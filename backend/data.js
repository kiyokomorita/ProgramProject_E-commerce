import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Kiyoko',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Ramie Midi Dress',
      slug: 'ramie-midi-dress',
      category: 'Dress',
      image: '/images/p15.webp', //679px x 829px
      price: 300,
      countInStock: 10,
      brand: 'Banana',
      rating: 4.5,
      numReviews: 10,
      description: 'hight quality product',
    },
    {
      // _id: '2',
      name: 'Pleated Maxi Dress',
      slug: 'pleated-maxi-dress',
      category: 'Dress',
      image: '/images/p16.webp',
      price: 250,
      countInStock: 0,
      brand: 'Zara',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality dress',
    },
    {
      // _id: '3',
      name: 'Straight Ankle Jean',
      slug: 'straight-ankle-jean',
      category: 'Pants',
      image: '/images/p14.webp',
      price: 110,
      countInStock: 15,
      brand: 'Zara',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Wide-Leg Crop Jean',
      slug: 'wide-leg-crop-jean',
      category: 'Pants',
      image: '/images/p17.webp',
      price: 140,
      countInStock: 5,
      brand: 'banana',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};

export default data;
