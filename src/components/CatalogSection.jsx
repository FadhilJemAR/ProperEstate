import { Bath, BedDouble, MoveRight } from "lucide-react";
import { motion } from "motion/react";

const properties = [
    { name: "Rumah Modern Minimalis", price: "Rp 850 juta", area: "120 m²", bedrooms: 3, bathrooms: 2, image: "photo-1512917774080-9991f1c4c750" },
    { name: "Rumah Asri dekat Taman", price: "Rp 1,2 miliar", area: "160 m²", bedrooms: 4, bathrooms: 3, image: "photo-1600596542815-ffad4c1539a9" },
    { name: "Hunian Nyaman Keluarga", price: "Rp 720 juta", area: "96 m²", bedrooms: 3, bathrooms: 2, image: "photo-1600607687939-ce8a6c25118c" },
    { name: "Rumah Elegan 2 Lantai", price: "Rp 1,8 miliar", area: "210 m²", bedrooms: 5, bathrooms: 4, image: "photo-1600607687920-4e2a09cf159d" },
    { name: "Rumah Compact Modern", price: "Rp 630 juta", area: "84 m²", bedrooms: 2, bathrooms: 2, image: "photo-1600566753086-00f18fb6b3ea" },
    { name: "Rumah Klasik Asri", price: "Rp 980 juta", area: "135 m²", bedrooms: 3, bathrooms: 2, image: "photo-1600585154340-be6161a56a0c" },
    { name: "Rumah Keluarga Premium", price: "Rp 2,4 miliar", area: "280 m²", bedrooms: 5, bathrooms: 4, image: "photo-1600047509807-ba8f99d2cdde" },
    { name: "Rumah Hangat Minimalis", price: "Rp 1,4 miliar", area: "110 m²", bedrooms: 3, bathrooms: 2, image: "photo-1600566753190-17f0baa2a6c3" },
];

export default function CatalogSection() {
    return (
        <section id="katalog" className="bg-stone-50 px-6 py-16 md:py-20 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-2 font-nunito text-sm font-bold uppercase tracking-[0.2em] text-gray-600">
                            Temukan properti terbaik
                        </p>
                        <h2 className="font-comfortaa text-3xl font-bold text-slate-900 md:text-4xl">
                            Katalog
                        </h2>
                    </div>
                    <p className="max-w-md font-nunito text-sm leading-relaxed text-slate-600">
                        Pilihan properti nyaman untuk keluarga maupun bisnis
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {properties.map((property, index) => (
                        <motion.article
                            key={property.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                            className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={`https://images.unsplash.com/${property.image}?auto=format&fit=crop&w=800&q=80`}
                                    alt={property.name}
                                    loading="lazy"
                                    className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-nunito text-xs font-bold text-slate-700 backdrop-blur">
                                    Dijual
                                </span>
                            </div>

                            <div className="p-4">
                                <h3 className="font-nunito text-sm font-bold text-slate-800 md:text-base">
                                    {property.name}
                                </h3>
                                <p className="mt-2 font-nunito text-lg font-extrabold ">
                                    {property.price}
                                </p>
                                <p className="mt-1 font-nunito text-sm text-slate-500">
                                    Luas properti <span className="font-bold text-slate-700">{property.area}</span>
                                </p>

                                <div className="mt-4 flex items-center gap-4 border-t border-stone-100 pt-3 font-nunito text-sm text-slate-600">
                                    <span className="flex items-center gap-1.5">
                                        <BedDouble size={17} aria-hidden="true" />
                                        {property.bedrooms} kamar
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Bath size={17} aria-hidden="true" />
                                        {property.bathrooms} mandi
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 font-nunito text-sm font-bold text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 active:bg-slate-700 hover:cursor-pointer"
                                >
                                    Lihat detail
                                    <MoveRight size={16} aria-hidden="true" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
