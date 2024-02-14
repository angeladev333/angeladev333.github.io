import React, { useState } from "react";
import { Button } from "./Button";

// TODO: consider using a database or https://sendgrid.com/en-us/solutions/email-api

function Footer(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/send", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Message Sent.");
        setFormData({
          // reset the form
          name: "",
          email: "",
          message: "",
        });
      } else if (data.status === "fail") {
        alert("Message failed to send.");
      }
    } catch (error) {
      console.error("There was an error sending the message", error);
    }
  };

  return (
    <div className="text-primary bg-secondary rounded-t-3xl">
      <div
        className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-12 pt-24 mx-auto section"
        id="contact-form"
      >
        <div className="md:w-1/3 w-full">
          <h1 className="text-4xl mb-4">Let's Connect!</h1>
          <p className="text-6xl mb-4">Contact Me</p>
          <p className="text-xl font-light border-b-4 border-quaternary pb-4">
            You can also email me at <br></br>
            <a href="mailto:angela.xu.dev@gmail.com" className="font-light">
              angela.xu.dev@gmail.com
            </a>
          </p>
          <span className="flex justify-between mt-6 mx-auto p-6">
            <a
              className="text-white text-3xl cursor-pointer no-underline"
              href="https://www.instagram.com/a.ngela_xu/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="text-white text-3xl cursor-pointer no-underline"
              href="https://www.linkedin.com/in/angela-xu/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              className="text-white text-3xl cursor-pointer no-underline"
              href="https://github.com/angeladev333"
              target="_blank"
              aria-label="Github"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </span>
        </div>
        <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
          <form
            action="send-contact.php"
            method="post"
            id="submit-contact-form"
            onSubmit={handleFormSubmit}
          >
            <div className="p-2 w-full">
              <div className="relative">
                <label for="name" className="leading-7 py-4 text-lg">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required=""
                  placeholder="What's your name?"
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="email"
                  className="leading-7 py-4 text-lg text-gray-900"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required=""
                  placeholder="What's your email?"
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 py-4 text-lg text-gray-900"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required=""
                  placeholder="Type any message you want to send to me here :)"
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full flex justify-center">
              <Button type="submit">Send ✉</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center p-12">
        Designed & Built by Angela Xu 💗
      </div>
    </div>
  );
}

export default Footer;
