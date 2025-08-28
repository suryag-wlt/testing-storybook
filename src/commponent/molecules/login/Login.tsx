import React, { useState } from "react";
import "./Login.css";

export interface LoginFormData {
  email: string;
  username: string;
  password: string;
}

export interface LoginFormProps {
  email?: string;
  username?: string;
  password?: string;
  success?: boolean;
  title?: string;
  subtitle?: string;
  btnText?: string;
  borderRadius?: string;
  bgColor?: string;
  color?: string;

  onSubmit?: (data: LoginFormData) => void;
}

export const Login: React.FC<LoginFormProps> = ({
  email = "",
  username = "",
  password = "",
  success = false,
  title = "Welcome Back",
  subtitle = "Sign in to your account",
  btnText = "Sign In",
  borderRadius = "12px",
  bgColor = "#fff",
  color = "#000",
  onSubmit,
}) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email,
    username,
    password,
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [showSuccess, setShowSuccess] = useState(success);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<LoginFormData> = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
      onSubmit?.(formData);
      setFormData({ email: "", username: "", password: "" });

      setTimeout(() => setShowSuccess(false), 6000);
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundColor: bgColor, color: color, borderRadius }}
    >
      <div className="login-card">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={formData.email}
              placeholder="your@email.com"
              className={errors.email ? "error" : ""}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={formData.username}
              placeholder="Username"
              className={errors.username ? "error" : ""}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            {errors.username && (
              <p className="error-text">{errors.username}</p>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={formData.password}
              placeholder="••••••••"
              className={errors.password ? "error" : ""}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <p className="error-text">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="btn-login">
            {btnText}
          </button>
        </form>

        {showSuccess && (
          <div className="success-msg">Login successful! Welcome back.</div>
        )}
      </div>
    </div>
  );
};
