const products = [
  {
    id: 1,
    name: "Oversized Street Tee",
    price: 1200,
    rating: 4.7,
    fabric: "Cotton",
    limited: true,
    sustainable: false,
    image: "https://pixabay.com/illustrations/tshirt-shirt-t-shirt-fashion-man-8726716/"
  },
  {
    id: 2,
    name: "Minimal White Tee",
    price: 800,
    rating: 4.2,
    fabric: "Linen",
    limited: false,
    sustainable: true,
    image: "https://source.unsplash.com/400x500/?tshirt,white"
  },
  {
    id: 3,
    name: "Rare Hemp Edition",
    price: 1800,
    rating: 4.9,
    fabric: "Hemp",   // rare fabric filter
    limited: true,
    sustainable: true,
    image: "https://source.unsplash.com/400x500/?tshirt,green"
  }
];

export default products;