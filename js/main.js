(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (entry.target.classList.contains("hero")) {
              document.documentElement.classList.add("hero-animate");
            }
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      var children = el.children ? Array.prototype.slice.call(el.children) : [];
      if (children.length) {
        children.forEach(function (child, idx) {
          if (child && child.style) child.style.transitionDelay = String(idx * 60) + "ms";
        });
      }
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var cfg = window.SITE_CONFIG;
  if (!cfg) return;

  var yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var mailEls = document.querySelectorAll("[data-site-email]");
  mailEls.forEach(function (el) {
    el.textContent = cfg.email;
    if (el.tagName === "A") el.href = "mailto:" + cfg.email;
  });

  var liEls = document.querySelectorAll("[data-site-linkedin]");
  liEls.forEach(function (el) {
    el.href = cfg.linkedin;
  });

  var form = document.getElementById("contact-form");
  if (form) {
    if (cfg.formAction && !cfg.formAction.includes("REPLACE")) {
      form.action = cfg.formAction;
      form.removeAttribute("novalidate");
    }
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action");
      if (!action || action === "#") {
        e.preventDefault();
        window.alert("Configure formAction in js/site-config.js with your Formspree (or other) endpoint.");
      }
    });
  }

  if (cfg.plausibleDomain && document.head) {
    var s = document.createElement("script");
    s.defer = true;
    s.dataset.domain = cfg.plausibleDomain;
    s.src = "https://plausible.io/js/script.js";
    document.head.appendChild(s);
  }
})();
