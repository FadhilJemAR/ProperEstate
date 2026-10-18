import { HousePlus, Phone,Mail } from "lucide-react";
import { Facebook, LinkedIn, WhatsApp } from "../assets/MoreIcon";

const navigation = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Katalog", href: "#katalog" },
    { label: "Jual Properti", href: "#jual" },
];

const socialMedia = [
    { name: "Facebook", icon: <Facebook /> },
    { name: "WhatsApp", icon: <WhatsApp /> },
    { name: "LinkedIn", icon: <LinkedIn /> },
];

export default function Footer() {
    return (
        <footer className="bg-slate-950 relative px-6 py-12 text-white md:px-10 lg:px-16 z-2">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:flex-wrap md:justify-between lg:flex-nowrap lg:gap-8">
                <div className="flex flex-1 flex-col items-start">
                    <a
                        href="#home"
                        className="flex items-center gap-2 font-comfortaa text-lg font-bold"
                    >
                        <HousePlus aria-hidden="true" />
                        <span>ProperEstate</span>
                    </a>
                    <p className="mt-4 max-w-xs font-nunito text-sm leading-relaxed text-slate-300">
                        Temukan hunian yang tepat bersama ProperEstate.
                    </p>
                </div>

                <nav aria-label="Navigasi footer" className="flex flex-1 flex-col items-start">
                    <h2 className="font-comfortaa text-base font-bold">Navigasi</h2>
                    <ul className="mt-4 flex flex-col gap-3 font-nunito text-sm text-slate-300">
                        {navigation.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
                                    href={href}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex flex-1 flex-col items-start">
                    <h2 className="font-comfortaa text-base font-bold">Kontak</h2>
                    <a
                        href="tel:+6281234567890"
                        className="mt-4 flex items-center gap-2 font-nunito text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                        <Phone size={16} aria-hidden="true" />
                        <span>+62 812-3456-7890</span>
                    </a>
                    <a
                      href="mailto:ProperEstate@gmail.com"
                      className="mt-4 flex items-center gap-2 font-nunito text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
                    > 
                      <Mail size={16} />  
                      <span>properestate@gmail.com</span>
                    </a>
                </div>

                <div className="flex flex-1 flex-col items-start">
                    <h2 className="font-comfortaa text-base font-bold">Ikuti Kami</h2>
                    <ul aria-label="Media sosial ProperEstate" className="mt-4 flex flex-col gap-3">
                        {socialMedia.map(({ name, icon }) => (
                            <li key={name} className="flex items-center gap-3 font-nunito text-sm text-slate-300">
                                <span className="[&_svg]:brightness-0 [&_svg]:invert">{icon}</span>
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-5 font-nunito text-xs text-slate-400">
                © 2026 ProperEstate. Hak cipta dilindungi.
            </p>
        </footer>
    );
}