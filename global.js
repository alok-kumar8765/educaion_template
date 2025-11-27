/* ==========================
   THEME SYSTEM (FULLY FIXED)
========================== */

const themes = ["light", "dark", "neon"];

function applyTheme(theme) {
  document.body.classList.remove("light", "dark", "neon");
  document.body.classList.add(theme);
  localStorage.setItem("auth-theme", theme);
}

function toggleTheme() {
  let current = localStorage.getItem("auth-theme") || "light";
  let next = themes[(themes.indexOf(current) + 1) % themes.length];
  applyTheme(next);
}

window.addEventListener("DOMContentLoaded", () => {
  let saved = localStorage.getItem("auth-theme") || "light";
  applyTheme(saved);
});

/* ==========================
   LANGUAGE SWITCHER (WORKING)
========================== */

const translations = {
  en: {
    login_title: "Welcome Back",
    login_sub: "Login to continue",
    email: "Email",
    password: "Password",
    login_btn: "Login",
    forgot: "Forgot Password?",
    register: "Create Account"
  },

  hi: {
    login_title: "वापसी पर स्वागत है",
    login_sub: "जारी रखने के लिए लॉगिन करें",
    email: "ईमेल",
    password: "पासवर्ड",
    login_btn: "लॉगिन करें",
    forgot: "पासवर्ड भूल गए?",
    register: "अकाउंट बनाएँ"
  },

  es: {
    login_title: "Bienvenido de nuevo",
    login_sub: "Inicie sesión para continuar",
    email: "Correo",
    password: "Contraseña",
    login_btn: "Iniciar sesión",
    forgot: "¿Olvidaste tu contraseña?",
    register: "Crear cuenta"
  }
};

function changeLang(value) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    let key = el.getAttribute("data-i18n");
    el.textContent = translations[value][key];
  });

  localStorage.setItem("auth-lang", value);
}

window.addEventListener("DOMContentLoaded", () => {
  let savedLang = localStorage.getItem("auth-lang") || "en";
  changeLang(savedLang);
  document.getElementById("langSelect").value = savedLang;
});

/* ==========================
   FORM VALIDATION
========================== */

function validateForm(id) {
  let valid = true;
  const form = document.getElementById(id);
  const inputs = form.querySelectorAll("input");

  inputs.forEach(inp => {
    if (inp.required && inp.value.trim() === "") {
      inp.style.borderColor = "red";
      valid = false;
    } else {
      inp.style.borderColor = "var(--border)";
    }
  });

  return valid;
}
