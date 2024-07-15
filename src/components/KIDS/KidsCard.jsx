import kid1 from "../../assets/kidscard1.jpg"
import kid2 from '../../assets/kidscard2.jpg'
import kid3 from "../../assets/kidscard3.jpg"
const callouts = [
    {
      name: 'Babies & Toddlers',
      description: '0-3 years',
      imageSrc: kid1,
      imageAlt: 'Nike.',
      href: '#',
    },
    {
      name: 'Yonger Kids',
      description: '3-7 years',
      imageSrc: kid2,
      imageAlt: '',
      href: '#',
    },
    {
        name: 'Older Kids',
        description: '7-15 years',
        imageSrc: kid3,
        imageAlt: 'Nike',
        href: '#',
    
    },
  ]
  
  export default function KidsCards() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-8xl px-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-3xl font-bold text-gray-900 ">Little Champ</h2>
  
            <div className="mt-5 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-230 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-98">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-black-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-black-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  