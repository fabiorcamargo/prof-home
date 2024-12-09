"use client"
import Companies from '../../components/Companies/Companies';


const Banner = () => {
    return (
        <main className='banner-image'>
            <div className="bg-yellow text-white pb-20 pt-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-4 md:my-24">
                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="animate-fade animate-delay-[400ms] text-3xl font-semibold md:text-5xl text-offblack tracking-loose">Sua Educação Em Primeiro Lugar</h1>
                        {/* <h2 className="animate-fade animate-delay-200 text-1xl font-bold md:text-3xl leading-relaxed text-black md:leading-snug my-2">Sua Educação Em Primeiro Lugar
                </h2> */}
                        <p className="text-base md:text-base animate-fade animate-delay-[500ms] my-2 text-offblack mb-4">Estamos a mais de 10 anos no mercado, oferecendo conteúdo de qualidade e tecnologia de ponta.</p>
                        <div className="flex flex-col justify-center md:justify-start">
                            <a href="https://ead.profissionalizaead.com.br/login/index.php"
                                className="bg-lightgrey animate-fade-right animate-delay-[600ms] hover:bg-yellow-300 my-1 space-links  text-white font-semibold hover:text-black rounded-bl-lg rounded-tr-lg shadow hover:shadow-lg py-2 px-4  hover:border-transparent mb-2 md:mb-0">
                                Alunos até 2022</a>
                            <a href="https://alunos.profissionalizaead.com.br/login"
                                className="bg-purple-claro animate-fade-right animate-delay-[700ms] hover:bg-yellow-300 my-1 space-links  text-white font-semibold hover:text-black rounded-bl-lg shadow hover:shadow-lg rounded-tr-lg py-2 px-4  hover:border-transparent mb-2 md:mb-0">
                                Alunos 2023/2024</a>
                        </div>
                    </div>
                    <div className="p-8 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                        <div className="h-48 flex flex-wrap content-center">
                            <div>
                                <img className=" animate-fade-right animate-delay-[900ms] mt-28 hidden xl:block" src="/assets/banner/2b.png" /></div>
                            <div>
                                <img className="inline-block animate-fade-right animate-delay-[1000ms] mt-24 md:mt-0 p-8 md:p-0" src="/assets/banner/1.png" /></div>
                            <div>
                                <img className="  animate-fade-right animate-delay-[1100ms] mt-28 hidden lg:block" src="/assets/banner/3b.png" /></div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px">
                            Profissionaliza EAD <br />
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-black">
                            Escolha o seu futuro e nós te preparamos.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <div className="hidden sm:block -space-x-2 overflow-hidden">
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div className='bannerBorder sm:pl-8'>
                                <div className='flex justify-center sm:justify-start'>
                                    <h3 className='text-2xl font-semibold mr-2'>4.6</h3>
                                    <img src={'/assets/banner/Stars.svg'} alt="stars-icon" />
                                </div>
                                <div>
                                    <h3 className='text-sm'>Rated by 25k on google.</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                    


                    <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
                            <div className="col-span-3">
                                <Dropdownone />
                            </div>
                            <div className="col-span-3">
                                <Dropdowntwo />
                            </div>
                            <div className="col-span-3 sm:col-span-2 mt-2">
                                <button className="bg-purple w-full hover:bg-pruple text-white font-bold py-4 px-3 rounded">
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
            <Companies />

        </main>
    )
}

export default Banner;
