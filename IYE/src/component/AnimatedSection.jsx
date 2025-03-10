import { motion } from "framer-motion";

const text = [
  "Hello, Welcome to IYE!",
  '"Building the Pillars of Your Child\'s Future',
  '- IYE CAN, IYE WILL"' // Closing quote placed before the exclamation marks
];

const AnimatedText = () => {
  return (
    <section className="bg-red-300 px-6 md:px-12 text-center dark:bg-slate-900 dark:text-white">
      <div className="max-w-3xl mx-auto space-y-2 dark:bg-red-300 rounded-3xl">
        {text.map((line, index) => (
          <motion.h1
            key={index}
            className={`text-4xl font-bold leading-tight px-1 py-1 ${
              index === 2 ? "text-white dark:text-white" : "text-black"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 1, duration: 4 }}
          >
            {line}
          </motion.h1>
        ))}
      </div>
    </section>
  );
};

export default AnimatedText;
