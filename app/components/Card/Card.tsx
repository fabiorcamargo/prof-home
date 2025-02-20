"use client";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import Image from "next/image";

interface WpGroupCategory {
    id: number;
    name: string;
    img: string;
    created_at: string;
    updated_at: string;
}

interface Group {
    id: number;
    cademi_code: string;
    name: string;
    description: string;
    link: string;
    inicio: string;
    fim: string;
    created_at: string;
    updated_at: string;
    wp_group_category_id: number;
    wp_group_category: WpGroupCategory;
}

interface Name {
    id: number;
    card: string;
    imageSrc: string;
    description: string;
    link: string;
    price: string;
    students: string;
    category: string;
    turma: string;
}

const baseUrl = "https://alunos.profissionalizaead.com.br";

const App = () => {
    const [data, setData] = useState<Group[] | null>(null);
    const [names, setNames] = useState<Name[]>([]);
    const [selectedButton, setSelectedButton] = useState<string | null>("preparatorios");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/groups`);
            const jsonData: Group[] = await response.json();

            console.log(jsonData);

            setData(jsonData);

            const namesData: Name[] = jsonData.map((group) => ({
                id: group.id,
                card: group.name,
                imageSrc: group.wp_group_category.img.startsWith("http")
                    ? group.wp_group_category.img
                    : `${baseUrl}${group.wp_group_category.img}`,
                description: group.description,
                link: group.link,
                price: "",
                students: "12",
                category: "preparatorios",
                turma: "",
            }));

            setNames(namesData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const filteredNames = names.filter((name) => {
        if (selectedButton === "all") return true;
        return name.category === selectedButton;
    });

    return (
        <div>
            <div id="courses-section" className="mx-auto max-w-2xl py-8 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="sm:flex justify-between items-center pb-2">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Grupos do Whatsapp</h2>
                </div>
                <p className="text-md sm:text-md tracking-tight text-gray-900 pb-4">
                    Entre no Grupo do Whatsapp do seu Curso, receba todos os informativos e os lembretes das aulas.
                </p>
                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 pb-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {filteredNames.length > 0 ? (
                                    filteredNames.map((name) => (
                                        <div key={name.id} className="bg-white shadow-lg rounded-lg overflow-hidden my-4">
                                            <div className="relative group">
                                                <Image
                                                    src={name.imageSrc}
                                                    alt={name.card}
                                                    className="w-full h-48 object-cover object-center"
                                                    width={800}
                                                    height={500}
                                                    style={{ width: 'auto', height: 'auto' }}
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <QRCode value={name.link} size={128} />
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-xl font-semibold text-gray-800">{name.card}</h3>
                                                <p className="text-gray-600">{name.description}</p>
                                                <a
                                                    href={name.link}
                                                    target="_blank"
                                                    className="mt-4 inline-block bg-green hover:bg-green400 text-white font-medium py-2 px-4 rounded"
                                                >
                                                    Entrar no Grupo
                                                </a>
                                            </div>
                                        </div>
                                    ))
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
};

export default App;
