function animationScroll(index) {
    windowHeight = window.innerHeight / 1.3;
    const scale = document.querySelectorAll('.scale');
    const animHor = document.querySelectorAll('.anim-hor');
    const animHor2 = document.querySelectorAll('.anim-hor-2');
    const animVar = document.querySelectorAll('.anim-var');

    for (i = 0; i < scale.length; i++) {
        const scaleTop = scale[i].getBoundingClientRect().top;
        if (scaleTop < windowHeight) {
            scale[i].classList.add('scale-anim');
            scale[i].classList.add('anim-scroll')
        }
    }


    for (i = 0; i < animVar.length; i++) {
        const animVarTop = animVar[i].getBoundingClientRect().top;
        if (animVarTop < windowHeight) {
            animVar[i].classList.add('anim-scroll')
            animVar[i].classList.add('anim-var-trans')
        }
    }
    

    for (i = 0; i < animHor.length; i++) {
        const animHorTop = animHor[i].getBoundingClientRect().top;
        if (animHorTop < windowHeight) {
            animHor[i].classList.add('anim-scroll')
            animHor[i].classList.add('anim-hor-trans')
        }
    }

    for (i = 0; i < animHor2.length; i++) {
        const animHor2Top = animHor2[i].getBoundingClientRect().top;
        if (animHor2Top < windowHeight) {
            animHor2[i].classList.add('anim-scroll')
            animHor2[i].classList.add('anim-hor-2-trans')
        }
    }
}

animationScroll()

window.onscroll = animationScroll