import gsap from 'gsap';

const fadeIn = (container) => {
  return gsap.from(container, {autoAlpha: 0, duration: 0.5, clearProps: 'all', ease: 'none'})
}

export default fadeIn
