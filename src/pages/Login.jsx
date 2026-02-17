import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (formData.password.length < 6) {
      tempErrors.password = "Password must be 6+ characters";
    }

    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Login Successful ");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="auth-container fade-in">
      <form className="auth-box slide-up" onSubmit={handleSubmit}>
        <h2>Welcome Back </h2>

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Enter your password"
          togglePassword={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
        />

        <button type="submit">Login</button>

        <p>
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
