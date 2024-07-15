import kids1 from '../../assets/kids1.jpeg'
import kids2 from '../../assets/kids2.jpeg'
import kids3 from '../../assets/kids3.jpeg'
import kids4 from '../../assets/kids4.jpeg'
import kids5 from '../../assets/kids5.jpeg'
import kids6 from "../../assets/kids6.jpeg"
import kids7 from "../../assets/kids7.jpeg"
import kids8 from "../../assets/kids8.jpeg"
import kids9 from "../../assets/kids9.jpeg"
import kids10 from "../../assets/kids10.jpeg"
import kids11 from "../../assets/kids11.jpeg"
import kids12 from "../../assets/kids12.jpeg"
import kids13 from "../../assets/kids13.jpeg"
import kids14 from "../../assets/kids15.jpeg"
import kids15 from "../../assets/kids16.jpeg"
import kids16 from "../../assets/kids17.jpeg"
const products = [
  {
    id: 1,
    name: 'White,Light-brown',
    href: '#',
    imageSrc: kids1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '₹12,000',
    color: 'Black',
    
  },
 {
  id: 2,
  name: 'Air',
  href: '#',
  imageSrc: kids2,
  imageAlt: "Front.",
  price: '₹13,000',
  color: 'White,light-green',
 },
 {
  id: 3,
  name: 'Sports',
  href: '#',
  imageSrc: kids3,
  imageAlt: "Front.",
  price: '₹20,000',
  color: 'Neon-green',
 },
 {
  id: 4,
  name: 'Sports',
  href: '#',
  imageSrc: kids4,
  imageAlt: "Front.",
  price: '₹24,000',
  color: 'Gray',
 },
 {
  id: 5,
  name: 'Air1',
  href: '#',
  imageSrc: kids5,
  imageAlt: "Front.",
  price: '₹16,000',
  color: 'Sky-blue',
 },
 {
  id: 6,
  name: 'Air2',
  href: '#',
  imageSrc: kids6,
  imageAlt: "Front.",
  price: '₹16,000',
  color: 'Red-velvet+white',
 },
 {
  id: 7,
  name: 'Air2',
  href: '#',
  imageSrc: kids7,
  imageAlt: "Front.",
  price: '₹16,000',
  color: 'White-black',
 },
 {
  id: 8,
  name: 'Sports',
  href: '#',
  imageSrc: kids8,
  imageAlt: "Front.",
  price: '₹16,000',
  color: 'Black-white',
 },
 {
  id: 9,
  name: 'White,Light-brown',
  href: '#',
  imageSrc: kids9,
  imageAlt: "Front of men's Basic Tee in black.",
  price: '₹12,500',
  color: 'Black',
  
},
{
id: 10,
name: 'Air',
href: '#',
imageSrc: kids10,
imageAlt: "Front.",
price: '₹16,000',
color: 'White,light-green',
},
{
id: 11,
name: 'Sports',
href: '#',
imageSrc: kids11,
imageAlt: "Front.",
price: '₹20,500',
color: 'Neon-green',
},
{
id: 12,
name: 'Sports',
href: '#',
imageSrc: kids12,
imageAlt: "Front.",
price: '₹27,000',
color: 'Gray',
},
{
id: 13,
name: 'Air1',
href: '#',
imageSrc: kids13,
imageAlt: "Front.",
price: '₹18,600',
color: 'Sky-blue',
},
{
id: 14,
name: 'Air2',
href: '#',
imageSrc: kids14,
imageAlt: "Front.",
price: '₹17,500',
color: 'Red-velvet+white',
},
{
id: 15,
name: 'Air2',
href: '#',
imageSrc: kids15,
imageAlt: "Front.",
price: '₹11,000',
color: 'White-black',
},
{
id: 16,
name: 'Sports',
href: '#',
imageSrc: kids16,
imageAlt: "Front.",
price: '₹9,000',
color: 'Black-white',
},
 
 
]

export default function KidsShoeProduct() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-6xl font-bold tracking-tight text-black-900">NIKE BY YOU</h2>

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
