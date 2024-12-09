import Link from "next/link";
import Image from "next/image";


const footer = () => {
    return (
        <div className="bg-blue -mt-64 mt-0 pt-4 sm:mt-0" id="first-section">


            {/* All Rights Reserved */}

            <div className='w-full flex flex-col items-center'>
                <div className='flex gap-2 justify-center'>
                    <Link href="https://www.instagram.com/profissionalizaead">
                        <img src='/assets/footer/instagram.svg' alt="instagram" className='footer-icons' />
                    </Link>
                    <Link href="https://www.facebook.com/profissionalizaead">
                        <img src='/assets/footer/facebook.svg' alt="facebook" className='footer-icons' />
                    </Link>
                    <Link href="https://www.youtube.com/@profissionalizaead">
                        <img src='/assets/footer/youtube.svg' alt="youtube" className='footer-icons' />
                    </Link>
                    <Link href="https://wa.me/5544984233200">
                        <img src='/assets/footer/whatsapp.svg' alt="whatsapp" className='footer-icons' />
                    </Link>
                </div>

                <div className="w-full flex flex-col items-center pt-8">
                    <img src='/assets/logo/Logo-White.svg' alt="logo" className='mb-4' />
                    <h3 className='text-white text-lg font-medium'>
                        Seu caminho para o Sucesso.
                    </h3>
                </div>
            </div>
            <div className='pb-24 px-4 pt-10'>
                <h3 className="text-center text-offwhite">
                    Avenida Advogado Horácio Raccanello Filho<br />5410 Salas 01 e 02 - Zona 7, Novo Centro, 87020-035
                    Maringá - PR | Brasil CEP: 87020-035 <br />
                    CNPJ: 42.866.959/0001-54
                    CNPJ: 41.769.690/0001-25
                </h3>
                <br />
                <h3 className='text-center text-offwhite'>@2024 - Todos os direitos Reservados à <Link href="https://ead.profissionalizaead.com.br/" target="_blank"> Profissionaliza EAD</Link></h3>
            </div>

            <div className="fixed bottom-4 right-4 z-10">
                <a href="https://wa.me/5544984233200" target="_blank" rel="noopener noreferrer">
                    
                    <Image
                        className="w-20 h-20 rounded-full p-2 footer-icons"
                        alt="whatsapp"
                        src="WhatsApp.svg"
                        width={100}
                        height={100}
                    />
                </a>
            </div>


        </div>
    )
}

export default footer;
