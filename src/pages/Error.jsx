import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Error.scss";
import { Button } from "../components/Button";

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
      <div className="Error-wrapper">
        <h1 className="Error">404에러 페이지입니다.</h1>
        <Button
          type={"primary"}
          width={"200px"}
          height={"36px"}
          onClick={onClickBack}
        >
          메인페이지로 이동하기
        </Button>
      </div>
    </motion.div>
  );
};

export default Error;
