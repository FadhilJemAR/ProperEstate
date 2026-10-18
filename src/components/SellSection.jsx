import {Facebook,LinkedIn,WhatsApp} from "../assets/MoreIcon";

const socialMedia = [
    { name: "Facebook", icon: <Facebook/> },
     { name: "WhatsApp", icon: <WhatsApp/> },
     { name: "LinkedIn", icon:<LinkedIn/> },
];

export default function SellSection() {
    return (
        <section
            id="jual"
            className="flex flex-col gap-8 bg-white px-6 py-16 font-nunito md:flex-row md:items-center md:gap-12 lg:px-16"
        >
            <img
                src="/Contact_img.webp"
                alt="Tim ProperEstate siap membantu menjual properti Anda"
                loading="lazy"
                className="aspect-4/3 w-full rounded-2xl object-cover md:w-1/2"
            />

            <div className="flex flex-col items-start md:flex-1">
                <h2 className="font-comfortaa text-3xl font-bold text-slate-900 md:text-4xl">
                    Mau jual properti?
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
                    Kami siap membantu memasarkan properti Anda dan menemukan pembeli yang tepat.
                    Hubungi tim ProperEstate melalui media sosial di bawah untuk mulai menjual
                    properti Anda.
                </p>

                <ul
                    aria-label="Media sosial ProperEstate"
                    className="mt-6 flex flex-wrap gap-3"
                >
                    {socialMedia.map(({ name, icon }) => (
                        <li
                            key={name}
                            className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700"
                        >
                            {icon}
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}