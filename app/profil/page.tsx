import React from 'react';
import { Pencil, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function ParametresPage() {
    return (
        <div className="max-w-5xl mx-auto p-4 space-y-6 bg-white dark:bg-slate-950 transition-colors duration-300">
            <h1 className="text-2xl font-normal text-slate-900 dark:text-white font-poppins">Paramètres</h1>

            {/* En-tête Profil */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-800 shadow-md overflow-hidden">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" alt="Avatar" />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-lg font-medium text-slate-900 dark:text-white font-poppins">John Doe</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Saveurs du Bénin</p>
                            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                    <button key={i} className="p-2 border border-slate-100 dark:border-slate-700 rounded-full text-slate-400 dark:text-slate-500 hover:text-red-500 hover:border-red-100 dark:hover:border-red-900 transition-all">
                                        <Icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Informations personnelles */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
                <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="font-normal text-slate-900 dark:text-white font-poppins">Informations personnelles</h3>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full text-xs font-normal hover:bg-red-700 transition-colors">
                        Mettre à jour
                    </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Nom" defaultValue="Doe" />
                    <InputField label="Prénom(s)" defaultValue="John" />
                    <InputField label="Adresse email" defaultValue="john.doe@example.com" />
                    <div className="space-y-1">
                        <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Mot de passe</p>
                        <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-2 block">
                            Changer le mot de passe
                        </button>
                    </div>
                </div>
            </div>

            {/* Informations de l'entreprise */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
                <div className="p-6 border-b border-slate-50 dark:border-slate-800">
                    <h3 className="font-normal text-slate-900 dark:text-white font-poppins">Informations de l'entreprise</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Nom de l'entreprise" placeholder="Ex: Saveurs du Bénin" />
                    <InputField label="Numéro de téléphone" placeholder="+229 00 00 00 00" />
                    <InputField label="Site web" placeholder="www.exemple.com" />
                    <InputField label="Adresse de l'entreprise" placeholder="Cotonou, Bénin" />
                </div>
            </div>
        </div>
    );
}

// Composant réutilisable pour les champs
// Exemple de ce que devrait être votre InputField
function InputField({ label, defaultValue, placeholder }) {
    return (
        <div className="space-y-1">
            <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{label}</p>
            <input
                defaultValue={defaultValue}
                placeholder={placeholder}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white outline-none focus:border-red-500 transition-colors"
            />
        </div>
    );
}