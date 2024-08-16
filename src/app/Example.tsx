import React, { useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useVelocity,
  animate,
} from "framer-motion";

export function InViewVelocityExample() {
  // Buat motion value untuk posisi X
  const x = useMotionValue(0);

  // Gunakan useVelocity untuk melacak kecepatan dari motion value x
  const velocity = useVelocity(x);

  // Ref untuk elemen yang akan kita lacak dengan useInView
  const ref = React.useRef(null);

  // useInView untuk mendeteksi apakah elemen terlihat di viewport
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      // Animasi looping menggunakan animate dengan repeat: Infinity
      animate(x, 1000, {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse", // Agar bolak-balik, hilangkan ini jika tidak ingin reverse
      });
    }
  }, [isInView, x]);

  return (
    <div className="h-screen flex items-center justify-center">
      {/* Elemen Konten */}
      <motion.div
        ref={ref}
        style={{ x }} // Hubungkan motion value x ke elemen
        className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center"
      >
        <p>Velocity: {velocity.get().toFixed(2)}</p>
      </motion.div>
    </div>
  );
}
