import Image from "next/image";

const Mentor = () => {
    return (
        <div id="mentors-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className='justify-between items-center mb-12'>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-8">
                    Conheça um pouco da Nossa História
                </h2>
                <a href="https://sobre.profissionalizaead.com.br/">
                    <div className="max-w-md aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image
                            src="/assets/mentor/Sobre.webp"
                            alt="sobre"
                            width={400}
                            height={400}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Mentor;
