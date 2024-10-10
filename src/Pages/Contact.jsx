import { useState } from "react";

const Contact = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Here, you can add your form submission logic (e.g., API call)

    // Show the toast message
    setIsToastVisible(true);

    // Hide the toast message after 3 seconds
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-700">
        Contact Us
      </h1>
      <p className="text-lg text-center mb-8 text-gray-600">
        We would love to hear from you! Please fill out the form below or visit
        us at our store.
      </p>

      {/* Toast Message */}
      {isToastVisible && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg transition duration-300">
          Thanks for your mail, we will get in touch very soon!
        </div>
      )}

      {/* Flex container for form and map */}
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Contact Form */}
        <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                rows="4"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg transition duration-200 hover:bg-purple-600">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="md:w-1/2 m-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Visit Us</h2>
          <iframe
            title="Google Maps Location"
            src="https://maps.google.com/maps?q=7r2by6LVmhsyB1Ch7&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
