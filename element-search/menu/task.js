let menuLink = document.querySelectorAll("ul.menu.menu_main > li.menu__item > a.menu__link");

menuLink.forEach(e => {
    e.onclick = () => {
        let menuActive = document.querySelectorAll("ul.menu.menu_main > li.menu__item > ul.menu.menu_sub.menu_active");
        console.log(menuActive);
        if (e.closest(".menu__item").querySelector("ul.menu.menu_sub") != null) {
            e.closest(".menu__item").querySelector("ul.menu.menu_sub").classList.add("menu_active");
            if (menuActive.length != 0) {
                menuActive[0].classList.remove("menu_active");
            }
            return false;
        }  
    }
});

