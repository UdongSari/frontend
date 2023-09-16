import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HashTag } from "../components/HashTag";

export default function Home() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
  };

  const [selected, setSelected] = useState([]);

  return (
    <>
      <div className="home-wrapper">
        <HashTag.Group interactable get={selected} set={setSelected}>
          <HashTag.Item active>테마1</HashTag.Item>
          <HashTag.Item>테마2</HashTag.Item>
          <HashTag.Item>테마3</HashTag.Item>
        </HashTag.Group>
      </div>
    </>
  );
}
