import React from "react";

const Contact = () => {
  return (
    <>
      <div className="main-form">
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="xzy" />
          </div>
          <div>
            <label>Email</label>
            <input type="mail" placeholder="xzy@gmail.com" />
          </div>
          <div>
            <label>Message</label>
            <textarea
              type="textarea"
              placeholder="Tell us Your Query..."
              rows={5}
              cols={20}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
