import React, { useRef } from "react";
import emailjs from "emailjs-com";

interface ContactSectionProps {
  sectionsRef: { contact: React.RefObject<HTMLElement> };
}

const ContactSection: React.FC<ContactSectionProps> = ({ sectionsRef }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_c6mqgyo",
          "template_8828uwr",
          formRef.current,
          "IjHFJsBX0UsadVAui" // stored under "public key" in emailJs
        )
        .then(
          (result) => {
            console.log("Message sent: ", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.error("Error sending message: ", error.text);
            alert("Failed to send message. Please try again.");
          }
        );

      e.currentTarget.reset();
    }
  };

  return (
    <section
      ref={sectionsRef.contact}
      className="max-sm:py-10 min-h-0 bg-white/50 backdrop-blur-md flex items-center justify-center p-4 pt-20 pb-20"
    >
      <div className="max-w-md w-full">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-800">
          Contact Me
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Add a name attribute
              className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Add a name attribute
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message" // Add a name attribute
              rows={4}
              className="w-full bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
