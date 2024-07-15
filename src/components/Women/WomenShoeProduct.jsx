import shoe17 from '../../assets/17.jpeg'
import shoe18 from '../../assets/18.jpeg'
import shoe19 from '../../assets/19.jpeg'
import shoe20 from '../../assets/20.jpeg'
import shoe21 from '../../assets/21.jpeg'
import shoe22 from "../../assets/22.jpeg"
import shoe23 from "../../assets/23.jpeg"
import shoe24 from "../../assets/24.jpeg"
import women25 from "../../assets/women1.jpeg"
import women26 from "../../assets/women2.jpeg"
import women27 from "../../assets/women3.jpeg"
import women28 from "../../assets/women4.jpeg"
import women29 from "../../assets/women5.jpeg"
import women30 from "../../assets/women6.jpeg"
import women31 from "../../assets/women7.jpeg"
import women32 from "../../assets/women8.jpeg"
const products = [
  {
    id: 1,
    name: 'White,Light-brown',
    href: '#',
    imageSrc: shoe17,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹12,000',
    color: 'Black',
    
  },
 {
  id: 2,
  name: 'Air',
  href: '#',
  imageSrc: shoe18,
  imageAlt: "Front.",
  price: '₹13,000',
  color: 'White,light-green',
 },
 {
  id: 3,
  name: 'Sports',
  href: '#',
  imageSrc: shoe19,
  imageAlt: "Front.",
  price: '₹21,000',
  color: 'Neon-green',
 },
 {
  id: 4,
  name: 'Sports',
  href: '#',
  imageSrc: shoe20,
  imageAlt: "Front.",
  price: '₹24,000',
  color: 'Gray',
 },
 {
  id: 5,
  name: 'Air1',
  href: '#',
  imageSrc: shoe21,
  imageAlt: "Front.",
  price: '₹11,000',
  color: 'Sky-blue',
 },
 {
  id: 6,
  name: 'Air2',
  href: '#',
  imageSrc: shoe22,
  imageAlt: "Front.",
  price: '₹11,500',
  color: 'Red-velvet+white',
 },
 {
  id: 7,
  name: 'Air2',
  href: '#',
  imageSrc: shoe23,
  imageAlt: "Front.",
  price: '₹6,000',
  color: 'White-black',
 },
 {
  id: 8,
  name: 'Sports',
  href: '#',
  imageSrc: shoe24,
  imageAlt: "Front.",
  price: '₹10,000',
  color: 'Black-white',
 },
 {
  id: 9,
  name: 'White,Light-brown',
  href: '#',
  imageSrc: women25,
  imageAlt: "Front of men's Basic Tee in black.",
  price: '₹13,500',
  color: 'Black',
  
},
{
id: 10,
name: 'Air',
href: '#',
imageSrc: women26,
imageAlt: "Front.",
price: '₹19,500',
color: 'White,light-green',
},
{
id: 11,
name: 'Sports',
href: '#',
imageSrc: women27,
imageAlt: "Front.",
price: '₹22,500',
color: 'Neon-green',
},
{
id: 12,
name: 'Sports',
href: '#',
imageSrc: women28,
imageAlt: "Front.",
price: '₹24,000',
color: 'Gray',
},
{
id: 13,
name: 'Air1',
href: '#',
imageSrc: women29,
imageAlt: "Front.",
price: '₹18,500',
color: 'Sky-blue',
},
{
id: 14,
name: 'Air2',
href: '#',
imageSrc: women30,
imageAlt: "Front.",
price: '₹14,500',
color: 'Red-velvet+white',
},
{
id: 15,
name: 'Air2',
href: '#',
imageSrc: women31,
imageAlt: "Front.",
price: '₹9,000',
color: 'White-black',
},
{
id: 16,
name: 'Sports',
href: '#',
imageSrc: women32,
imageAlt: "Front.",
price: '₹15,500',
color: 'Black-white',
},
 
 
]

export default function WomenShoeProduct() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-6xl font-bold tracking-tight text-black-900">WIN ON AIR</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-900 object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-black-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-black-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-black-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
