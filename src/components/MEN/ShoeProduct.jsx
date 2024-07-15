import shoe1 from '../../assets/1.jpeg'
import shoe2 from '../../assets/2.jpeg'
import shoe3 from '../../assets/3.jpeg'
import shoe4 from '../../assets/4.jpeg'
import shoe5 from '../../assets/5.jpeg'
import shoe6 from "../../assets/6.jpeg"
import shoe7 from "../../assets/7.jpeg"
import shoe8 from "../../assets/8.jpeg"
import shoe9 from "../../assets/9.jpeg"
import shoe10 from "../../assets/10.jpeg"
import shoe11 from "../../assets/11.jpeg"
import shoe12 from "../../assets/12.jpeg"
import shoe13 from "../../assets/13.jpeg"
import shoe14 from "../../assets/14.jpeg"
import shoe15 from "../../assets/15.jpeg"
import shoe16 from "../../assets/16.jpeg"
const products = [
  {
    id: 1,
    name: 'White,Light-brown',
    href: '#',
    imageSrc: shoe1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹12,000',
    color: 'Black',
    
  },
 {
  id: 2,
  name: 'Air',
  href: '#',
  imageSrc: shoe2,
  imageAlt: "Front.",
  price: '₹13,000',
  color: 'White,light-green',
 },
 {
  id: 3,
  name: 'Sports',
  href: '#',
  imageSrc: shoe3,
  imageAlt: "Front.",
  price: '₹20,000',
  color: 'Neon-green',
 },
 {
  id: 4,
  name: 'Sports',
  href: '#',
  imageSrc: shoe4,
  imageAlt: "Front.",
  price: '₹24,000',
  color: 'Gray',
 },
 {
  id: 5,
  name: 'Air1',
  href: '#',
  imageSrc: shoe5,
  imageAlt: "Front.",
  price: '₹16,000',
  color: 'Sky-blue',
 },
 {
  id: 6,
  name: 'Air2',
  href: '#',
  imageSrc: shoe6,
  imageAlt: "Front.",
  price: '₹16,000',
  color: 'Red-velvet+white',
 },
 {
  id: 7,
  name: 'Air2',
  href: '#',
  imageSrc: shoe7,
  imageAlt: "Front.",
  price: '₹16,000',
  color: 'White-black',
 },
 {
  id: 8,
  name: 'Sports',
  href: '#',
  imageSrc: shoe8,
  imageAlt: "Front.",
  price: '₹16,000',
  color: 'Black-white',
 },
 {
  id: 9,
  name: 'White,Light-brown',
  href: '#',
  imageSrc: shoe9,
  imageAlt: "Front of men's Basic Tee in black.",
  price: '₹12,500',
  color: 'Black',
  
},
{
id: 10,
name: 'Air',
href: '#',
imageSrc: shoe10,
imageAlt: "Front.",
price: '₹16,000',
color: 'White,light-green',
},
{
id: 11,
name: 'Sports',
href: '#',
imageSrc: shoe11,
imageAlt: "Front.",
price: '₹20,500',
color: 'Neon-green',
},
{
id: 12,
name: 'Sports',
href: '#',
imageSrc: shoe12,
imageAlt: "Front.",
price: '₹27,000',
color: 'Gray',
},
{
id: 13,
name: 'Air1',
href: '#',
imageSrc: shoe13,
imageAlt: "Front.",
price: '₹18,600',
color: 'Sky-blue',
},
{
id: 14,
name: 'Air2',
href: '#',
imageSrc: shoe14,
imageAlt: "Front.",
price: '₹17,500',
color: 'Red-velvet+white',
},
{
id: 15,
name: 'Air2',
href: '#',
imageSrc: shoe15,
imageAlt: "Front.",
price: '₹11,000',
color: 'White-black',
},
{
id: 16,
name: 'Sports',
href: '#',
imageSrc: shoe16,
imageAlt: "Front.",
price: '₹9,000',
color: 'Black-white',
},
 
 
]

export default function Card() {
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
