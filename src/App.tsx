import styled from "styled-components";
import { delay, motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// const myVars = {
//   start: {scale: 0},
//   end: {scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 }}
// }
const boxVars = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5, //부모 컴포넌트 아래 컴포넌트에 적용됨
      staggerChildren: 0.2, //자식 컴포넌트 첫번째 0.2*1, 두번째 0.2*2... 늦게 나옴
    },
  }
}

const circleVars = {
  start: {
    opacity: 0,
    y: 10, //아래에서
  },
  end: {
    opacity: 1,
    y: 0, //위로
  },
}

function App() {
  return (
    <Wrapper>
      <Box variants={boxVars} initial="start" animate="end">
        <Circle variants={circleVars}/>
        <Circle variants={circleVars}/>
        <Circle variants={circleVars}/>
        <Circle variants={circleVars}/>
      </Box>
    </Wrapper>
  );
}

export default App;