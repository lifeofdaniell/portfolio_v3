import gsap from 'gsap';

const fadeOut = (container) => {
  return gsap.to(container, {autoAlpha: 0, duration: 0.5, clearProps: 'all', ease: 'none'})
}

export default fadeOut