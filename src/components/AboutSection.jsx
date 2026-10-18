import Counter from "./Counter";
const companyHighlights = [
    {
        title: "Penjualan Properti",
        description:
            "Kami membantu pemilik memasarkan properti dengan strategi yang tepat hingga menemukan pembeli yang sesuai.",
        statistics: [
            { value: 795, label: "Transaksi berhasil" ,suffix:"+"},
            { value: 32, label: "Rata-rata waktu terjual",suffix:" Hari" },
        ],
    },
    {
        title: "Pendampingan Pembeli",
        description:
            "Tim kami mendampingi calon pemilik rumah menemukan properti yang cocok dengan kebutuhan dan anggaran mereka.",
        statistics: [
            { value: 1000, label: "Pembeli terbantu" ,suffix:"+" },
            { value: 98, label: "Tingkat kepuasan" ,suffix:"%" },
        ],
    },
];

export default function AboutSection() {
    return (
        <section
            id="tentang"
            className="flex flex-col gap-8 bg-white px-6 py-16 font-nunito md:flex-row md:items-start md:gap-12 lg:px-16"
        >
            <div className="md:w-1/3">
                <h2 className="font-comfortaa text-3xl font-bold text-slate-900 md:text-4xl">
                    Tentang kami
                </h2>
            </div>

            <div className="flex w-full flex-row gap-3 md:flex-1 md:gap-6 font-nunito">
                {companyHighlights.map((highlight) => (
                    <article
                        className="flex min-w-0 flex-1 flex-col rounded-2xl  p-4  md:p-6"
                        key={highlight.title}
                    >
                        <h3 className="text-sm font-bold text-slate-900 md:text-lg">
                            {highlight.title}
                        </h3>
                        <p className="mt-3 text-xs leading-relaxed text-slate-600 md:text-sm">
                            {highlight.description}
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-2">
                            {highlight.statistics.map((statistic) => (
                                <div
                                    className="min-w-0 border-t border-slate-200 pt-3"
                                    key={statistic.label}
                                >
                                    <p className="text-sm font-bold  md:text-xl">
                                        <Counter from={0} to={statistic.value} />{statistic.suffix}
                                    </p>
                                    <p className="mt-1 text-[10px] leading-snug text-slate-500 md:text-xs">
                                        {statistic.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}