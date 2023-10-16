class Navbar {
  constructor() {
    this.navbar = document.querySelector(".header .navbar");
    this.setup();
  }

  setup() {
    document.querySelector("#menu-btn").onclick = () => {
      this.navbar.classList.add("active");
    };
    document.querySelector("#close-navbar").onclick = () => {
      this.navbar.classList.remove("active");
    };
  }
}

class AccountForm {
  constructor() {
    this.loginBtn = document.querySelector(".account-form .login-btn");
    this.registerBtn = document.querySelector(".account-form .register-btn");
    this.loginForm = document.querySelector(".account-form .login-form");
    this.registerForm = document.querySelector(".account-form .register-form");
    this.accountForm = document.querySelector(".account-form");
    this.setup();
  }

  setup() {
    this.loginBtn.addEventListener("click", () => {
      this.loginForm.classList.add("active");
      this.registerForm.classList.remove("active");
      this.loginBtn.classList.add("active");
      this.registerBtn.classList.remove("active");
    });

    this.registerBtn.addEventListener("click", () => {
      this.registerForm.classList.add("active");
      this.loginForm.classList.remove("active");
      this.registerBtn.classList.add("active");
      this.loginBtn.classList.remove("active");
    });

    document.querySelector("#account-btn").onclick = () => {
      this.accountForm.classList.add("active");
    };
    document.querySelector("#close-form").onclick = () => {
      this.accountForm.classList.remove("active");
    };
  }
}

class SwiperManager {
  constructor() {
    this.swiperConfigs = [
      // Ajoutez ici d'autres configurations de swiper
    ];

    this.initializeSwipers();
  }

  initializeSwipers() {
    this.swiperConfigs.forEach((config) => {
      new Swiper(config.selector, config.options);
    });
  }
}

class Accordion {
  constructor() {
    this.accordion = document.querySelectorAll(".faq .accordion-container .accordion");
    this.setup();
  }

  setup() {
    this.accordion.forEach((acco) => {
      acco.onclick = () => {
        this.accordion.forEach((dion) => dion.classList.remove("active"));
        acco.classList.toggle("active");
      };
    });
  }
}

class LoadMore {
  constructor() {
    this.setup();
  }

  setup() {
    document.querySelector(".load-more .btn").onclick = () => {
      document.querySelectorAll(".courses .box-container .hide").forEach((show) => {
        show.style.display = "block";
      });
      document.querySelector(".load-more .btn").style.display = "none";
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Navbar();
  new AccountForm();
  new SwiperManager();
  new Accordion();
  new LoadMore();
});
