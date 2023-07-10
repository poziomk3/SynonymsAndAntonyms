"use client";
import { motion } from "framer-motion";
interface OrbitItemProps {
  rotation: number;
  radius: number;

  word: string;
}

const OrbitItem: React.FC<OrbitItemProps> = ({
  rotation,
  radius,
  word,
}) => {

  return (
    <div
      style={{
        translate: "-50%,-50%",
        position: "absolute",
        transform: `translate(-50%,-50%) rotate(${rotation}deg) translate(${
          (radius)
        }em)  rotate(-${rotation}deg) `,
      }}
      className="text-center h-[1rem] top-[50%]  left-[50%]  text-red-400 w-[10rem]  block "
    >
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
      >
        {word}
      </motion.div>
    </div>
  );
};

export default OrbitItem;
