import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
};

const MainList = ({ id, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardVariants = {
    hover: { scale: 1.05 },
    initial: { scale: 1 },
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
    },
    initial: {
      scale: 1.05,
      opacity: 0,
    },
  };

  return (
    <Wrapper
      layout
      initial="initial"
      whileHover="hover"
      data-isopen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <Glow variants={glowVariants} transition={{ ease: "easeOut" }} />
      <MotionBox
        variants={cardVariants}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        <Title>{title}</Title>
      </MotionBox>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 50%;
  height: 100px;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 16px;
  &[data-isopen="true"] {
    height: 200px;
    width: 100%;
  }
`;

const Glow = styled(motion.div)`
  background: linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(15px);
  border-radius: 16px;
`;

const MotionBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  position: relative;
`;

const Title = styled.span``;

export default MainList;
