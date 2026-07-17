import { motion } from "framer-motion"
export default function Button({
  children,
  variant = "primary",
  href = "#",
  ariaLabel,
}) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel || children}
      className={`button button--${variant}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      {children}
    </motion.a>
  )
}
