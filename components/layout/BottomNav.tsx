import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, CreditCard, Users, Settings, MessageCircle } from 'lucide-react'; // Adapte avec tes icônes

export default function BottomNav() {
    const pathname = usePathname();

    // Adapte ces items avec tes routes réelles
    const navItems = [
        { name: 'Tableau', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Transactions', href: '/transactions', icon: CreditCard },
        { name: 'Chat', href: '/chat', icon: MessageCircle },
        { name: 'Clients', href: '/clients', icon: Users },
        { name: 'Paramètres', href: '/parametres', icon: Settings },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-around items-center z-50 px-2 pb-safe">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive
                                ? 'text-[#e31937]'
                                : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'
                            }`}
                    >
                        <item.icon size={20} />
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
}