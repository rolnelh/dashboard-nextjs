import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Wallet, Banknote, Users } from "lucide-react";
import { SubAccountCard } from "@/components/dashboard/SubAccountCard";

export default function SousComptesPage() {
    return (
        <div className="space-y-6">
            {/* Barre de recherche et bouton Créer */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Mes sous-comptes</h2>
                <Button className="bg-red-600 hover:bg-red-700">
                    <Plus className="mr-2 h-4 w-4" /> Créer un sous-compte
                </Button>
            </div>

            {/* Onglets de filtrage */}
            <Tabs defaultValue="integration" className="w-full flex flex-col">
                <TabsList className="bg-slate-50 border-b border-slate-800 w-full rounded-none p-0 h-12">
                    <TabsTrigger
                        value="integration"
                        className="data-[state=active]:border-b-2 data-[state=active]:border-[#e31937] data-[state=active]:text-gray-900 text-slate-800 rounded-none flex-1 transition-all hover:text-slate-200 rounded-sm"
                    >
                        Intégration
                    </TabsTrigger>

                    <TabsTrigger
                        value="terminal"
                        className="data-[state=active]:border-b-2 data-[state=active]:border-[#e31937] data-[state=active]:text-gray-900 text-slate-800 rounded-none flex-1 transition-all hover:text-slate-200 rounded-sm"
                    >
                        Terminal de paiement
                    </TabsTrigger>

                    <TabsTrigger
                        value="application"
                        className="data-[state=active]:border-b-2 data-[state=active]:border-[#e31937] data-[state=active]:text-gray-900 text-slate-800 rounded-none flex-1 transition-all hover:text-slate-200 rounded-sm"
                    >
                        Application mobile
                    </TabsTrigger>

                    <TabsTrigger
                        value="chapchap"
                        className="data-[state=active]:border-b-2 data-[state=active]:border-[#e31937] data-[state=active]:text-gray-900 text-slate-800 rounded-none flex-1 transition-all hover:text-slate-200 rounded-sm"
                    >
                        Chapchap
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="integration" className="space-y-6 py-6 w-full">

                    {/* Section Récapitulatif */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Récapitulatif</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <StatCard title="REVENU TOTAL" icon={<Banknote />} />
                            <StatCard title="SOLDE D'OPÉRATION" icon={<Wallet />} />
                            <StatCard title="SOLDE DISPONIBLE" icon={<Users />} />
                        </div>
                    </div>

                    {/* Section Liste des comptes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <SubAccountCard name="SHOP" type="Intégration" status="Inactif" />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

function StatCard({ title, icon }: { title: string; icon: React.ReactNode }) {
    return (
        <Card className="border-l-4 border-gray-200">
            <CardContent className="p-4 flex justify-between items-center">
                <div>
                    <p className="text-xs text-gray-500 font-bold mb-2">{title}</p>
                    <p className="font-mono text-lg">**********</p>
                </div>
                <div className="text-gray-300">{icon}</div>
            </CardContent>
        </Card>
    );
}