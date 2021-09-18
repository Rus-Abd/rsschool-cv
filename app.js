const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');
    const img = document.querySelector('.face__img');
    const navBar = document.querySelector('.navbar')
    const lines = document.querySelectorAll('.burger div')
    //toggle burger 
    burger.addEventListener('click', () => {
        if (img.style.display == 'inline') {
            img.style.display = 'none';
        }
        else { img.style.display = 'inline'; }

        nav.classList.toggle('nav-active');

        if (navBar.style.cssText) { navBar.style.cssText = ''; }
        else { navBar.style.cssText = 'background-color:black'; }
        if (navBar.style.animation) { navBar.style.animation = '' }
        else { }

        lines.forEach(link => {
            if (link.style.cssText) { link.style.cssText = '' }
            else { link.style.cssText = 'background-color:white'; }
        })
        //links animation

        navLinks.forEach((link, index) => {
            if (link.style.animation) { link.style.animation = '' }
            else { link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.2}s` }
            // if (link.style.cssText == 'black') { link.style.cssText = 'white'; }
            // else {
            //     link.style.cssText == 'black'
            // }
        })

        burger.classList.toggle('toggle');
    });


}

navSlide();