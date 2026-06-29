import React from 'react';
import { Search, Filter, Download } from 'lucide-react';

export default function ClientsPage() {
    return (
        <div className="p-6 space-y-6 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
            {/* En-tête */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Clients</h1>
                <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
                    <Download size={16} /> Télécharger
                </button>
            </div>

            {/* Barre de Filtres */}
            <div className="flex gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-200 dark:border-slate-800 transition-colors">
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-slate-700 rounded-lg text-sm text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800">
                    <Filter size={14} /> Filtrer par pays
                </button>
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 text-gray-400 dark:text-slate-500" size={16} />
                    <input
                        type="text"
                        placeholder="Rechercher"
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-950 text-gray-900 dark:text-white placeholder-gray-400"
                    />
                </div>
            </div>

            {/* Tableau des Clients */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden transition-colors">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 dark:bg-slate-950 text-gray-500 dark:text-slate-400 font-medium">
                        <tr>
                            <th className="p-4">Client</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Téléphone</th>
                            <th className="p-4">Adresse</th>
                            <th className="p-4">Pays</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                        <tr className="hover:bg-gray-50 dark:hover:bg-slate-800/50">
                            <td className="p-4 font-medium text-gray-900 dark:text-white">Shadai Ali</td>
                            <td className="p-4 text-gray-600 dark:text-slate-400">shadai.ali@mehriso.com</td>
                            <td className="p-4 text-gray-600 dark:text-slate-400">66246031</td>
                            <td className="p-4 text-gray-600 dark:text-slate-400">#</td>
                            <td className="p-4 flex items-center gap-2 text-gray-900 dark:text-slate-300">
                                <span>🇧🇯</span> Bénin
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Pied de tableau (Pagination) */}
                <div className="px-4 py-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between bg-gray-50 dark:bg-slate-950">
                    <span className="text-xs text-gray-500 dark:text-slate-500">1-50 sur 250</span>
                    {/* Boutons de pagination ici, avec les classes dark: associées */}
                </div>
            </div>
        </div>
    );
}