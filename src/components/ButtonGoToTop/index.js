import { motion } from "framer-motion";

import { useState } from "react";

const ButtonGoToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {visible ? (
        <motion.button
          className="goToTop"
          onClick={scrollToTop}
          animate={{ scale: 2 }}
          transition={{ duration: 0.2 }}
        >
          <i class="fas fa-chevron-circle-up"></i>
        </motion.button>
      ) : (
        <motion.button
          className="goToTop"
          onClick={scrollToTop}
          animate={{ scale: 0 }}
          transition={{ duration: 0.4 }}
        >
          <i class="fas fa-chevron-circle-up"></i>
        </motion.button>
      )}
    </>
  );
};

export default ButtonGoToTop;
