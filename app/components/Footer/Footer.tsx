import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Empresa",
        link: ['Sobre nós', 'Blog', 'Fale Conosco', 'Shop'],
    },
    {
        id: 2,
        section: "Suporte",
        link: ['Whatsapp', 'E-mail', 'Política de Privacidade']
    }
]

const footer = () => {
    return (
        <div className="bg-bgpurple -mt-64" id="first-section">
            <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <img src={'/assets/logo/Logo3.svg'} alt="logo" className='pb-4' />
                        <h3 className='text-white text-lg font-medium leading-9 mb-4 lg:mb-20'> Seu caminho para o <br /> Sucesso. </h3>
                        <div className='flex gap-4'>
                            <Link href="/"><img src={'/assets/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/dribble.svg'} alt="dribble" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/youtube.svg'} alt="youtube" className='footer-icons' /></Link>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-semibold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-offwhite text-sm font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-xl font-semibold mb-6'>Mantenha-se Atualizado</h3>
                        <div className="relative text-white focus-within:text-white flex flex-row-reverse">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-white bg-gray-900 rounded-md pl-4 focus:outline-none bg-emailbg focus:text-white" placeholder="Your email address" autoComplete="off" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <img src={'/assets/footer/inputIcon.svg'} alt="i    nputicon" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className='pb-24 px-4'>
                <h3 className="text-center text-offwhite">
                Avenida Advogado Horácio Raccanello Filho<br />5410 Salas 01 e 02 - Zona 7, Novo Centro, 87020-035
                Maringá - PR | Brasil CEP: 87020-035 <br />
                CNPJ: 42.866.959/0001-54
                CNPJ: 41.769.690/0001-25
                </h3>
                <br />
                <h3 className='text-center text-offwhite'>@2024 - Todos os direitos Reservados à <Link href="https://ead.profissionalizaead.com.br/" target="_blank"> Profissionaliza EAD</Link></h3>
            </div>

        </div>
    )
}

export default footer;
