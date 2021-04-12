const tl = gsap.timeline();
const background_tl = gsap.timeline({paused: true})

tl.from('.header-title', 1.5, {ease: Power1.easeOut, yPercent: 100});

tl.from('.container-title__wrapper', 1, {yPercent: 110});
tl.from('.container-title', 1, {yPercent: -110}, '-=1');

tl.add(() => {background_tl.play()});

tl.to('header', 1, {ease: Power1.easeOut, x: 0});
tl.from('.header-link', .5, {ease: Power1.easeOut, yPercent: 100});

background_tl.from('.body-image__wrapper', 1.5, {yPercent: 110});
background_tl.from('.body-image', 1.5, {yPercent: -110}, '-=1.5');
