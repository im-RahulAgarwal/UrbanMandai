function toggleMenu() {
	if (window.innerWidth < 768) {
		const menuTag = document.getElementById("menu");
		if (menuTag.classList.contains("hidden")) {
			menuTag.classList.remove("hidden");
			menuTag.classList.add("flex");
		} else {
			menuTag.classList.remove("flex");
			menuTag.classList.add("hidden");
		}
	}
}

function addBackgroundToHeader() {
	const headerTag = document.getElementById("header");
	if (window.scrollY > 100) {
		headerTag.classList.remove("bg-transparent");
		headerTag.classList.add("bg-white");
		headerTag.classList.add("shadow-md");
		document.querySelectorAll("header .nav-link").forEach((element) => {
			element.classList.remove("text-white");
			element.classList.add("text-black");
		});
	} else {
		headerTag.classList.add("bg-transparent");
		headerTag.classList.remove("bg-white");
		headerTag.classList.remove("shadow-md");
		document.querySelectorAll("header .nav-link").forEach((element) => {
			element.classList.remove("text-black");
			element.classList.add("text-white");
		});
	}
}

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("menuButton").addEventListener("click", toggleMenu);
	document.getElementById("closeButton").addEventListener("click", toggleMenu);

	window.addEventListener("scroll", addBackgroundToHeader);

	const headers = document.querySelectorAll(".accordion-header");

	headers.forEach((header, index) => {
		const body = header.nextElementSibling;
		const icon = header.querySelector(".accordion-icon");

		header.addEventListener("click", () => {
			const isOpen = header.getAttribute("aria-expanded") === "true";

			document.querySelectorAll(".accordion-body").forEach((element) => {
				element.classList.add("hidden");
			});

			document.querySelectorAll(".accordion-header").forEach((element) => {
				element.setAttribute("aria-expanded", "false");
				element.querySelector(".accordion-icon").classList.remove("rotate-180");
			});

			if (!isOpen) {
				header.setAttribute("aria-expanded", true);
				icon.classList.add("rotate-180");
				body.classList.remove("hidden");
			}
		});
	});

	document.querySelectorAll("#menu .mobile-nav-item").forEach((element) => {
		element.addEventListener("click", () => {
			const menuTag = document.getElementById("menu");
			menuTag.classList.remove("flex");
			menuTag.classList.add("hidden");
		});
	});
});
