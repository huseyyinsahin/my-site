import React from "react";
import { Link } from "react-router-dom"; // React Router kullanıyorsanız
import "../style/FormButton.css";
import { FaRegMessage } from "react-icons/fa6";

const FormButton = () => {
  return (
    <button>
      <Link to="/Form">
        <button className="messageButton" id="messageButton">
          <FaRegMessage className="i" />
          <span className="tooltip">Send me message</span>
        </button>
      </Link>
    </button>
  );
};

export default FormButton;
