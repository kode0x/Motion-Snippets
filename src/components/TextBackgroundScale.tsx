import { motion } from "motion/react";

interface TextBackgroundScaleProps {
  text: string;
}

const TextBackgroundScale: React.FC<TextBackgroundScaleProps> = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotate: 5,
      }}
      transition={{
        duration: 0.3,
      }}
      style={{ display: "inline-block", color: "inherit", fontSize: 48 }}
    >
      <motion.div
        whileHover={{
          color: "#000",
          backgroundColor: "#fff",
          paddingLeft: 25,
          paddingRight: 25,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 5,
        }}
        style={{ display: "inline" }}
      >
        {props.text}
      </motion.div>
    </motion.div>
  );
};

export default TextBackgroundScale;
