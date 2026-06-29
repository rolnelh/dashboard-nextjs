"use client";

import React, { useState } from 'react'; // 1. Ajoutez useState ici
import {
    FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
    FaPencilAlt, FaUser, FaEnvelope, FaPhone, FaMapPin
} from 'react-icons/fa';

export default function Parametres() {
    // 2. Ajoutez ces lignes pour définir les variables manquantes
    const [activeTab, setActiveTab] = useState('Profil');
    const tabs = ['Profil', 'Compte bancaire', 'Compte Mobile Money', 'Utilisateurs'];

    return (
        <div className="max-w-5xl mx-auto py-10 px-6 space-y-8 font-poppins">
            <h1 className="text-2xl font-normal text-slate-900 tracking-tight">Paramètres</h1>

            {/* Navigation par onglets */}
            <div className="border-b border-slate-100 overflow-x-auto scrollbar-hide">
                <nav className="flex gap-8 whitespace-nowrap px-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-sm font-normal transition-colors relative ${activeTab === tab
                                    ? 'text-slate-900'
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e31937]" />
                            )}
                        </button>
                    ))}
                </nav>
            </div>

            {activeTab === 'Profil' && (
                <div className="space-y-6">
                    {/* Header Profil */}
                    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-24 h-24 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-inner">
                                    <img
                                        src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <h2 className="text-xl font-normal text-slate-900">Dieudonné Houndagnon</h2>
                                    <p className="text-sm text-slate-500 mt-1">Commerçant | Cotonou, Bénin</p>

                                    <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                                        {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                                            <button key={i} className="text-slate-400 hover:text-[#e31937] transition-colors">
                                                <Icon size={18} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-100 rounded-xl text-xs font-normal text-slate-600 hover:bg-slate-50 transition-all">
                                <FaPencilAlt size={12} /> Modifier
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProfileSection title="Informations personnelles">
                            <InfoItem label="Prénom" value="Dieudonné" icon={<FaUser size={14} />} />
                            <InfoItem label="Nom" value="Houndagnon" />
                            <InfoItem label="Email" value="dieudonne.h@example.com" icon={<FaEnvelope size={14} />} />
                            <InfoItem label="Téléphone" value="+229 00 00 00 00" icon={<FaPhone size={14} />} />
                            <InfoItem label="Bio" value="Commerçant spécialisé dans le e-commerce." icon={<FaPencilAlt size={14} />} />
                        </ProfileSection>

                        <ProfileSection title="Localisation">
                            <InfoItem label="Pays" value="Bénin" icon={<FaMapPin size={14} />} />
                            <InfoItem label="Ville" value="Cotonou" />
                            <InfoItem label="Adresse" value="Qtier Cadjehoun, rue 123" />
                        </ProfileSection>
                    </div>
                </div>
            )}

            {/* Ajoutez ici d'autres conditions pour {activeTab === 'Compte bancaire' && ...} etc. */}
        </div>
    );
}


function ProfileSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm h-full overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-normal text-slate-900 text-sm">{title}</h3>
            </div>
            <div className="p-6 grid grid-cols-1 gap-6">
                {children}
            </div>
        </div>
    );
}

function InfoItem({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="text-slate-300 mt-0.5 w-4 flex justify-center">
                {icon || <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />}
            </div>
            <div className="space-y-0.5">
                <p className="text-[9px] uppercase tracking-widest font-normal text-slate-400">{label}</p>
                <p className="text-sm font-normal text-slate-900">{value}</p>
            </div>
        </div>
    );
}