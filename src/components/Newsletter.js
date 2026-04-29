import { useState } from "react";
import emailjs from "@emailjs/browser";
import './Newsletter_Style.css';

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus({ success: false, message: "Enter a valid email." });
      return;
    }

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_NEWSLETTER_TEMPLATE,
        { email },
        process.env.REACT_APP_EMAILJS_PUBLIC
      );

      setStatus({ success: true, message: "Subscribed successfully!" });
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: "Subscription failed." });
    }
  };

  return (
    <div className="newsletter-bx">
  <h3>Subscribe to our Newsletter</h3>

  <form onSubmit={handleSubmit}>
    <div className="new-email-bx">
      <input
        type="email"
        value={email}
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </div>
  </form>

  {status && (
    <p className={status.success ? "success" : "danger"}>
      {status.message}
    </p>
  )}
</div>
  );
};