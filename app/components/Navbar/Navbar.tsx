import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contactus from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Início', href: '/', current: true },
    { name: 'Sobre Nós', href: 'https://sobre.profissionalizaead.com.br/', current: true },
    { name: 'Cursos', href: '#courses-section', current: false },
    { name: 'Mentores', href: '#mentors-section', current: false },
    { name: 'Avaliações', href: '#testimonial-section', current: false },
    { name: 'Inscrever-se', href: '#join-section', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="bg-white navbar shadow-md">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/">
                                    <Image
                                        className="block lg:hidden"
                                        src="/assets/logo/Logo3.svg"
                                        alt="Courses-Logo"
                                        width={50}
                                        height={50}
                                    />
                                </Link>
                                <Link href="/">
                                    <Image
                                        className="hidden lg:block"
                                        alt="Profissionaliza EAD"
                                        src="/logo.svg"
                                        width={50}
                                        height={50}
                                        
                                        priority
                                    />
                                </Link>
                            </div>

                            {/* WHATSAPP LINK */}
                            <div className="ml-6 flex items-center border border-green px-4 py-2 rounded-lg bg-green100 shadow shadow-sm">
                                <Image
                                    src="/WhatsApp.svg"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-700">Novo Número Oficial</p>
                                    <Link 
                                        href="https://wa.me/message/ZQW6XHYT6UVGI1" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-green-600 text-lg font-bold hover:underline"
                                    >
                                        +55 44 9855-2045
                                    </Link>
                                </div>
                            </div>

                        </div>

                        {/* SIGNIN DIALOG */}
                        {/* <Signdialog /> */}

                        {/* REGISTER DIALOG */}
                        {/* <Registerdialog /> */}

                        {/* DRAWER FOR MOBILE VIEW */}
                        {/* <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div> */}

                        {/* DRAWER LINKS DATA */}
                        {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer> */}
                    </div>
                </div>
            </>
        </Disclosure>
    );
}

export default Navbar;
