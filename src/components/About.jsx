import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const About = () => {
  const params = useParams();

  console.log(params.name);
  const navigation = useNavigate();

  return (
    <div className="About">
      <button onClick={() => navigation("/")}>Home</button>
      <button onClick={() => navigation("/Contact")}>Contact</button>
    </div>
  );
};
export default About;
