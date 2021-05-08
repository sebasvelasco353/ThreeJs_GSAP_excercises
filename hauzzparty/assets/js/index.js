const main__timeline = gsap.timeline();
const logo__timeline = gsap.timeline();
const welcome__timeline = gsap.timeline();

const home__logo =  document.getElementsByClassName('home__logo');
const logo__rect = document.getElementsByClassName('logo__rect');
const logo__text = document.getElementsByClassName('logo__text')

const welcome__text = document.getElementsByClassName('welcome__text');
const welcome__img = document.getElementsByClassName('welcome__img');

const home__buttonDark = document.getElementsByClassName('home__button-dark');
const home__buttonLight = document.getElementsByClassName('home__button-light');


main__timeline.from(logo__rect, 2, {xPercent: '-500', opacity: 0, ease: "power2.out"});
main__timeline.from(logo__text, 2, {xPercent: '100', opacity: 0, ease: "power2.out"}, '-=2');
main__timeline.from(home__logo, 1.5, {y: '30vh', ease: "power2.out"});

main__timeline.from(welcome__text, 2, {xPercent: '-100', opacity: 0, ease: "power2.out"});
main__timeline.from(welcome__img, 2, {xPercent: '100', opacity: 0, ease: "power2.out"}, '-=1.5');

main__timeline.from(home__buttonDark, 2, {xPercent: '-100', opacity: 0, ease: "power2.out"});
main__timeline.from(home__buttonLight, 2, {xPercent: '100', opacity: 0, ease: "power2.out"}, '-=2');
