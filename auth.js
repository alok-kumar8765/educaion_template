/* =====================================================
   STUDENT UI — GLOBAL JAVASCRIPT
   (Theme, Language, Validation, Mobile Nav)
===================================================== */

/* ----------------------------------------------
   THEME TOGGLER
---------------------------------------------- */
function toggleTheme() {
  let t = localStorage.getItem("theme");

  if (!t || t === "light") {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else if (t === "dark") {
    document.body.classList.remove("dark");
    document.body.classList.add("neon");
    localStorage.setItem("theme", "neon");
  } else {
    document.body.classList.remove("neon");
    localStorage.setItem("theme", "light");
  }
}

// Apply saved theme on page load
window.addEventListener("load", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.body.classList.add("dark");
  if (saved === "neon") document.body.classList.add("neon");
});


/* ----------------------------------------------
   MOBILE NAV
---------------------------------------------- */
function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("active");
}


/* ----------------------------------------------
   LANGUAGE TRANSLATION
---------------------------------------------- */

const translations = {
  en: {
    register_title: "Create Account",
    register_sub: "Join the Student Learning Zone",
    login_title: "Welcome Back",
    login_sub: "Happy to see you again!",
    forgot_title: "Reset Password",
    forgot_sub: "We will send a reset link",
    change_title: "Change Password",
    change_sub: "Update your account security",

    // Buttons
    btn_register: "Register",
    btn_login: "Login",
    btn_reset: "Send Reset Link",
    btn_change: "Update Password",

    // Links
    link_have_acc: "Already have an account?",
    link_no_acc: "Don't have an account?",
    link_back_login: "Back to Login"
  },

  hi: {
    register_title: "खाता बनाएँ",
    register_sub: "स्टूडेंट लर्निंग ज़ोन में शामिल हों",
    login_title: "वापसी पर स्वागत है",
    login_sub: "आपसे फिर मिलकर खुशी हुई!",
    forgot_title: "पासवर्ड रीसेट करें",
    forgot_sub: "हम लिंक भेजेंगे",
    change_title: "पासवर्ड बदलें",
    change_sub: "अपने खाते की सुरक्षा अपडेट करें",

    btn_register: "रजिस्टर करें",
    btn_login: "लॉगिन",
    btn_reset: "रीसेट लिंक भेजें",
    btn_change: "पासवर्ड अपडेट करें",

    link_have_acc: "पहले से खाता है?",
    link_no_acc: "खाता नहीं है?",
    link_back_login: "लॉगिन पर वापस जाएँ"
  },

  es: {
    register_title: "Crear Cuenta",
    register_sub: "Únete a la Zona de Estudiantes",
    login_title: "Bienvenido",
    login_sub: "¡Nos alegra verte de nuevo!",
    forgot_title: "Restablecer Contraseña",
    forgot_sub: "Te enviaremos un enlace",
    change_title: "Cambiar Contraseña",
    change_sub: "Actualiza tu seguridad",

    btn_register: "Registrar",
    btn_login: "Iniciar Sesión",
    btn_reset: "Enviar Enlace",
    btn_change: "Actualizar Contraseña",

    link_have_acc: "¿Ya tienes cuenta?",
    link_no_acc: "¿No tienes cuenta?",
    link_back_login: "Volver a Iniciar"
  }
};


// Language switcher
function changeLang(lang) {
  localStorage.setItem("language", lang);

  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    let key = el.getAttribute("data-i18n");
    if (t[key]) el.innerText = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(input => {
    let key = input.getAttribute("data-i18n-placeholder");
    if (t[key]) input.placeholder = t[key];
  });
}

// apply selected language on load
window.addEventListener("load", () => {
  let lang = localStorage.getItem("language") || "en";
  changeLang(lang);
});
// =============================
// THEME TOGGLE
// =============================
function toggleTheme() {
    const body = document.body;

    if (!localStorage.theme) localStorage.theme = "light";

    if (localStorage.theme === "light") {
        body.classList.add("dark");
        localStorage.theme = "dark";
    }
    else if (localStorage.theme === "dark") {
        body.classList.remove("dark");
        body.classList.add("neon");
        localStorage.theme = "neon";
    }
    else {
        body.classList.remove("neon");
        localStorage.theme = "light";
    }
}

// Apply theme on load
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.theme === "dark") document.body.classList.add("dark");
    if (localStorage.theme === "neon") document.body.classList.add("neon");
});


// =============================
// LANGUAGE SYSTEM (FULLY WORKING)
// =============================

// Language dictionary
const i18n = {
    en: {
        home: "Home",
        courses: "Courses",
        books: "Books",
        live: "Live Classes",

        register_title: "Create Account",
        register_sub: "Join the Digital Market Suite",

        login_title: "Welcome Back",
        login_sub: "Login to continue learning",

        forgot_title: "Forgot Password?",
        forgot_sub: "We'll help you reset it",

        change_title: "Change Password",
        change_sub: "Update your new password",
    },

    hi: {
        home: "होम",
        courses: "कोर्स",
        books: "पुस्तकें",
        live: "लाइव कक्षाएँ",

        register_title: "खाता बनाएँ",
        register_sub: "डिजिटल मार्केट सूट से जुड़ें",

        login_title: "वापसी पर स्वागत है",
        login_sub: "लर्निंग जारी रखने के लिए लॉगिन करें",

        forgot_title: "पासवर्ड भूल गए?",
        forgot_sub: "हम आपकी मदद करेंगे",

        change_title: "पासवर्ड बदलें",
        change_sub: "नया पासवर्ड अपडेट करें",
    },

    es: {
        home: "Inicio",
        courses: "Cursos",
        books: "Libros",
        live: "Clases en Vivo",

        register_title: "Crear Cuenta",
        register_sub: "Únete al Digital Market Suite",

        login_title: "Bienvenido de Nuevo",
        login_sub: "Inicia sesión para continuar",

        forgot_title: "¿Olvidaste tu Contraseña?",
        forgot_sub: "Te ayudaremos a restablecerla",

        change_title: "Cambiar Contraseña",
        change_sub: "Actualiza tu nueva contraseña",
    }
};


// Save selected language
function changeLang(lang) {
    localStorage.language = lang;
    applyLanguage();
}

// Apply translation to page
function applyLanguage() {
    let lang = localStorage.language || "en";
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });

    // Update dropdown selection visually
    const dropdown = document.getElementById("langSelect");
    if (dropdown) dropdown.value = lang;
}

// Apply language after page loads
document.addEventListener("DOMContentLoaded", applyLanguage);


// =============================
// MOBILE NAV MENU
// =============================
function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}


// =============================
// SIMPLE FORM VALIDATION
// =============================
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll("input[required]");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Please fill all fields");
            return false;
        }
    }
    return true;
}

/* ----------------------------------------------
   FORM VALIDATION (GLOBAL)
---------------------------------------------- */
function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll("input");

  for (let i of inputs) {
    if (!i.value.trim()) {
      alert("Please complete all fields!");
      i.focus();
      return false;
    }
  }

  // email extra check
  const email = form.querySelector("input[type='email']");
  if (email && !email.value.includes("@")) {
    alert("Invalid email.");
    email.focus();
    return false;
  }

  return true;
}
