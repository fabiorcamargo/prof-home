"use client";
import Image from "next/image";
import Companies from "../../components/Companies/Companies";

const Banner = () => {
    return (
        <main className="banner-image">
            <div className="bg-yellow text-white pb-20 pt-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-4 md:my-24">
                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="animate-fade animate-delay-[400ms] text-3xl font-semibold md:text-5xl text-offblack tracking-loose">
                            Sua Educação Em Primeiro Lugar
                        </h1>
                        <p className="text-base md:text-base animate-fade animate-delay-[500ms] my-2 text-offblack mb-4">
                            Estamos há mais de 10 anos no mercado, oferecendo conteúdo de qualidade e tecnologia de ponta.
                        </p>
                        <div className="flex flex-col justify-center md:justify-start">
                            <a
                                href="https://ead.profissionalizaead.com.br/login/index.php"
                                className="bg-lightgrey animate-fade-right animate-delay-[600ms] hover:bg-yellow-300 my-1 space-links text-white font-semibold hover:text-black rounded-bl-lg rounded-tr-lg shadow hover:shadow-lg py-2 px-4 hover:border-transparent mb-2 md:mb-0"
                            >
                                Alunos até 2022
                            </a>
                            <a
                                href="https://alunos.profissionalizaead.com.br/login"
                                className="bg-purple-claro animate-fade-right animate-delay-[700ms] hover:bg-yellow-300 my-1 space-links text-white font-semibold hover:text-black rounded-bl-lg shadow hover:shadow-lg rounded-tr-lg py-2 px-4 hover:border-transparent mb-2 md:mb-0"
                            >
                                Área do Aluno <p className="font-normal text-xs">(Novos Alunos)</p>
                            </a>
                        </div>
                    </div>
                    <div className="p-8 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 flex justify-center">
                        <div className="h-48 flex justify-center items-center gap-4">
                            <div className="w-auto h-auto hidden md:block relative">
                                <Image
                                    className="animate-fade-right animate-delay-[900ms]"
                                    src="/assets/banner/2b.png"
                                    alt="banner-1"
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <div className="w-auto h-auto lg:block relative">
                                <Image
                                    className="animate-fade-right animate-delay-[1000ms] p-8 md:p-0"
                                    src="/assets/banner/1.png"
                                    alt="banner-2"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                            <div className="w-auto h-auto hidden lg:block relative">
                                <Image
                                    className="animate-fade-right animate-delay-[1100ms]"
                                    src="/assets/banner/3b.png"
                                    alt="banner-3"
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Companies />
        </main>
    );
};

export default Banner;
