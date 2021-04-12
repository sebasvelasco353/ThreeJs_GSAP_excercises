const tl = gsap.timeline();
const tl2 = gsap.timeline({paused: true})

tl.from('.header-title', 1.5, {ease: Power1.easeOut, y: 100});
tl.from('.container-title__span', 1.5, {ease: Power1.easeOut, y: 100}, '-=1.5');
tl.add(() => { tl2.play() });
tl.to('header', 1, {ease: Power1.easeOut, x: 0});
tl.from('.header-link', 2, {ease: Power1.easeOut, opacity: 0}, '-=.5');

tl2.from('.body-image__wrapper', 1.5, {yPercent: 110});
tl2.from('.body-image', 1.5, {yPercent: -110}, '-=1.5');
