import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", name: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle login or signup
    if (isLogin) {
      console.log("Logging in with:", formData);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
      } else {
        console.log("Signing up with:", formData);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 m-10 bg-white shadow-md rounded-lg mt-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-purple-600">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <p className="text-gray-600">
          {isLogin ? "Welcome Back!" : "Join Us!"}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required={!isLogin}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>
        )}
        <div>
          <label className="block mb-2 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your password"
          />
        </div>
        {!isLogin && (
          <div>
            <label className="block mb-2 text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required={!isLogin}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Confirm your password"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition duration-200"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      {/* Toggle between Login/Signup */}
      <div className="text-center mt-4">
        <button
          onClick={toggleForm}
          className="text-purple-600 hover:underline"
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
