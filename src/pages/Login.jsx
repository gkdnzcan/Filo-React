import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import users from "../data/vehicles.json"; // JSON dosyasını içe aktar

function Login() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("tr");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    let hasError = false;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = translations[language].emailError;
      hasError = true;
    }
    if (!password) {
      newErrors.password = translations[language].passwordError;
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      // Kullanıcı doğrulama
      const user = Object.values(users).find(
        (user) => user.username === email && user.password === password
      );

      if (user) {
        // Giriş başarılı
        navigate("/dashboard", { state: { user } });
      } else {
        // Hatalı giriş
        setErrors({
          email: "",
          password: "Kullanıcı adı veya şifre hatalı!",
        });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const translations = {
    tr: {
      emailPlaceholder: "E-posta",
      passwordPlaceholder: "Şifre",
      loginButton: "Giriş Yap",
      forgotPassword: "Şifremi Unuttum",
      emailError: "E-posta boş olamaz.",
      passwordError: "Şifre boş olamaz.",
    },
    en: {
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      loginButton: "Login",
      forgotPassword: "Forgot Password",
      emailError: "Email cannot be empty.",
      passwordError: "Password cannot be empty.",
    },
    de: {
      emailPlaceholder: "E-Mail",
      passwordPlaceholder: "Passwort",
      loginButton: "Einloggen",
      forgotPassword: "Passwort vergessen",
      emailError: "E-Mail darf nicht leer sein.",
      passwordError: "Passwort darf nicht leer sein.",
    },
    fr: {
      emailPlaceholder: "E-mail",
      passwordPlaceholder: "Mot de passe",
      loginButton: "Connexion",
      forgotPassword: "Mot de passe oublié",
      emailError: "L'e-mail ne peut pas être vide.",
      passwordError: "Le mot de passe ne peut pas être vide.",
    },
    bg: {
      emailPlaceholder: "Имейл",
      passwordPlaceholder: "Парола",
      loginButton: "Вход",
      forgotPassword: "Забравена парола",
      emailError: "Имейлът не може да бъде празен.",
      passwordError: "Паролата не може да бъде празна.",
    },
    ar: {
      emailPlaceholder: "البريد الإلكتروني",
      passwordPlaceholder: "كلمة المرور",
      loginButton: "تسجيل الدخول",
      forgotPassword: "نسيت كلمة المرور",
      emailError: "لا يمكن أن يكون البريد الإلكتروني فارغًا.",
      passwordError: "لا يمكن أن تكون كلمة المرور فارغة.",
    },
    az: {
      emailPlaceholder: "E-poçt",
      passwordPlaceholder: "Şifrə",
      loginButton: "Daxil ol",
      forgotPassword: "Şifrəni unutmusunuz",
      emailError: "E-poçt boş ola bilməz.",
      passwordError: "Şifrə boş ola bilməz.",
    },
    kk: {
      emailPlaceholder: "Электрондық пошта",
      passwordPlaceholder: "Құпия сөз",
      loginButton: "Кіру",
      forgotPassword: "Құпия сөзді ұмыттыңыз ба",
      emailError: "Электрондық пошта бос болмауы керек.",
      passwordError: "Құпия сөз бос болмауы керек.",
    },
    ru: {
      emailPlaceholder: "Электронная почта",
      passwordPlaceholder: "Пароль",
      loginButton: "Войти",
      forgotPassword: "Забыли пароль",
      emailError: "Электронная почта не может быть пустой.",
      passwordError: "Пароль не может быть пустым.",
    },
    sv: {
      emailPlaceholder: "E-post",
      passwordPlaceholder: "Lösenord",
      loginButton: "Logga in",
      forgotPassword: "Glömt lösenord",
      emailError: "E-post får inte vara tom.",
      passwordError: "Lösenord får inte vara tomt.",
    },
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img src="/images/login-logo.png" alt="Logo" className="logo" />
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder={translations[language].emailPlaceholder}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={translations[language].passwordPlaceholder}
              required
            />
            <span
              className={`fa form-control-icon end-icon ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              }`}
              onClick={togglePasswordVisibility}
            ></span>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="login-btn">
            {translations[language].loginButton}
          </button>
        </form>
        <div className="login-footer">
          <a href="#">{translations[language].forgotPassword}</a>
        </div>
        <div className="language-selector">
          <label htmlFor="language">Dil:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="bg">Български</option>
            <option value="ar">العربية</option>
            <option value="az">Azərbaycan</option>
            <option value="kk">Қазақша</option>
            <option value="ru">Русский</option>
            <option value="sv">Svenska</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Login;