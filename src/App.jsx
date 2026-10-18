import { useEffect, useState } from "react";
import { HousePlus, Menu, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Summary from "./components/Summary";
import AboutSection from "./components/AboutSection";
import CatalogSection from "./components/CatalogSection";
import SellSection from "./components/SellSection";
import Footer from "./components/Footer";

const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Katalog", href: "#katalog" },
  { label: "Jual Properti", href: "#jual" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <main className="relative overflow-x-hidden">
        <div id="beranda" className=" relative   h-160 md:h-130 w-full  rounded-t-sm font-comfortaa ">
        <img loading="eager" className="fixed w-full max-h-160 h-full object-cover z-0" src="/Hero_bg.webp"/>
        {/* Header yang berisi navigasi  */}
          <div className="p-5  top-0 relative left-0 z-2 text-white w-full flex justify-between items-center ">
            {/* Logo  */}
            <div className="flex gap-2  items-center ">
              <HousePlus />
              <span>ProperEstate</span>
            </div>
            {/* Navigasi untuk layar medium ke atas */}
            <nav className="hidden md:block">
              <ul className="flex gap-4 text-sm">
                {navigation.map(({ label, href }) => (
                  <li key={label}>
                    <a className="relative inline-block transition duration-300 ease-out hover:-translate-y-0.5 hover:text-amber-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="flex gap-2">
              {/* Menu Hamburger untuk Mobile */}
              <button
                type="button"
                aria-label="Buka menu navigasi"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen(true)}
                className="flex size-10 items-center justify-center md:hidden"
              >
                <Menu aria-hidden="true" />
              </button>
              {/* Login Register */}
              <button className="bg-white duration-300 hover:cursor-pointer hover:bg-gray-300 text-black py-1 px-4 text-sm hidden md:block">Masuk</button>
              <button className="border-white duration-300 hover:cursor-pointer hover:opacity-70   text-white backdrop-blur-xs border  py-1 px-4 text-sm hidden md:block">Daftar</button>
            </div>
          </div>
          {/* Hero Section utama yang menampung konten dan judul utama */}
          <header className=" p-5 w-full" id="#beranda">
          <div className="relative  text-sm md:text-2xl text-left gap-4 md:gap-8   bg-white/90 rounded-3xl backdrop-blur-xs p-2 px-4 mt-18 mx-auto max-w-140 flex  items-center">
            <Search className="md:size-10 size-7"/>
              <div className="flex">
              <h1>
               Properti murah di ProperEstate
              </h1>
               <motion.span
               animate={{ opacity: [1, 0] }}
                transition={
                  {
                    repeatType:"reverse",
                    repeat:Infinity,
                    ease:"anticipate",
                    duration:0.5,
                  }
                }
                
               >_
               </motion.span>
              </div>
            </div>
            <Summary/>
          </header>
        </div>
        <div className="relative z-3">
        <AboutSection />
        <CatalogSection />
        <SellSection />
        </div>
      </main>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
          <motion.button
            type="button"
            aria-label="Tutup menu navigasi"
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 size-full cursor-default bg-black/60"
          />
          <motion.aside
            id="mobile-navigation"
            aria-label="Menu navigasi"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="absolute right-0 top-0 flex h-dvh w-1/2 flex-col bg-white p-6 text-slate-900 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="font-comfortaa text-lg font-bold">Menu</span>
              <button
                type="button"
                aria-label="Tutup menu navigasi"
                onClick={() => setIsMenuOpen(false)}
                className="flex size-10 items-center justify-center rounded-full transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <X aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Navigasi mobile" className="mt-8">
              <ul className="flex flex-col gap-6 font-nunito text-base">
                {navigation.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="transition-colors hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex flex-col gap-3 font-nunito">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Masuk
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-bold transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Daftar
              </button>
            </div>
          </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  )
}