const tl = gsap.timeline();

const logo__rect = document.getElementsByClassName('logo__rect');
const logo__text = document.getElementsByClassName('logo__text')

gsap.from(logo__rect, 2, {xPercent: '-500', opacity: 0, ease: "power2.out"});
gsap.from(logo__text, 2, {xPercent: '100', opacity: 0, ease: "power2.out"});
