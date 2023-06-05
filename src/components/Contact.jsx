import React from "react";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigation = useNavigate();
  return (
    <div className="Contact">
      <button onClick={() => navigation("/")}>Home</button>
      <button onClick={() => navigation("/About")}>About</button>
    </div>
  );
};

export default Contact;
