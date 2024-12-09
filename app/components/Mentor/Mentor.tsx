// MENTORS DATA

interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    color: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Senior UX Designer',
        href: '#',
        imageSrc: '/assets/mentor/AG64.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Shoo Thar Mein',
    },
    {
        id: 2,
        name: 'Photoshop Instructor',
        href: '#',
        imageSrc: '/assets/mentor/Marco.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Cristian Doru Barin',
    },
    {
        id: 3,
        name: 'SEO Expert',
        href: '#',
        imageSrc: '/assets/mentor/boy3.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Tanzeel Ur Rehman',
    },
    {
        id: 4,
        name: 'UI/UX Designer',
        href: '#',
        imageSrc: '/assets/mentor/boy4.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Andrew Williams',
    },
    {
        id: 5,
        name: 'Web Development / Web Design',
        href: '#',
        imageSrc: '/assets/mentor/boy5.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Brad Schiff',
    },
    {
        id: 6,
        name: 'Adobe Certified Instructor',
        href: '#',
        imageSrc: '/assets/mentor/girl1.svg',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Daniel Walter Scott',
    },
]

const Mentor = () => {
    return (
        <div id="mentors-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className='justify-between items-center mb-12'>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-8">Conheça um pouco da Nossa História</h2>

                <a href="https://sobre.profissionalizaead.com.br/">
                    <div className="max-w-md aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <img
                            src='assets/mentor/Sobre.webp'
                            alt=''
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Mentor;
