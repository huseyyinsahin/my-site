import React, { useState } from "react";
import Confetti from "react-dom-confetti";
import "../style/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isConfettiActive, setConfettiActive] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "" || email === "" || message === "") {
      setErrorMessage("Lütfen tüm alanları doldurunuz.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setConfettiActive(true); 
      setTimeout(() => {
        setConfettiActive(false); 
      }, 5000);

      const formData = new FormData(event.target);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          alert("Form submitted successfully!");
        })
        .catch((error) => alert(error));

 
    }
  };

  return (
    <div>
      <h2 className="form-h2">Send me message</h2>
      <main className="form-main">
        <form
          className="form"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <div className="form-name">
            <label>
              Your Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-email">
            <label>
              Your Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-message">
            <label>
              Message
              <textarea
                rows="5"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className={`errorMessage ${errorMessage && "show"}`} id="errorMessage">
            {errorMessage && <p>{errorMessage}</p>}
          </div>
          <div className="form-button">
            <button type="submit">Send</button>
          </div>
        </form>
      </main>
      <Confetti
        active={isConfettiActive}
        config={{
          spread: 5000,
          elementCount: 600,
          colors: ["#ff0000", "#00ff00", "#0000ff", "#007bff"],
        }}
      />
    </div>
  );
};

export default Form;
