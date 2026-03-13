import React from 'react';
import { Pencil, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function ProfilPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900 font-poppins">Informations de Profil</h1>

            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">

                        <div className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white shadow-md overflow-hidden">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" alt="" />

                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-lg font-medium text-slate-900 font-poppins">John Doe</h2>
                            <p className="text-sm text-slate-500 font-medium">Commerçant | Cotonou, Bénin</p>

                            {/* Réseaux Sociaux */}
                            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                    <button key={i} className="p-2 border border-slate-100 rounded-full text-slate-400 hover:text-kkiapay hover:border-red-100 transition-all">
                                        <Icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors">
                        <Pencil size={12} /> Modifier
                    </button>
                </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="font-bold text-slate-900 font-poppins">Informations personnelles</h3>
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-full text-xs font-medium hover:bg-slate-50 transition-colors">
                        <Pencil size={12} /> Modifier
                    </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoItem label="Prénom" value="Dieudonné" />
                    <InfoItem label="Nom" value="Houndagnon" />
                    <InfoItem label="Adresse email" value="dieudonne.h@example.com" />
                    <InfoItem label="Téléphone" value="+229 00 00 00 00" />
                    <div className="md:col-span-2">
                        <InfoItem label="Bio" value="Commerçant" />
                    </div>
                </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                    <h3 className="font-bold text-slate-900 font-poppins">Adresse</h3>
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-full text-xs font-medium hover:bg-slate-50 transition-colors">
                        <Pencil size={12} /> Modifier
                    </button>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoItem label="Pays" value="Bénin" />
                    <InfoItem label="Ville/État" value="Cotonou / Littoral" />
                </div>
            </div>
        </div>
    );
}

function InfoItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-1">
            <p className="text-[11px] font-semibold text-slate-400 capitalize tracking-wider">{label}</p>
            <p className="text-sm font-medium text-slate-900">{value}</p>
        </div>
    );
}