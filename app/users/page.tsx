"use client";

import React, { useState } from 'react';
import {
    Plus,
    Search,
    MoreHorizontal,
    Mail,
    ShieldCheck,
    UserPlus,
    Trash2,
    ExternalLink
} from 'lucide-react';

// Simulation de données pour l'aperçu du tableau
const users = [
    { id: 1, nom: "Musharof Chowdhury", email: "musharof@example.com", role: "Administrateur", sousCompte: "Principal", initiales: "MC" },
    { id: 2, nom: "Dieudonné Houndagnon", email: "dieudonne@dev.bj", role: "Éditeur", sousCompte: "Boutique Cotonou", initiales: "DH" },
];

// Pour tester l'état vide, mets cette variable à true
const isEmpty = false;

export default function UsersPage() {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);

    return (
        <div className="space-y-6 font-poppins">
            {/* Header avec bouton d'action principal */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Utilisateurs</h1>
                    <p className="text-sm text-slate-500">Gérez les membres de votre équipe et leurs accès.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#e31937] hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-normal transition-all shadow-md shadow-red-100">
                    <UserPlus size={18} />
                    Inviter un utilisateur
                </button>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
                {isEmpty ? (
                    /* NOUVEL ÉTAT VIDE (Amélioration de image_4de477.png) */
                    <div className="py-20 flex flex-col items-center text-center px-6">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                            <ShieldCheck size={40} className="text-slate-300" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Aucun utilisateur enregistré</h2>
                        <p className="text-slate-500 max-w-sm mb-8">
                            Commencez par inviter vos collaborateurs pour gérer ensemble votre espace Kkiapay.
                        </p>
                        <button className="flex items-center gap-2 bg-[#e31937] text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all">
                            <Plus size={20} /> Inviter votre premier utilisateur
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Barre de recherche */}
                        <div className="p-6 border-b border-slate-50">
                            <div className="relative max-w-md">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Rechercher par nom ou email..."
                                    className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-red-100 transition-all outline-none"
                                />
                            </div>
                        </div>

                        {/* Tableau des utilisateurs */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50 text-slate-400 uppercase text-[11px] font-bold tracking-wider">
                                        <th className="p-4 px-6">Nom et Prénom(s)</th>
                                        <th className="p-4 px-6">E-mail</th>
                                        <th className="p-4 px-6">Rôle</th>
                                        <th className="p-4 px-6">Sous-compte</th>
                                        <th className="p-4 px-6 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {users.map((user) => (
                                        <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="p-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-xs font-bold">
                                                        {user.initiales}
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-900">{user.nom}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 px-6">
                                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                                    <Mail size={14} />
                                                    {user.email}
                                                </div>
                                            </td>
                                            <td className="p-4 px-6">
                                                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${user.role === 'Administrateur' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-600'
                                                    }`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="p-4 px-6 text-sm text-slate-500 font-medium">
                                                {user.sousCompte}
                                            </td>
                                            <td className="p-4 px-6 text-right relative">
                                                <button
                                                    onClick={() => setOpenMenuId(openMenuId === user.id ? null : user.id)}
                                                    className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                                                >
                                                    <MoreHorizontal size={18} />
                                                </button>

                                                {openMenuId === user.id && (
                                                    <>
                                                        <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)} />
                                                        <div className="absolute right-10 top-10 w-44 bg-white border border-slate-100 shadow-xl rounded-2xl z-20 py-2 animate-in fade-in zoom-in-95 duration-100 text-left">
                                                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 font-medium">
                                                                <ExternalLink size={14} /> Modifier accès
                                                            </button>
                                                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 font-medium">
                                                                <Trash2 size={14} /> Supprimer
                                                            </button>
                                                        </div>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}