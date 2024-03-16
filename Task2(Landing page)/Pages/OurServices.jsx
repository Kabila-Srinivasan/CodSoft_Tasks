import React from 'react';
import ServiceBox from './OurServicesBox';
import '../assets/OurServices.css';

const OurServices = () => {
  const backgroundStylas = {
    backgroundImage: "url('https://img.freepik.com/free-vector/realistic-bokeh-background_23-2149336423.jpg?size=626&ext=jpg&ga=GA1.1.623741277.1686718373&semt=ais')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '160vh',
    width: '100vw',
    margin: 0,
  };
  const services = [
    {
      title: 'Refrigerator Repair',
      description: 'We provide expert repair services for all refrigerator brands.',
      imageUrl: 'https://media.istockphoto.com/id/1479343625/photo/cozy-retro-kitchen-interior-with-a-red-fridge.jpg?s=2048x2048&w=is&k=20&c=kdzCqwLhfNjbEW622vW4uZkbfPzqIt1d9NKV4Nh_cRU=',
    },
    {
      title: 'Washing Machine Service',
      description: 'Efficient and reliable washing machine repair and maintenance.',
      imageUrl: 'https://st2.depositphotos.com/3662505/5978/i/450/depositphotos_59786243-stock-photo-washing.jpg',
    },
    
    {
      title: 'Microwave Repair',
      description: 'Professional microwave repair and servicing.',
      imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/microsite/microwave/2018/product-fruit-dry.png?$ORIGIN_PNG$',
    },
    {
      title: 'Dishwasher Service',
      description: 'Specialized dishwasher repair and maintenance.',
      imageUrl: 'https://media.istockphoto.com/id/900815924/video/two-videos-of-woman-putting-dirty-dishes-to-the-dishwasher-in-4k.jpg?s=480x480&k=20&c=uzOjaQWAemIQhuVad0nY9JNsy9x5GIpzOqmM0DZkQhM=',
    },
    {
      title: 'Dryer Maintenance',
      description: 'Thorough dryer repair and maintenance solutions.',
      imageUrl: 'https://img.freepik.com/free-photo/high-angle-man-working-as-plumber_23-2150746327.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais',
    },
    // Add more service objects as needed...
    {
      title: 'Oven Repair',
      description: 'Comprehensive oven repair and servicing for all types.',
      imageUrl: 'https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176714.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699747200&semt=ais',
    },
    {
      title: 'Air Conditioner Service',
      description: 'Reliable air conditioner repair and maintenance.',
      imageUrl: 'https://img.freepik.com/premium-photo/worker-repairing-ceiling-air-conditioning-unit_85869-7023.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais',
    },
    {
      title: 'Water Heater Repair',
      description: 'Efficient water heater repair services.',
      imageUrl: 'https://img.freepik.com/premium-photo/repair-gas-boiler_93200-2591.jpg',
    },
    {
      title: 'Vacuum Cleaner Maintenance',
      description: 'Quality vacuum cleaner repair and maintenance.',
      imageUrl: 'https://media.istockphoto.com/id/912665056/photo/young-man-looking-at-broken-vacuum-cleaner-and-fixing-it-at-home.jpg?s=612x612&w=0&k=20&c=z06ZoA7Tqt5-5AE_-zhNiKeWE_ymSiOzQFLkpmB3Qag=',
    },
    {
      title: 'Small Appliance Repairs',
      description: 'Specialized repairs for various small home appliances.',
      imageUrl: 'https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s=',
    },
    // Add more service objects as needed...
  ];

  return (
    <div style={backgroundStylas}>
    <div className="our-services">
      <h2>Our Services</h2>
      <br/>
      <div className="service-boxes">
        {services.map((service, index) => (
          <ServiceBox
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurServices;
