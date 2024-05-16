"use client"
import React, { useState, useEffect } from 'react';
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';
import QRCode from 'qrcode.react';

interface Group {
    id: number;
    name: string;
    description: string;
    link: string;
    expire: string;
    created_at: string | null;
    updated_at: string | null;
}

interface Name {
    id: number;
    card: string;
    imageSrc: string;
    description: string;
    link: string;
    price: string;
    students: string;
    category: 'preparatorios';
    turma: string;
}

const App = () => {
    const [data, setData] = useState<Group[] | null>(null);
    const [names, setNames] = useState<Name[]>([]);
    const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'preparatorios' | 'datascience' | 'cloudcomputing' | 'all' | null>('preparatorios');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            //const response = await fetch('https://alunos.profissionalizaead.com.br/api/groups');
            const jsonData = [
                {
                    "id": 1,
                    "name": "Teste",
                    "description": "Esse é um grupo teste",
                    "link": "https://profissionalizaead.com.br",
                    "expire": "2024-05-16",
                    "created_at": null,
                    "updated_at": null
                }
            ];
            setData(jsonData);

            // Preencher names com os dados da requisição
            const namesData: Name[] = jsonData.map((group: Group) => ({
                id: group.id,
                card: group.name,
                imageSrc: '/assets/courses/AG.jpg', // Defina a imagem padrão ou obtenha a imagem real da API
                description: group.description,
                link: group.link,
                price: '', // Se necessário
                students: '12', // Se necessário
                category: 'preparatorios',
                turma: '' // Se necessário
            }));
            setNames(namesData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filteredNames = names.filter((name) => {
        if (selectedButton === 'all') return true;
        return name.category === selectedButton;
    });

    const nameElements = filteredNames.map((name) => (
        <div key={name.id} className="text-lg sm:text-sm py-5 lg:py-5">
            <div aria-hidden="true" className="mt-4 text-2xl font-semibold ">
                {name.card}
            </div>
            <div className="block font-normal text-gray-900">
                {name.description}
            </div>
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 relative">
                <img
                    src={name.imageSrc}
                    alt={name.imageSrc}
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay preto */}
                <QRCode value={name.link} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            <a href={name.link} className="flex w-full bg-green hover:bg-green400 text-white font-medium hover:text-white py-3 px-4 rounded">
                Entrar no Grupo
            </a>
        </div>
    ));

    return (
        <div>
            <div id='courses-section' className="mx-auto max-w-2xl py-8 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className='sm:flex justify-between items-center pb-2'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Grupos do Whatsapp</h2>
                </div>
                <p className="text-md sm:text-md tracking-tight text-gray-900">Entre no Grupo do Whatsapp do seu Curso, receba todos os informativos e os lembretes das aulas.</p>
                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 pb-12">
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

export default App;
