import React from 'react';
import ProductItem from './ProductItem';

const Cart= () => {
  const products = [
    {
      id: 1,
      name: 'Fridge',
      imageUrl: 'https://media.istockphoto.com/id/1479343625/photo/cozy-retro-kitchen-interior-with-a-red-fridge.jpg?s=2048x2048&w=is&k=20&c=kdzCqwLhfNjbEW622vW4uZkbfPzqIt1d9NKV4Nh_cRU=',
    },
    {
      id: 2,
      name: 'Washing Machine',
      imageUrl: 'https://st2.depositphotos.com/3662505/5978/i/450/depositphotos_59786243-stock-photo-washing.jpg',
    },
    {
      id: 3,
      name: 'Oven',
      imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/microsite/microwave/2018/product-fruit-dry.png?$ORIGIN_PNG$',
    },
    {
      id: 4,
      name: 'Air Cooler',
      imageUrl: 'https://img.freepik.com/premium-photo/worker-repairing-ceiling-air-conditioning-unit_85869-7023.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais',
    },
    {
      id: 5,
      name: 'AC',
      imageUrl: 'https://img.freepik.com/premium-photo/worker-repairing-ceiling-air-conditioning-unit_85869-7023.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais',
    },
    {
      id: 6,
      name: 'Water Heater',
      imageUrl: 'https://img.freepik.com/premium-photo/repair-gas-boiler_93200-2591.jpg',
    },
    {
      id: 7,
      name: 'Induction Stove',
      imageUrl: 'https://img.freepik.com/premium-photo/repair-gas-boiler_93200-2591.jpg',
    },
    {
      id: 8,
      name: 'TV',
      imageUrl: 'https://img.freepik.com/premium-photo/repair-gas-boiler_93200-2591.jpg',
    },
    {
      id: 9,
      name: 'Microwave',
      imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/microsite/microwave/2018/product-fruit-dry.png?$ORIGIN_PNG$',
    },
    {
      id: 10,
      name: 'Dishwasher',
      imageUrl: 'https://media.istockphoto.com/id/900815924/video/two-videos-of-woman-putting-dirty-dishes-to-the-dishwasher-in-4k.jpg?s=480x480&k=20&c=uzOjaQWAemIQhuVad0nY9JNsy9x5GIpzOqmM0DZkQhM=',
    },
  ];

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
