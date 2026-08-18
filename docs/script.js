document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {

        mobileMenu.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            const icon = mobileMenu.querySelector("i");

            if (navLinks.classList.contains("show")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    }


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("show");
            }

            const icon = mobileMenu
                ? mobileMenu.querySelector("i")
                : null;

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        links.forEach(function (link) {

            link.classList.remove("active");

            const target = link.getAttribute("href");

            if (target === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =========================
       FOOTER YEAR
    ========================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================
       TERMINAL TYPING EFFECT
    ========================= */

    const typingElement = document.querySelector(".typing");

    if (typingElement) {

        let visible = true;

        setInterval(function () {

            visible = !visible;

            typingElement.style.opacity = visible ? "1" : "0";

        }, 500);

    }


    /* =========================
       CARD REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".about-card, .tech-card, .access-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });

});