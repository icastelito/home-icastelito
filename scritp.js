// Menu Mobile Toggle
document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.querySelector(".menu-toggle");
	const navList = document.querySelector(".nav-list");

	if (menuToggle && navList) {
		menuToggle.addEventListener("click", function () {
			navList.classList.toggle("active");
		});

		// Fechar menu ao clicar em um link
		navList.querySelectorAll(".nav-link").forEach((link) => {
			link.addEventListener("click", function () {
				navList.classList.remove("active");
			});
		});
	}

	// Newsletter Form (simulação)
	const newsletterForm = document.querySelector(".newsletter-form");
	if (newsletterForm) {
		newsletterForm.addEventListener("submit", function (e) {
			e.preventDefault();
			const email = this.querySelector('input[type="email"]').value;
			if (email) {
				alert("Obrigado por se inscrever! Você receberá nossas atualizações em: " + email);
				this.reset();
			}
		});
	}

	// Contact Form (simulação)
	const contactForm = document.querySelector(".contact-form");
	if (contactForm) {
		contactForm.addEventListener("submit", function (e) {
			e.preventDefault();
			alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
			this.reset();
		});
	}
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
			});
		}
	});
});
