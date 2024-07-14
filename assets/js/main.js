// script.js
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });

    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;

        // Cek apakah navList memiliki kelas 'nav-active' sebelum mengubah visibilitas burger
        if (!navList.classList.contains('nav-active')) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                burger.classList.add('hidden');
            } else {
                // Scrolling up
                burger.classList.remove('hidden');
            }
        }

        lastScrollTop = scrollTop;
    });
};

navSlide();

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};
