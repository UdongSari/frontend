import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
      className="styles.Container"
    >
      <div />
      <h1 className="Error">404에러 페이지입니다.</h1>
      <button className="Btn" onClick={onClickBack}>
        메인페이지로 이동하기
      </button>
    </motion.div>
  );
};

export default Error;
