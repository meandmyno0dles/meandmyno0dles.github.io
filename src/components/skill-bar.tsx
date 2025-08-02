import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
  delay?: number;
}

export default function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="skill-item"
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{skill.name}</span>
        <span className="text-cyber-green">{skill.level}%</span>
      </div>
      <div className="bg-cyber-dark rounded-full h-2">
        <motion.div
          className="bg-cyber-green h-2 rounded-full"
          initial={{ width: "0%" }}
          animate={isVisible ? { width: `${skill.level}%` } : { width: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
