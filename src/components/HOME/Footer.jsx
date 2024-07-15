import React from 'react';

const footerItems = [
  {
    title: 'Icons',
    links: [
      'Air Force 1',
      'Huarache',
      'Air Max 90',
      'Air Max 95',
      'Air Max 97',
      'Air Max 270',
      'Air Max 720',
      'All Air Max',
    ],
  },
  {
    title: 'Shoes',
    links: [
      'All Shoes',
      'Custom Shoes',
      'Jordan Shoes',
      'Running Shoes',
      'Basketball Shoes',
      'Football Shoes',
      'Gym & Training Shoes',
      'Lifestyle Shoes',
    ],
  },
  {
    title: 'Clothing',
    links: [
      'All Clothing',
      'Modest Wear',
      'Hoodies & Pullovers',
      'Shirts & Tops',
      'Jackets',
      'Compression & Nike Pro',
      'Trousers & Leggings',
      'Shorts',
    ],
  },
  {
    title: 'Kids',
    links: [
      'Infant & Toddler Shoes',
      'Kids\' Shoes',
      'Kids\' Jordan Shoes',
      'Kids\' Basketball Shoes',
      'Kids\' Running Shoes',
      'Kids\' Clothing',
      'Kids\' Backpacks',
      'Kids\' Socks',
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerItems.map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
              <ul className="mt-4 space-y-2">
                {item.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
