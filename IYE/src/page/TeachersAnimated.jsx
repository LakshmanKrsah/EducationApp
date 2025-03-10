import { motion } from "framer-motion";

const text = [
  "Knowledge is the Only Wealth that Grows the More You Share It.",
  "Share Knowledge → Earn LimitLess → Become Self-Reliant!"
];

const TeachersAnimated = () => {
  return (
    <section className="bg-red-300 px-6 md:px-12 text-center py-6 dark:bg-slate-900 dark:text-white mt-16">
      <div className="max-w-3xl mx-auto space-y-2 rounded-3xl ">
        {text.map((line, index) => (
          <motion.h1
            key={index}
            className={`text-3xl font-bold leading-tight px-1 py-1 dark:bg-slate-900 ${
              index === 1 ? "text-white dark:text-white" : " dark:text-purple-500"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.8, duration: 1.5 }}
          >
            {line}
          </motion.h1>
        ))}
      </div>
    </section>
  );
};

export default TeachersAnimated;
