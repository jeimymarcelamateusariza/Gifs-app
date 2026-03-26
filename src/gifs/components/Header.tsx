import { motion } from "motion/react";

interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-2">
        <motion.span
          animate={{ rotate: [0, 15, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
          className="text-3xl"
        >
          ✨
        </motion.span>
        <h1 className="my-6 text-4xl text-center app__name">{title}</h1>
      </div>
      <p className="text-white/40 text-sm text-center tracking-widest uppercase font-bold">
        {description}
      </p>
    </div>
  );
};
