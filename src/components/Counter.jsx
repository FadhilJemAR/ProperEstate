import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Counter({ from = 0, to = 100 }) {
  const count = useMotionValue(from);
  
  const onView = ()=>{
    animate(count, to, {
      duration: 2, // durasi dalam detik
      ease: "easeOut",
    }
  )
  }
  // Membulatkan angka desimal agar menjadi bilangan bulat saat bertambah
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return <motion.span whileInView={onView}>{rounded}</motion.span>;
}
