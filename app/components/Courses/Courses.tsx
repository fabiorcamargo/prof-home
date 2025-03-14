"use client"
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';
import Image from "next/image";


interface Name {
    course: string;
    imageSrc: string;
    profession: string;
    price: string;
    students: string;
    category: 'preparatorios';
    // category: 'mobiledevelopment' | 'preparatorios' | 'datascience' | 'cloudcomputing';
    turma: string;
}

const names: Name[] = [
    {
        course: 'Administrativo, Contábil, Informatizado',
        imageSrc: '/assets/courses/2.webp',
        profession: 'Aprendiz Bancário',
        price: '40',
        students: '3521',
        category: 'preparatorios',
        turma: '9'
    },
    {
        course: 'Português, Matemática, História, ...',
        imageSrc: '/assets/courses/1.webp',
        profession: 'Pré Militar',
        price: '21',
        students: '1085',
        category: 'preparatorios',
        turma: '4'
    },
    {
        course: 'Plantio, Colheita, Logística, Administração ...',
        imageSrc: '/assets/courses/3.webp',
        profession: 'Aprendiz do Agro',
        price: '21',
        category: 'preparatorios',
        turma: '7',
        students: ""
    },
    {
        course: 'Setores de Atuação, Comissários de Bordo, Manutenção, ...',
        imageSrc: '/assets/courses/4.webp',
        profession: 'Jovem na Aviação',
        price: '21',
        category: 'preparatorios',
        turma: '1',
        students: ""
    },
    {
        course: 'Atuação, Contratos e Documentos, Leis, ...',
        imageSrc: '/assets/courses/5.webp',
        profession: 'Jovem no Direito',
        price: '21',
        category: 'preparatorios',
        turma: '1',
        students: ""
    },
    {
        course: 'Cuidador, Primeiros Socorros, Recreação, ...',
        imageSrc: '/assets/courses/6.webp',
        profession: 'Auxiliar de Creche',
        price: '21',
        category: 'preparatorios',
        turma: '1',
        students: ""
    }
    // {
    //     course: 'React.js',
    //     imageSrc: '/assets/courses/coursesFour.svg',
    //     profession: 'Learn React with Redux toolkit',
    //     price: '99',
    //     category: 'preparatorios',
    //     turma: '4'
    // },
    // {
    //     course: 'React Native',
    //     imageSrc: '/assets/courses/coursesOne.svg',
    //     profession: 'Learn React Native with Node.js',
    //     price: '89',
    //     category: 'mobiledevelopment',
    //     turma: '4'
    // },
    // {
    //     course: 'Swift',
    //     imageSrc: '/assets/courses/coursesThree.svg',
    //     profession: 'Learn Swift from Scratch',
    //     price: '89',
    //     category: 'mobiledevelopment',
    //     turma: '4'
    // },
    // {
    //     course: 'Flutter',
    //     imageSrc: '/assets/courses/coursesFour.svg',
    //     profession: 'Flutter App Development',
    //     price: '69',
    //     category: 'mobiledevelopment',
    //     turma: '4'
    // },
    // {
    //     course: 'Onsen UI',
    //     imageSrc: '/assets/courses/coursesTwo.svg',
    //     profession: 'Learn Onsen Ui with HTML, CSS',
    //     price: '69',
    //     category: 'mobiledevelopment',
    //     turma: '4'
    // },
    // {
    //     course: 'TensorFlow',
    //     imageSrc: '/assets/courses/coursesTwo.svg',
    //     profession: 'Learn TensorFlow with SQL',
    //     price: '99',
    //     category: 'datascience',
    //     turma: '4'
    // },
    // {
    //     course: 'AWS',
    //     imageSrc: '/assets/courses/coursesFour.svg',
    //     profession: 'AWS Deep Learning AMI',
    //     price: '99',
    //     category: 'datascience',
    //     turma: '4'
    // },
    // {
    //     course: 'Bokeh',
    //     imageSrc: '/assets/courses/coursesOne.svg',
    //     profession: 'Learn Bokeh with Python',
    //     price: '99',
    //     category: 'datascience',
    //     turma: '4'
    // },
    // {
    //     course: 'Scikit',
    //     imageSrc: '/assets/courses/coursesThree.svg',
    //     profession: 'Scikit with Python Development',
    //     price: '89',
    //     category: 'datascience',
    //     turma: '4'
    // },
    // {
    //     course: 'Laas',
    //     imageSrc: '/assets/courses/coursesThree.svg',
    //     profession: 'Infra-as-a-Service',
    //     price: '21',
    //     category: 'cloudcomputing',
    //     turma: '4'
    // },
    // {
    //     course: 'Iaas',
    //     imageSrc: '/assets/courses/coursesFour.svg',
    //     profession: 'Info-as-a-Service',
    //     price: '29',
    //     category: 'cloudcomputing',
    //     turma: '4'
    // },
    // {
    //     course: 'Paas',
    //     imageSrc: '/assets/courses/coursesOne.svg',
    //     profession: 'Platform-as-a-Service',
    //     price: '99',
    //     category: 'cloudcomputing',
    //     turma: '4'
    // },
    // {
    //     course: 'Saas',
    //     imageSrc: '/assets/courses/coursesTwo.svg',
    //     profession: 'Software-as-a-Service',
    //     price: '58',
    //     category: 'cloudcomputing',
    //     turma: '4'
    // }
];

const NamesList = () => {

    const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'preparatorios' | 'datascience' | 'cloudcomputing' | 'all' | null>('preparatorios');

    // const mobileDevelopment = names.filter((name) => name.category === 'mobiledevelopment');
    const preparatorios = names.filter((name) => name.category === 'preparatorios');
    // const dataScience = names.filter((name) => name.category === 'datascience');
    // const cloudComputing = names.filter((name) => name.category === 'cloudcomputing');

    let selectedNames: Name[] = [];

    if (selectedButton === 'mobiledevelopment') {
        // selectedNames = mobileDevelopment;
    } else if (selectedButton === 'preparatorios') {
        selectedNames = preparatorios;
    } else if (selectedButton === 'datascience') {
        // selectedNames = dataScience;
    } else if (selectedButton === 'cloudcomputing') {
        // selectedNames = cloudComputing
    }


    const nameElements = selectedNames.map((name, index) => (

        <div key={index}>
            <div className=" text-lg sm:text-sm py-5 lg:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <Image
                        src={name.imageSrc}
                        alt={name.imageSrc}
                        className="h-full w-full object-cover object-center"
                        width={300}
                        height={200}
                        priority
                    />
                </div>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-normal text-gray-900">
                        {name.course}
                    </div>
                    {/* <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                        ${name.price}
                    </div> */}
                </div>
                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
                    {name.profession}
                </p>

                <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
                    <p>{name.turma} Classes</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <Image
                                src={'/assets/courses/account.svg'}
                                alt="circle"
                                width={200}
                                height={100}
                                style={{ width: 'auto', height: 'auto' }}
                                priority
                            />
                            <p className='text-lightgrey ml-1'>{name.students}</p>
                        </div>
                        <div className='flex'>
                            <Image src={'/assets/courses/Star.svg'} alt="star"
                                width={200}
                                height={100}
                                style={{ width: 'auto', height: 'auto' }}
                                priority />
                            <p className='ml-1'>4.8</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ));


    return (
        <div>
            <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center pb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Mais Buscados</h2>
                    <div>
                        <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                            Turmas Ativas
                        </button>
                    </div>
                </div>

                <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>

                    {/* FOR DESKTOP VIEW */}
                    <button onClick={() => setSelectedButton('preparatorios')} className={"bg-white " + (selectedButton === 'preparatorios' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Preaparatórios</button>
                    {/* <button onClick={() => setSelectedButton('mobiledevelopment')} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Mobile Development</button>
                    <button onClick={() => setSelectedButton('datascience')} className={"bg-white " + (selectedButton === 'datascience' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Data Science</button>
                    <button onClick={() => setSelectedButton('cloudcomputing')} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Cloud Computing</button> */}

                    {/* FOR MOBILE VIEW */}
                    <GlobeAltIcon onClick={() => setSelectedButton('preparatorios')} width={70} height={70} className={"bg-white " + (selectedButton === 'preparatorios' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <DevicePhoneMobileIcon onClick={() => setSelectedButton('mobiledevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <CircleStackIcon onClick={() => setSelectedButton('datascience')} width={70} height={70} className={"bg-white " + (selectedButton === 'datascience' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                    <CloudIcon onClick={() => setSelectedButton('cloudcomputing')} width={70} height={70} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />

                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {nameElements.length > 0 ? (
                                    nameElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NamesList;




