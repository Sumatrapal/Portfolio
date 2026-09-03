import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const AnimatedRole = () => {
  const text = "Software Developer & Full Stack Developer";

  return (
    <motion.span
      className="inline-block"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.06,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1.5,
          },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className={`inline-block ${
            index >= 21 ? "text-purple-500" : ""
          }`}
          variants={{
            hidden: {
              opacity: 0.45,
              y: 0,
            },
            visible: {
              opacity: [0.45, 1, 0.65, 1],
              y: [0, -4, 0],
              transition: {
                duration: 1.2,
                ease: "easeInOut",
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Background Glow 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background Glow 2 */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {/* Small Intro */}
        <motion.p
          className="mb-5 text-sm md:text-base font-medium tracking-[0.25em] uppercase text-purple-500"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="font-[Syne] text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          Sumatra Pal
        </motion.h1>

        {/* Animated Role */}
        <motion.h2
          className="mt-5 text-2xl sm:text-3xl md:text-4xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        >
          <AnimatedRole />
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          I build scalable, user-focused applications with modern
          technologies. Passionate about software engineering,
          full-stack development, problem solving, and turning ideas
          into real-world products.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:shadow-lg transition-shadow duration-300"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
          >
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.7,
          }}
        >
          <motion.a
            href="https://github.com/Sumatrapal"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            GitHub
          </motion.a>

          <motion.a
            href="#"
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
        >
          <motion.a
            href="#about"
            aria-label="Scroll to About"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-500 hover:text-purple-500 transition-colors"
          >
            <ArrowDown size={22} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;