const products = [
  {
    id: 1,
    name: "Oversized Street Tee",
    price: 1200,
    rating: 4.7,
    fabric: "Cotton",
    limited: true,
    sustainable: false,
    image: "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg"
  },
  {
    id: 2,
    name: "Minimal White Tee",
    price: 800,
    rating: 4.2,
    fabric: "Linen",
    limited: false,
    sustainable: true,
    image: "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg"
  },
  {
    id: 3,
    name: "Rare Hemp Edition",
    price: 1800,
    rating: 4.9,
    fabric: "Hemp",   // rare fabric filter
    limited: true,
    sustainable: true,
    image: "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg"
  }
];

export default products;