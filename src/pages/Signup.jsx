import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import PasswordStrength from "../components/PasswordStrength";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.length < 3) {
      tempErrors.name = "Name must be 3+ characters";
    }

    if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email";
    }

    if (formData.password.length < 8) {
      tempErrors.password = "Password must be 8+ characters";
    }

    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Signup Successful ");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="auth-container fade-in">
      <form className="auth-box slide-up" onSubmit={handleSubmit}>
        <h2>Create Account </h2>

        <InputField
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter full name"
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter email"
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Create password"
          togglePassword={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
        />

        <PasswordStrength password={formData.password} />

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          placeholder="Confirm password"
        />

        <button type="submit">Signup</button>

        <p>
          Already have account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
